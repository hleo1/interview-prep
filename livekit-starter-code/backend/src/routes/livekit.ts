import express from 'express';
import { AccessToken } from 'livekit-server-sdk';

const router = express.Router();

const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY;
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET;
const LIVEKIT_URL = process.env.LIVEKIT_WSS_URL;

if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_URL) {
  console.error('Missing LiveKit credentials in environment variables');
}

// POST /api/livekit/token - Generate LiveKit access token
router.post('/token', async (req, res) => {
  try {
    const { room_name, participant_name } = req.body;

    if (!room_name || !participant_name) {
      return res.status(400).json({
        error: 'Missing required fields: room_name, participant_name',
      });
    }

    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET) {
      return res.status(500).json({
        error: 'LiveKit credentials not configured',
      });
    }

    // Create access token
    const token = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {
      identity: participant_name,
      name: participant_name,
    });

    // Grant permissions
    token.addGrant({
      room: room_name,
      roomJoin: true,
      canPublish: true,
      canSubscribe: true,
      canPublishData: true,
    });

    const jwt = await token.toJwt();

    console.log(`Generated token for ${participant_name} in room ${room_name}`);

    return res.status(200).json({
      token: jwt,
      url: LIVEKIT_URL,
      room_name,
      participant_name,
    });
  } catch (error) {
    console.error('Error generating token:', error);
    return res.status(500).json({ error: 'Failed to generate token' });
  }
});

export default router;

