import express from 'express';
import {
  addScoreRecord,
  getScoreHistory,
  getTopScores,
  clearScores,
} from '../storage/scores.js';

const router = express.Router();

// POST /api/trivia/score - Save a new score record
router.post('/score', async (req, res) => {
  try {
    const { participant_id, score, questions_asked } = req.body;

    if (!participant_id || score === undefined || questions_asked === undefined) {
      return res.status(400).json({
        error: 'Missing required fields: participant_id, score, questions_asked',
      });
    }

    const scoreRecord = await addScoreRecord(participant_id, score, questions_asked);

    console.log(`Score saved for ${participant_id}: ${score}/${questions_asked}`);

    return res.status(200).json({
      success: true,
      data: scoreRecord,
    });
  } catch (error) {
    console.error('Error saving score:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/trivia/history - Get score history (all or filtered by participant_id)
router.get('/history', async (req, res) => {
  try {
    const { participant_id } = req.query;
    const history = await getScoreHistory(participant_id as string | undefined);

    return res.status(200).json({
      success: true,
      data: history,
    });
  } catch (error) {
    console.error('Error fetching score history:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/trivia/leaderboard - Get top scores
router.get('/leaderboard', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit as string) || 10;
    const topScores = await getTopScores(limit);

    return res.status(200).json({
      success: true,
      data: topScores,
    });
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/trivia/scores - Clear all scores
router.delete('/scores', async (req, res) => {
  try {
    await clearScores();

    return res.status(200).json({
      success: true,
      message: 'All scores cleared',
    });
  } catch (error) {
    console.error('Error clearing scores:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

