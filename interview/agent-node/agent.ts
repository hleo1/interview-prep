/**
 * LiveKit Voice Agent for Trivia Game (Node.js)
 * This agent hosts a trivia game where users can answer questions via voice.
 */

import {
  type JobContext,
  WorkerOptions,
  cli,
  defineAgent,
  voice,
  llm,
} from '@livekit/agents';
import * as openai from '@livekit/agents-plugin-openai';
import { BackgroundVoiceCancellation } from '@livekit/noise-cancellation-node';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { TRIVIA_QUESTIONS, shuffleArray, type TriviaQuestion } from './trivia-data.js';
import { z } from 'zod';

dotenv.config();

// Backend API URL for score updates
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001';

/**
 * Maintains the state of the trivia game
 */
class TriviaState {
  score: number = 0;
  questionsAsked: number = 0;
  currentQuestion: TriviaQuestion | null = null;
  availableQuestions: TriviaQuestion[];
  participantIdentity: string | null = null;
  gameActive: boolean = true;

  constructor() {
    this.availableQuestions = shuffleArray([...TRIVIA_QUESTIONS]);
  }

  getNextQuestion(): TriviaQuestion {
    if (this.availableQuestions.length === 0) {
      // Reshuffle if we run out
      this.availableQuestions = shuffleArray([...TRIVIA_QUESTIONS]);
    }

    this.currentQuestion = this.availableQuestions.pop()!;
    this.questionsAsked++;
    return this.currentQuestion;
  }

  checkAnswer(userAnswer: string): boolean {
    if (!this.currentQuestion) {
      return false;
    }

    const userAnswerLower = userAnswer.toLowerCase().trim();
    const correctAnswerLower = this.currentQuestion.answer.toLowerCase();

    // Check exact match
    if (userAnswerLower === correctAnswerLower) {
      return true;
    }

    // Check alternatives
    for (const alt of this.currentQuestion.alternatives) {
      if (userAnswerLower === alt.toLowerCase()) {
        return true;
      }
    }

    // Check if answer is contained in user's response (more lenient)
    if (userAnswerLower.includes(correctAnswerLower)) {
      return true;
    }

    return false;
  }

  async updateBackendScore(): Promise<void> {
    try {
      const payload = {
        participant_id: this.participantIdentity || 'guest',
        score: this.score,
        questions_asked: this.questionsAsked,
      };

      const response = await fetch(`${BACKEND_URL}/api/trivia/score`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('Score updated:', payload);
      } else {
        console.warn('Failed to update score:', response.status);
      }
    } catch (error) {
      console.error('Error updating backend score:', error);
    }
  }
}

/**
 * Voice agent that hosts the trivia game
 */
class TriviaHostAgent extends voice.Agent<TriviaState> {
  constructor(triviaState: TriviaState) {
    super({
      instructions: `You are an enthusiastic and friendly trivia game host.
Your role is to:
1. Welcome players warmly and explain the game
2. Ask trivia questions one at a time
3. Listen to the player's answer
4. Tell them if they're correct or incorrect
5. Keep track of their score
6. Be encouraging and fun!

When asking questions, speak clearly and wait for the user's response.
After they answer, immediately tell them if they're right or wrong.
Keep responses concise and engaging. Don't use asterisks or emojis in speech.
After giving feedback, ask if they want another question.`,
      tools: {
        ask_trivia_question: llm.tool({
          description: 'Ask the next trivia question to the user',
          execute: async (_, { ctx }: llm.ToolOptions<TriviaState>) => {
            const questionData = ctx.userData.getNextQuestion();
            const questionText = `Here's question number ${ctx.userData.questionsAsked}. Category: ${questionData.category}. ${questionData.question}`;

            console.log(`Asking question: ${questionData.question}`);
            console.log(`Correct answer: ${questionData.answer}`);

            return `Ask the user: '${questionText}'. Then wait for their answer.`;
          },
        }),

        check_user_answer: llm.tool({
          description:
            "Check if the user's answer is correct and update their score. Call this when the user provides an answer to a trivia question.",
          parameters: z.object({
            user_answer: z.string().describe('The answer provided by the user'),
          }),
          execute: async (
            { user_answer }: { user_answer: string },
            { ctx }: llm.ToolOptions<TriviaState>,
          ) => {
            const isCorrect = ctx.userData.checkAnswer(user_answer);

            let feedback: string;
            if (isCorrect) {
              ctx.userData.score++;
              feedback = `That's correct! The answer is ${ctx.userData.currentQuestion?.answer}. Great job! Your score is now ${ctx.userData.score} out of ${ctx.userData.questionsAsked}.`;
            } else {
              feedback = `Sorry, that's not quite right. The correct answer is ${ctx.userData.currentQuestion?.answer}. Your score is ${ctx.userData.score} out of ${ctx.userData.questionsAsked}.`;
            }

            console.log(
              `User answered: ${user_answer} - ${isCorrect ? 'Correct' : 'Incorrect'}`,
            );
            console.log(`Current score: ${ctx.userData.score}/${ctx.userData.questionsAsked}`);

            // Update backend
            await ctx.userData.updateBackendScore();

            return feedback;
          },
        }),

        get_current_score: llm.tool({
          description: "Get the user's current score",
          execute: async (_, { ctx }: llm.ToolOptions<TriviaState>) => {
            return `Your current score is ${ctx.userData.score} out of ${ctx.userData.questionsAsked} questions.`;
          },
        }),

        end_game: llm.tool({
          description: 'End the trivia game and show final score',
          execute: async (_, { ctx }: llm.ToolOptions<TriviaState>) => {
            ctx.userData.gameActive = false;
            const percentage =
              ctx.userData.questionsAsked > 0
                ? (ctx.userData.score / ctx.userData.questionsAsked) * 100
                : 0;

            const finalMessage = `Thanks for playing! Your final score is ${ctx.userData.score} out of ${ctx.userData.questionsAsked}. That's ${percentage.toFixed(1)} percent correct. Great job!`;

            await ctx.userData.updateBackendScore();

            return finalMessage;
          },
        }),
      },
    });
  }

  async onEnter(): Promise<void> {
    // Welcome message
    await this.session.say(
      `Welcome to Trivia Time! I'm your host and I'm excited to test your knowledge. 
I'll ask you questions from different categories like Science, History, Geography, Movies, and Sports. 
Just answer with what you think is correct. Ready to start? Let me ask you the first question!`,
      { allowInterruptions: false },
    );

    // Ask first question automatically
    await new Promise((resolve) => setTimeout(resolve, 500));
    const questionData = this.session.userData.getNextQuestion();
    const questionText = `Question number ${this.session.userData.questionsAsked}. Category: ${questionData.category}. ${questionData.question}`;

    console.log(`First question: ${questionData.question}`);
    console.log(`Correct answer: ${questionData.answer}`);

    await this.session.say(questionText);
  }
}

/**
 * Define the agent
 */
export default defineAgent({
  entry: async (ctx: JobContext) => {
    // Create trivia state for this session
    const triviaState = new TriviaState();

    // Connect to room
    await ctx.connect();

    // Get participant identity if available
    const participants = Array.from(ctx.room.remoteParticipants.values());
    if (participants.length > 0) {
      triviaState.participantIdentity = participants[0].identity;
      console.log(`Participant joined: ${participants[0].identity}`);
    }

    // Create agent session with OpenAI Realtime
    const session = new voice.AgentSession({
      llm: new openai.realtime.RealtimeModel({
        voice: 'alloy', // Friendly voice for trivia host
        temperature: 0.8,
      }),
      userData: triviaState,
    });

    // Start the session
    await session.start({
      agent: new TriviaHostAgent(triviaState),
      room: ctx.room,
      inputOptions: {
        noiseCancellation: BackgroundVoiceCancellation(),
      },
    });

    console.log('Trivia agent session started');
  },
});

// Run the agent
cli.runApp(new WorkerOptions({ agent: fileURLToPath(import.meta.url) }));
