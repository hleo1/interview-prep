# 🎯 Voice Trivia Game - Complete Setup Guide

A full-stack voice-powered trivia game using LiveKit Agents, OpenAI Realtime API, and React.

## 🎬 Quick Start

### 1. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

**Agent:**
```bash
cd agent-node
npm install
npm run download-files
```

### 2. Start Services (3 terminals)

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
✅ Runs on `http://localhost:3001`

**Terminal 2 - Voice Agent:**
```bash
cd agent-node
npm run dev
```
✅ Connects to LiveKit Cloud

**Terminal 3 - Frontend:**
```bash
cd frontend
npm run dev
```
✅ Runs on `http://localhost:5173`

### 3. Play!

1. Open `http://localhost:5173` in your browser
2. Click **"Start Playing"**
3. Allow microphone access
4. Wait for the AI host to greet you
5. Answer questions with your voice!

## 🎮 How to Play

1. **Listen** - The AI host asks a trivia question
2. **Speak** - Say your answer out loud
3. **Score** - Get instant feedback (correct/incorrect)
4. **Continue** - Say "next question" or "ask me another"
5. **End** - Say "end game" or click "End Session"

## 📊 Features

### Frontend (React + LiveKit)
- 🎤 **Voice Interface** - Real-time voice interaction
- 📈 **Live Scoring** - Score, questions asked, and accuracy percentage
- 🎨 **Beautiful UI** - Gradient design with animations
- 🔊 **Audio Visualizer** - See the AI speaking/listening
- 📱 **Responsive** - Works on desktop and mobile

### Backend (Node.js + Express)
- 🔐 **Token Generation** - LiveKit access tokens
- 💾 **Score Tracking** - In-memory score storage
- 🌐 **CORS Enabled** - Frontend communication
- 📡 **API Endpoints** - RESTful API

### Voice Agent (LiveKit + OpenAI)
- 🤖 **OpenAI Realtime** - Speech-to-speech AI
- 🎯 **Smart Scoring** - Fuzzy answer matching
- 📚 **Multiple Categories** - Science, History, Geography, Movies, Sports
- 🧠 **Function Tools** - Question asking, answer checking, score tracking
- 🔄 **Question Pool** - 15 questions with auto-reshuffle

## 🏗️ Architecture

```
┌─────────────────┐
│   React UI      │  (Port 5173)
│   - Voice UI    │
│   - Score Display│
└────────┬────────┘
         │
         ↓ HTTP/WebSocket
┌─────────────────┐
│ Express Backend │  (Port 3001)
│ - Token Gen     │
│ - Score API     │
└────────┬────────┘
         │
         ↓ LiveKit Protocol
┌─────────────────┐
│   LiveKit       │  (Cloud)
│   Agents        │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  Voice Agent    │  (Node.js)
│  - OpenAI RT    │
│  - Trivia Logic │
└─────────────────┘
```

## 🔧 Configuration

### Backend `.env`
Already configured in `backend/.env`:
```env
LIVEKIT_API_KEY=...
LIVEKIT_API_SECRET=...
LIVEKIT_WSS_URL=...
OPEN_AI_API_KEY=...
```

### Frontend `.env`
Already configured in `frontend/.env`:
```env
VITE_LIVEKIT_URL=wss://creed-interview-7y6zmroa.livekit.cloud
VITE_BACKEND_URL=http://localhost:3001
```

### Agent `.env`
Already configured in `agent-node/.env`:
```env
LIVEKIT_API_KEY=...
LIVEKIT_API_SECRET=...
LIVEKIT_URL=...
OPENAI_API_KEY=...
```

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, TypeScript, Tailwind CSS v3, Vite |
| **UI Components** | LiveKit Components React |
| **Backend** | Node.js, Express 5, TypeScript |
| **Voice Agent** | LiveKit Agents (Node.js), OpenAI Realtime API |
| **Real-time** | LiveKit WebRTC |
| **AI** | OpenAI Realtime API (speech-to-speech) |

## 🎯 API Endpoints

### LiveKit Token
```http
POST /api/livekit/token
Content-Type: application/json

{
  "room_name": "trivia-123",
  "participant_name": "player-abc"
}
```

### Score Management
```http
# Update score
POST /api/trivia/score
{
  "participant_id": "player-abc",
  "score": 5,
  "questions_asked": 7
}

# Get score
GET /api/trivia/score/:participant_id

# Get all scores
GET /api/trivia/scores

# Clear scores
DELETE /api/trivia/scores
```

## 🎨 UI States

The frontend displays different states:
- 🟡 **Connecting** - Establishing connection
- 🔵 **Initializing** - Setting up agent
- 🟢 **Listening** - Ready for your answer
- 🟣 **Thinking** - Processing your response
- 🔵 **Speaking** - AI is talking

## 🐛 Troubleshooting

### Backend won't start
- Check if port 3001 is available
- Verify `.env` file exists in `backend/`
- Run `npm install` in backend directory

### Agent won't connect
- Ensure LiveKit credentials are correct
- Check if `npm run download-files` was executed
- Verify OpenAI API key is valid

### Frontend can't connect
- Check backend is running on port 3001
- Verify agent is running and connected
- Check browser console for errors
- Ensure microphone permissions are granted

### No audio
- Check microphone permissions in browser
- Verify audio input device is working
- Try refreshing the page
- Check browser compatibility (Chrome/Edge recommended)

## 🚀 Production Deployment

### Deploy Agent to LiveKit Cloud
```bash
cd agent-node
lk agent create
```

### Environment Variables
Make sure to set production URLs in frontend `.env`:
```env
VITE_LIVEKIT_URL=wss://your-production-url.livekit.cloud
VITE_BACKEND_URL=https://your-backend-url.com
```

## 📝 Adding More Questions

Edit `agent-node/trivia-data.ts`:

```typescript
{
  category: "Movies",
  question: "Who directed Inception?",
  answer: "Christopher Nolan",
  alternatives: ["christopher nolan", "nolan"]
}
```

## 🎤 Voice Commands

Try saying:
- "Next question"
- "Ask me another"
- "What's my score?"
- "End game"
- Or just answer the questions directly!

## 💡 Tips

- Speak clearly and at a normal pace
- Wait for the AI to finish asking before answering
- You can interrupt the AI if needed
- The agent understands variations of correct answers
- You can ask for your score anytime

## 🎉 Have Fun!

Enjoy playing trivia with your AI host! 🤖🎯

