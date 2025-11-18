# Trivia Voice Agent

A LiveKit-powered voice agent that hosts an interactive trivia game using OpenAI's Realtime API.

## Features

- **Real-time voice interaction** using OpenAI's Realtime API
- **Multiple trivia categories**: Science, History, Geography, Movies, and Sports
- **Score tracking** with backend API integration
- **Natural conversation flow** with an enthusiastic AI host
- **Automatic question progression**

## Setup

### Prerequisites

- Python >= 3.9
- [uv](https://docs.astral.sh/uv/getting-started/installation/) package manager
- LiveKit Cloud account (or self-hosted LiveKit server)
- OpenAI API key

### Installation

1. Install dependencies:

```bash
uv sync
```

2. Download required model files:

```bash
uv run agent.py download-files
```

### Environment Variables

The `.env` file contains:

```
LIVEKIT_API_KEY=your_livekit_api_key
LIVEKIT_API_SECRET=your_livekit_api_secret
LIVEKIT_URL=wss://your-livekit-url.livekit.cloud
OPENAI_API_KEY=your_openai_api_key
```

## Running the Agent

### Development Mode

Connect to LiveKit Cloud and test with the playground:

```bash
uv run agent.py dev
```

### Production Mode

```bash
uv run agent.py start
```

## How It Works

1. **User joins**: The agent welcomes them and explains the game
2. **Question flow**: Agent asks a trivia question from a random category
3. **Answer evaluation**: User responds via voice, agent checks the answer
4. **Score update**: Score is tracked locally and sent to the backend API
5. **Repeat**: User can request more questions or end the game

## Trivia Data

Questions are stored in `trivia_data.py` with the following structure:

```python
{
    "category": "Science",
    "question": "What is the chemical symbol for gold?",
    "answer": "Au",
    "alternatives": ["gold", "au"]
}
```

## Backend Integration

The agent communicates with the Node.js backend at `http://localhost:3001/api/trivia/score` to:

- **POST** score updates after each question
- Store participant ID, score, and questions asked

## Architecture

```
User (Voice) <---> LiveKit <---> Voice Agent <---> Backend API
                                      |
                                Trivia Logic
                                Score Tracking
```

## Function Tools

The agent uses these function tools for game flow:

- `ask_trivia_question()`: Presents the next question
- `check_user_answer(answer)`: Evaluates correctness and updates score
- `get_current_score()`: Returns current score
- `end_game()`: Concludes the session and shows final score

## Customization

### Adding Questions

Edit `trivia_data.py` and add new questions to the `TRIVIA_QUESTIONS` list.

### Changing Voice

In `agent.py`, modify the voice parameter:

```python
llm=openai.realtime.RealtimeModel(
    voice="alloy",  # Options: alloy, echo, fable, onyx, nova, shimmer
    ...
)
```

### Adjusting Instructions

Modify the `instructions` parameter in the `TriviaHostAgent` class to change the agent's personality and behavior.

## Troubleshooting

- **Agent not connecting**: Check LiveKit credentials in `.env`
- **No audio**: Ensure microphone permissions are granted
- **Score not updating**: Verify backend is running on port 3001
- **Questions repeating**: Agent reshuffles questions when exhausted

## License

MIT

