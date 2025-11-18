import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Express TypeScript backend is running!' });
});

app.get('/api/issues', async (req: Request, res: Response) => {
  try {
    const language = req.query.language || 'python';
    const label = req.query.label || 'good first issue';
    const state = req.query.state || 'open';
    
    // Build query string properly - GitHub needs spaces as + and quotes need to be preserved
    const query = `label:"${label}" state:${state} language:${language}`;
    const url = `https://api.github.com/search/issues?q=${encodeURIComponent(query)}`;
    
    console.log('Fetching:', url); // Debug log
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'OSS-Finder-App'
      }
    });
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching GitHub issues:', error);
    res.status(500).json({ 
      error: 'Failed to fetch issues',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

app.listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port}`);
});

