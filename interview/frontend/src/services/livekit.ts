/**
 * LiveKit service for connecting to the voice agent
 */

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

export interface TokenResponse {
  token: string;
  url: string;
}

/**
 * Get a LiveKit token from the backend
 */
export async function getToken(roomName: string, participantName: string): Promise<TokenResponse> {
  const response = await fetch(`${BACKEND_URL}/api/livekit/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      room_name: roomName,
      participant_name: participantName,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to get token: ${response.statusText}`);
  }

  return response.json();
}

export interface ScoreData {
  participant_id: string;
  score: number;
  questions_asked: number;
  last_updated: string;
}

/**
 * Get current score from backend
 */
export async function getScore(participantId: string): Promise<ScoreData | null> {
  try {
    const response = await fetch(`${BACKEND_URL}/api/trivia/score/${participantId}`);
    
    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching score:', error);
    return null;
  }
}

