import express from 'express';

const router = express.Router();

// In-memory score storage (in production, use a database)
interface ScoreData {
  participant_id: string;
  score: number;
  questions_asked: number;
  last_updated: Date;
}

const scores: Map<string, ScoreData> = new Map();

// POST /api/trivia/score - Update score
router.post('/score', (req, res) => {
  try {
    const { participant_id, score, questions_asked } = req.body;

    if (!participant_id || score === undefined || questions_asked === undefined) {
      return res.status(400).json({
        error: 'Missing required fields: participant_id, score, questions_asked'
      });
    }

    const scoreData: ScoreData = {
      participant_id,
      score,
      questions_asked,
      last_updated: new Date()
    };

    scores.set(participant_id, scoreData);

    console.log(`Score updated for ${participant_id}: ${score}/${questions_asked}`);

    return res.status(200).json({
      success: true,
      data: scoreData
    });
  } catch (error) {
    console.error('Error updating score:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/trivia/score/:participant_id - Get score for a specific participant
router.get('/score/:participant_id', (req, res) => {
  try {
    const { participant_id } = req.params;
    const scoreData = scores.get(participant_id);

    if (!scoreData) {
      return res.status(404).json({
        error: 'Score not found for this participant'
      });
    }

    return res.status(200).json({
      success: true,
      data: scoreData
    });
  } catch (error) {
    console.error('Error fetching score:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/trivia/scores - Get all scores
router.get('/scores', (req, res) => {
  try {
    const allScores = Array.from(scores.values());
    
    return res.status(200).json({
      success: true,
      data: allScores
    });
  } catch (error) {
    console.error('Error fetching scores:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/trivia/scores - Clear all scores
router.delete('/scores', (req, res) => {
  try {
    scores.clear();
    
    return res.status(200).json({
      success: true,
      message: 'All scores cleared'
    });
  } catch (error) {
    console.error('Error clearing scores:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

