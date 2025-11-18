# Score Persistence Feature

## Overview

Your trivia game now has persistent score tracking! Scores are saved to a JSON file on the backend and can be viewed in the frontend even after page reloads.

## What's New

### Backend Changes

1. **Persistent Storage** (`backend/src/storage/scores.ts`)
   - Scores are saved to `backend/data/scores.json`
   - Each game session creates a new score record with timestamp
   - Data persists across server restarts

2. **New API Endpoints**
   - `GET /api/trivia/history` - Get all score records (or filter by `?participant_id=xxx`)
   - `GET /api/trivia/leaderboard?limit=10` - Get top scores sorted by percentage
   - `POST /api/trivia/score` - Save a new score (already integrated with agent)
   - `DELETE /api/trivia/scores` - Clear all scores

### Frontend Changes

1. **Score History Component** (`components/app/score-history.tsx`)
   - Displays all past game scores in a collapsible panel
   - Automatically loads on mount
   - Shows participant, score, percentage, and timestamp
   - Awards 🏆 for perfect scores
   - Located in top-left corner with "📊 Past Scores" button

2. **Session View Integration**
   - Score History panel appears in the top-left
   - Current score display remains in top-right
   - Both work together seamlessly

## How to Use

### Starting the Services

1. **Start the Backend** (Terminal 1):
   ```bash
   cd backend
   npm run dev
   ```
   Backend runs on `http://localhost:3001`

2. **Start the Agent** (Terminal 2):
   ```bash
   cd agent-node
   npm run dev
   ```

3. **Start the Frontend** (Terminal 3):
   ```bash
   cd agent-starter-react
   npm run dev
   ```
   Frontend runs on `http://localhost:3000`

### Using the Feature

1. **Play a Trivia Game**
   - Join the frontend and start answering questions
   - Your score is automatically saved after each answer

2. **View Past Scores**
   - Click the "📊 Past Scores" button in the top-left corner
   - See all previous game sessions with scores, percentages, and timestamps
   - Click the refresh button (↻) to reload the list
   - Click "✕ Close" to hide the panel

3. **Data Persistence**
   - Scores are stored in `backend/data/scores.json`
   - Data survives page reloads and server restarts
   - The data directory is git-ignored (won't be committed)

## API Examples

### Get All Scores
```bash
curl http://localhost:3001/api/trivia/history
```

### Get Scores for Specific Player
```bash
curl http://localhost:3001/api/trivia/history?participant_id=guest
```

### Get Leaderboard (Top 10)
```bash
curl http://localhost:3001/api/trivia/leaderboard?limit=10
```

### Clear All Scores
```bash
curl -X DELETE http://localhost:3001/api/trivia/scores
```

## Score Record Format

Each score record contains:
```json
{
  "id": "guest-1234567890",
  "participant_id": "guest",
  "score": 8,
  "questions_asked": 10,
  "percentage": 80,
  "timestamp": "2025-11-17T12:34:56.789Z"
}
```

## Configuration

The backend URL is configured in `agent-starter-react/.env`:
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
```

Change this if you deploy to a different host/port.

## Notes

- **Storage**: Currently uses JSON file storage. For production, consider migrating to a proper database (PostgreSQL, MongoDB, etc.)
- **Participant ID**: Currently defaults to the LiveKit participant identity or "guest"
- **Data Location**: `backend/data/scores.json` (auto-created on first score save)
- **Score Color Coding**:
  - 🟢 Green: 80%+ (Excellent)
  - 🔵 Blue: 60-79% (Good)
  - 🟡 Yellow: 40-59% (Fair)
  - 🔴 Red: <40% (Needs Practice)


