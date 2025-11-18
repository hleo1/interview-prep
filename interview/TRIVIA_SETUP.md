# Trivia Voice Agent Setup Guide

## Quick Start

### 1. Backend Setup (Node.js)

```bash
cd backend
npm install
npm run dev
```

The backend will run on `http://localhost:3001`

### 2. Agent Setup

**Option A: Node.js Agent (Recommended)**

```bash
cd agent-node
npm install
npm run download-files
npm run dev
```

**Option B: Python Agent**

```bash
cd agent
uv sync
uv run agent.py download-files
uv run agent.py dev
```

The agent will connect to LiveKit Cloud and be ready to accept connections.

### 3. Test Your Agent

**Option A: LiveKit Playground**
- Go to your LiveKit Cloud dashboard
- Navigate to the Agents section
- Click on "Playground"
- Start a session and speak to your trivia agent!

**Option B: Python Console Mode (Local Testing)**
```bash
uv run agent.py console
```
This runs the agent locally in your terminal for quick testing.

## How It Works

### Flow

1. **User connects** → Agent greets and explains the game
2. **Agent asks question** → Randomly selected from trivia database
3. **User answers** → Voice response captured by STT
4. **Agent evaluates** → Checks answer against correct answer and alternatives
5. **Score updates** → Sent to backend API (`POST /api/trivia/score`)
6. **Repeat** → Agent asks if user wants another question

### Architecture

```
┌─────────────┐      ┌──────────────┐      ┌─────────────┐
│   User      │◄────►│   LiveKit    │◄────►│   Agent     │
│  (Voice)    │      │   (WebRTC)   │      │  (Python)   │
└─────────────┘      └──────────────┘      └──────┬──────┘
                                                    │
                                                    ▼
                                            ┌──────────────┐
                                            │   Backend    │
                                            │  (Node.js)   │
                                            └──────────────┘
```

### Technologies Used

- **LiveKit**: Real-time communication platform
- **OpenAI Realtime API**: Speech-to-speech voice interaction
- **Node.js/Express**: Backend API for score tracking
- **Node.js/TypeScript or Python**: Agent runtime (both available)

## API Endpoints

### POST /api/trivia/score
Update player score
```json
{
  "participant_id": "guest",
  "score": 5,
  "questions_asked": 7
}
```

### GET /api/trivia/score/:participant_id
Get score for a specific participant

### GET /api/trivia/scores
Get all scores

### DELETE /api/trivia/scores
Clear all scores

## Environment Variables

All credentials are already configured in:
- `/agent/.env` - Agent credentials
- `/backend/.env` - Backend configuration

## Trivia Categories

- 🔬 Science
- 📜 History
- 🌍 Geography
- 🎬 Movies
- ⚽ Sports

## Customization

### Add More Questions

Edit `agent/trivia_data.py`:

```python
{
    "category": "Music",
    "question": "Who is known as the King of Pop?",
    "answer": "Michael Jackson",
    "alternatives": ["michael jackson", "mj"]
}
```

### Change Agent Voice

Edit `agent/agent.py`, line ~178:

```python
llm=openai.realtime.RealtimeModel(
    voice="alloy",  # Change to: echo, fable, onyx, nova, shimmer
    ...
)
```

### Modify Agent Personality

Edit the `instructions` parameter in the `TriviaHostAgent` class (around line 58 in `agent.py`)

## Testing Checklist

- [ ] Backend running on port 3001
- [ ] Agent connected to LiveKit
- [ ] Can hear agent greeting
- [ ] Agent asks trivia questions
- [ ] Answers are evaluated correctly
- [ ] Score updates in backend logs
- [ ] Can request multiple questions
- [ ] Can end game gracefully

## Troubleshooting

**Agent won't start**
- Check LiveKit credentials in `.env`
- Ensure `download-files` was run
- Verify Python >= 3.9

**No audio in/out**
- Check microphone permissions
- Test with different browser/device
- Try console mode first

**Score not updating**
- Check backend is running
- Look for errors in backend terminal
- Verify BACKEND_URL in agent.py (default: http://localhost:3001)

**Questions not being asked**
- Check agent logs for errors
- Verify trivia_data.py is valid Python
- Ensure OpenAI API key is valid

## Production Deployment

When ready to deploy:

```bash
cd agent
lk agent create
```

This will:
1. Create a Dockerfile
2. Register with LiveKit Cloud
3. Deploy your agent

## Next Steps

1. Add frontend UI to display scores
2. Implement different difficulty levels
3. Add multiplayer support
4. Create custom question sets per user
5. Add time limits for answers
6. Implement leaderboards

