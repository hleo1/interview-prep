import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STORAGE_PATH = path.join(__dirname, '../../data/scores.json');

export interface ScoreRecord {
  id: string;
  participant_id: string;
  score: number;
  questions_asked: number;
  percentage: number;
  timestamp: string;
}

/**
 * Ensure the data directory exists
 */
async function ensureDataDir(): Promise<void> {
  const dataDir = path.dirname(STORAGE_PATH);
  try {
    await fs.mkdir(dataDir, { recursive: true });
  } catch (error) {
    console.error('Error creating data directory:', error);
  }
}

/**
 * Load all scores from storage
 */
export async function loadScores(): Promise<ScoreRecord[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(STORAGE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error: any) {
    // If file doesn't exist, return empty array
    if (error.code === 'ENOENT') {
      return [];
    }
    console.error('Error loading scores:', error);
    return [];
  }
}

/**
 * Save scores to storage
 */
export async function saveScores(scores: ScoreRecord[]): Promise<void> {
  try {
    await ensureDataDir();
    await fs.writeFile(STORAGE_PATH, JSON.stringify(scores, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error saving scores:', error);
    throw error;
  }
}

/**
 * Add a new score record
 */
export async function addScoreRecord(
  participant_id: string,
  score: number,
  questions_asked: number
): Promise<ScoreRecord> {
  const scores = await loadScores();
  
  const percentage = questions_asked > 0 ? (score / questions_asked) * 100 : 0;
  
  const newRecord: ScoreRecord = {
    id: `${participant_id}-${Date.now()}`,
    participant_id,
    score,
    questions_asked,
    percentage,
    timestamp: new Date().toISOString(),
  };

  scores.push(newRecord);
  await saveScores(scores);
  
  return newRecord;
}

/**
 * Get score history for a specific participant
 */
export async function getScoreHistory(participant_id?: string): Promise<ScoreRecord[]> {
  const scores = await loadScores();
  
  if (participant_id) {
    return scores.filter(s => s.participant_id === participant_id);
  }
  
  return scores;
}

/**
 * Get top scores (leaderboard)
 */
export async function getTopScores(limit: number = 10): Promise<ScoreRecord[]> {
  const scores = await loadScores();
  
  return scores
    .sort((a, b) => {
      // Sort by percentage first, then by score
      if (b.percentage !== a.percentage) {
        return b.percentage - a.percentage;
      }
      return b.score - a.score;
    })
    .slice(0, limit);
}

/**
 * Clear all scores
 */
export async function clearScores(): Promise<void> {
  await saveScores([]);
}


