import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { router as healthRouter } from './routes/health.js';
import triviaRouter from './routes/trivia.js';
import livekitRouter from './routes/livekit.js';

const app = express();

app.use(helmet());
app.use(cors()); // Enable CORS for frontend communication
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (_req, res) => {
  res.json({
    message: 'API is running',
    docs: '/health',
  });
});

app.use('/health', healthRouter);
app.use('/api/trivia', triviaRouter);
app.use('/api/livekit', livekitRouter);

export { app };

