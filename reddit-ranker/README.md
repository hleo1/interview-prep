# Reddit Ranker

A powerful tool that helps small businesses instantly find high-value discussions on Reddit about their space. Instead of manually searching across platforms, the system scans Reddit in real time, ranks the best engagement opportunities by relevance, and displays them in an intuitive interface.

## Features

- **Smart Search**: Describe your business and find relevant Reddit discussions automatically
- **Relevance Ranking**: Results are ranked by Tavily's AI-powered relevance scoring
- **Reddit Metadata**: View subreddit, post type, and direct links to discussions
- **Time Filtering**: Search within the past day, week, month, or year
- **Modern UI**: Clean, responsive interface built with React and Tailwind CSS v3
- **Real-time Results**: Powered by Tavily's search API for up-to-date information

## Architecture

- **Backend**: Node.js + Express + TypeScript
  - Tavily API integration for Reddit search
  - Firebase Admin SDK (configured but optional)
  - RESTful API endpoints
  
- **Frontend**: React + TypeScript + Vite
  - Tailwind CSS v3 for styling
  - Responsive design for mobile and desktop
  - Real-time search with loading states

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Tavily API key ([get one free at tavily.com](https://tavily.com))

## Setup

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
PORT=3000
NODE_ENV=development
TAVILY_API_KEY=your_tavily_api_key_here
```

Start the backend server:

```bash
npm run dev
```

The backend will run on `http://localhost:3000`

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` directory (already created):

```env
VITE_API_URL=http://localhost:3000
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Usage

1. Open the frontend in your browser (`http://localhost:5173`)
2. Describe your business in the text area (e.g., "I run a local bakery specializing in gluten-free pastries")
3. Select a time range (day, week, month, or year)
4. Click "Find Opportunities" to search
5. View ranked results with:
   - Relevance score (percentage match)
   - Subreddit badge
   - Post title and content preview
   - Direct link to Reddit discussion

## API Endpoints

### POST `/api/reddit/search`

Search Reddit for relevant discussions.

**Request Body:**
```json
{
  "keywords": "your business description",
  "maxResults": 10,
  "timeRange": "month"
}
```

**Response:**
```json
{
  "success": true,
  "query": "your business description",
  "resultsCount": 10,
  "results": [
    {
      "title": "Post title",
      "url": "https://reddit.com/...",
      "content": "Post content",
      "score": 0.85,
      "publishedDate": "2024-01-01",
      "subreddit": "smallbusiness",
      "postType": "post"
    }
  ]
}
```

## Project Structure

```
reddit-ranker/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── firebase.ts
│   │   ├── routes/
│   │   │   ├── health.ts
│   │   │   └── reddit.ts
│   │   └── index.ts
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ResultCard.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── .env
│   └── package.json
└── README.md
```

## Technologies Used

### Backend
- Express.js - Web framework
- TypeScript - Type safety
- Tavily API - AI-powered search
- Firebase Admin - Authentication/database (optional)
- CORS - Cross-origin resource sharing

### Frontend
- React 19 - UI framework
- TypeScript - Type safety
- Vite - Build tool and dev server
- Tailwind CSS v3 - Styling
- Fetch API - HTTP requests

## Development

### Backend Development
```bash
cd backend
npm run dev  # Starts with hot reload
```

### Frontend Development
```bash
cd frontend
npm run dev  # Starts Vite dev server
```

### Building for Production

**Backend:**
```bash
cd backend
npm run build  # Compiles TypeScript
npm start      # Runs production build
```

**Frontend:**
```bash
cd frontend
npm run build  # Creates optimized production build
npm run preview  # Preview production build
```

## License

ISC

## Support

For issues or questions, please open an issue on the repository.
