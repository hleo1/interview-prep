import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initializeFirebase } from './config/firebase';
import healthRouter from './routes/health';
import redditRouter from './routes/reddit';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Initialize Firebase
initializeFirebase();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/health', healthRouter);
app.use('/api/reddit', redditRouter);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Reddit Ranker API' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

