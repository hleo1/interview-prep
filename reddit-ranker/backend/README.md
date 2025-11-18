# Reddit Ranker Backend

Express.js + TypeScript backend for Reddit Ranker with Firebase and Tavily integration.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
```

3. Add your Tavily API key to `.env`:
   - Get your free API key at https://tavily.com (1,000 free credits/month)
   - Update `TAVILY_API_KEY` in `.env`

4. Run the development server:
```bash
npm run dev
```

## API Endpoints

### Health Check
**GET** `/health`

Tests Firebase connection status.

**Response:**
```json
{
  "status": "healthy",
  "firebase": "connected",
  "timestamp": "2025-11-17T12:00:00.000Z",
  "projectId": "reddit-ranker"
}
```

### Search Reddit
**POST** `/api/reddit/search`

Search Reddit posts and comments using Tavily.

**Request Body:**
```json
{
  "keywords": "artificial intelligence",
  "maxResults": 10,
  "timeRange": "month"
}
```

**Parameters:**
- `keywords` (required): Search terms
- `maxResults` (optional): Number of results (default: 10)
- `timeRange` (optional): Time filter - "day", "week", "month", or "year" (default: "month")

**Response:**
```json
{
  "success": true,
  "query": "artificial intelligence",
  "answer": "AI summary from Tavily...",
  "resultsCount": 10,
  "results": [
    {
      "title": "Post title",
      "url": "https://reddit.com/...",
      "content": "Post snippet...",
      "score": 0.95,
      "publishedDate": "2025-11-15"
    }
  ]
}
```

## Required: Tavily API Key

⚠️ **You need a Tavily API key to use the Reddit search feature.**

1. Sign up at https://tavily.com
2. Get your API key (1,000 free credits monthly)
3. Add to `.env`: `TAVILY_API_KEY=tvly-your-key-here`

