"""
LiveKit Voice Agent for Trivia Game
This agent hosts a trivia game where users can answer questions via voice.
"""
import logging
import random
import asyncio
import aiohttp
from pathlib import Path
from dotenv import load_dotenv
from livekit import agents, rtc
from livekit.agents import AgentServer, AgentSession, Agent, room_io
from livekit.agents.llm import function_tool
from livekit.plugins import openai, noise_cancellation
from trivia_data import TRIVIA_QUESTIONS

load_dotenv(Path(__file__).parent / ".env")

logger = logging.getLogger("trivia-agent")
logger.setLevel(logging.INFO)

# Backend API URL for score updates
BACKEND_URL = "http://localhost:3001"

class TriviaState:
    """Maintains the state of the trivia game"""
    def __init__(self):
        self.score = 0
        self.questions_asked = 0
        self.current_question = None
        self.available_questions = TRIVIA_QUESTIONS.copy()
        random.shuffle(self.available_questions)
        self.participant_identity = None
        self.game_active = True
    
    def get_next_question(self):
        """Get the next random question"""
        if not self.available_questions:
            # Reshuffle if we run out
            self.available_questions = TRIVIA_QUESTIONS.copy()
            random.shuffle(self.available_questions)
        
        self.current_question = self.available_questions.pop()
        self.questions_asked += 1
        return self.current_question
    
    def check_answer(self, user_answer: str) -> bool:
        """Check if the user's answer is correct"""
        if not self.current_question:
            return False
        
        user_answer_lower = user_answer.lower().strip()
        correct_answer_lower = self.current_question["answer"].lower()
        
        # Check exact match or alternatives
        if user_answer_lower == correct_answer_lower:
            return True
        
        # Check alternatives
        for alt in self.current_question.get("alternatives", []):
            if user_answer_lower == alt.lower():
                return True
        
        # Check if answer is contained in user's response (more lenient)
        if correct_answer_lower in user_answer_lower:
            return True
            
        return False


class TriviaHostAgent(Agent):
    """Voice agent that hosts the trivia game"""
    
    def __init__(self, trivia_state: TriviaState) -> None:
        super().__init__(
            instructions="""You are an enthusiastic and friendly trivia game host.
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
            After giving feedback, ask if they want another question.
            """,
        )
        self.trivia_state = trivia_state
    
    async def update_backend_score(self):
        """Send score update to the backend API"""
        try:
            async with aiohttp.ClientSession() as session:
                payload = {
                    "participant_id": self.trivia_state.participant_identity or "guest",
                    "score": self.trivia_state.score,
                    "questions_asked": self.trivia_state.questions_asked
                }
                async with session.post(
                    f"{BACKEND_URL}/api/trivia/score",
                    json=payload,
                    timeout=aiohttp.ClientTimeout(total=5)
                ) as response:
                    if response.status == 200:
                        logger.info(f"Score updated: {payload}")
                    else:
                        logger.warning(f"Failed to update score: {response.status}")
        except Exception as e:
            logger.error(f"Error updating backend score: {e}")
    
    @function_tool
    async def ask_trivia_question(self):
        """Ask the next trivia question to the user"""
        question_data = self.trivia_state.get_next_question()
        question_text = f"Here's question number {self.trivia_state.questions_asked}. Category: {question_data['category']}. {question_data['question']}"
        
        logger.info(f"Asking question: {question_data['question']}")
        logger.info(f"Correct answer: {question_data['answer']}")
        
        return None, f"Ask the user: '{question_text}'. Then wait for their answer."
    
    @function_tool
    async def check_user_answer(self, user_answer: str):
        """
        Check if the user's answer is correct and update their score.
        
        Args:
            user_answer: The answer provided by the user
        """
        is_correct = self.trivia_state.check_answer(user_answer)
        
        if is_correct:
            self.trivia_state.score += 1
            feedback = f"That's correct! The answer is {self.trivia_state.current_question['answer']}. Great job! Your score is now {self.trivia_state.score} out of {self.trivia_state.questions_asked}."
        else:
            feedback = f"Sorry, that's not quite right. The correct answer is {self.trivia_state.current_question['answer']}. Your score is {self.trivia_state.score} out of {self.trivia_state.questions_asked}."
        
        logger.info(f"User answered: {user_answer} - {'Correct' if is_correct else 'Incorrect'}")
        logger.info(f"Current score: {self.trivia_state.score}/{self.trivia_state.questions_asked}")
        
        # Update backend
        await self.update_backend_score()
        
        return None, feedback
    
    @function_tool
    async def get_current_score(self):
        """Get the user's current score"""
        return None, f"Your current score is {self.trivia_state.score} out of {self.trivia_state.questions_asked} questions."
    
    @function_tool
    async def end_game(self):
        """End the trivia game and show final score"""
        self.trivia_state.game_active = False
        percentage = (self.trivia_state.score / self.trivia_state.questions_asked * 100) if self.trivia_state.questions_asked > 0 else 0
        
        final_message = f"Thanks for playing! Your final score is {self.trivia_state.score} out of {self.trivia_state.questions_asked}. That's {percentage:.1f} percent correct. Great job!"
        
        await self.update_backend_score()
        
        return None, final_message
    
    async def on_enter(self):
        """Called when agent enters the room"""
        await self.session.say(
            """Welcome to Trivia Time! I'm your host and I'm excited to test your knowledge. 
            I'll ask you questions from different categories like Science, History, Geography, Movies, and Sports. 
            Just answer with what you think is correct. Ready to start? Let me ask you the first question!""",
            allow_interruptions=False
        )
        
        # Ask first question automatically
        await asyncio.sleep(0.5)
        question_data = self.trivia_state.get_next_question()
        question_text = f"Question number {self.trivia_state.questions_asked}. Category: {question_data['category']}. {question_data['question']}"
        
        logger.info(f"First question: {question_data['question']}")
        logger.info(f"Correct answer: {question_data['answer']}")
        
        await self.session.say(question_text)


# Create agent server
server = AgentServer()

@server.rtc_session()
async def trivia_session(ctx: agents.JobContext):
    """Main entry point for the trivia agent"""
    
    # Create trivia state for this session
    trivia_state = TriviaState()
    
    # Get participant identity if available
    await ctx.connect()
    if ctx.room.remote_participants:
        participant = list(ctx.room.remote_participants.values())[0]
        trivia_state.participant_identity = participant.identity
        logger.info(f"Participant joined: {participant.identity}")
    
    # Create agent session with OpenAI Realtime
    session = AgentSession(
        llm=openai.realtime.RealtimeModel(
            voice="alloy",  # Friendly voice for trivia host
            temperature=0.8,
            instructions="You are an enthusiastic trivia game host. Keep responses natural and conversational."
        )
    )
    
    # Start the session
    await session.start(
        room=ctx.room,
        agent=TriviaHostAgent(trivia_state),
        room_options=room_io.RoomOptions(
            audio_input=room_io.AudioInputOptions(
                noise_cancellation=noise_cancellation.BVC(),
            ),
        ),
    )
    
    logger.info("Trivia agent session started")


if __name__ == "__main__":
    agents.cli.run_app(server)

