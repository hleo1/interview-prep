import { useState, useEffect } from 'react';
import type { Room } from 'livekit-client';
import {
  LiveKitRoom,
  RoomAudioRenderer,
  useRoomContext,
  useVoiceAssistant,
  BarVisualizer,
  DisconnectButton,
} from '@livekit/components-react';
import '@livekit/components-styles';
import { getToken, getScore, type ScoreData } from '../services/livekit';

interface VoiceTriviaProps {
  onDisconnect: () => void;
}

function TriviaInterface({ onDisconnect }: VoiceTriviaProps) {
  const room = useRoomContext();
  const { state, audioTrack } = useVoiceAssistant();
  const [score, setScore] = useState<ScoreData | null>(null);
  const [participantId, setParticipantId] = useState<string>('');

  useEffect(() => {
    if (room.localParticipant) {
      setParticipantId(room.localParticipant.identity);
    }
  }, [room.localParticipant]);

  // Poll for score updates
  useEffect(() => {
    if (!participantId) return;

    const fetchScore = async () => {
      const scoreData = await getScore(participantId);
      if (scoreData) {
        setScore(scoreData);
      }
    };

    fetchScore();
    const interval = setInterval(fetchScore, 2000); // Poll every 2 seconds

    return () => clearInterval(interval);
  }, [participantId]);

  const getStateDisplay = () => {
    switch (state) {
      case 'connecting':
        return { text: 'Connecting...', color: 'text-yellow-400' };
      case 'initializing':
        return { text: 'Initializing...', color: 'text-blue-400' };
      case 'listening':
        return { text: '🎤 Listening', color: 'text-green-400' };
      case 'thinking':
        return { text: '🤔 Thinking...', color: 'text-purple-400' };
      case 'speaking':
        return { text: '🗣️ Speaking', color: 'text-blue-400' };
      default:
        return { text: 'Ready', color: 'text-gray-400' };
    }
  };

  const stateInfo = getStateDisplay();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">🎯 Trivia Time!</h1>
          <p className="text-xl text-purple-200">Voice-Powered Trivia Game</p>
        </div>

        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
          {/* Score Display */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-white">
                {score?.score ?? 0}
              </div>
              <div className="text-sm text-green-100 mt-1">Correct</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-white">
                {score?.questions_asked ?? 0}
              </div>
              <div className="text-sm text-blue-100 mt-1">Questions</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-white">
                {score && score.questions_asked > 0
                  ? Math.round((score.score / score.questions_asked) * 100)
                  : 0}
                %
              </div>
              <div className="text-sm text-purple-100 mt-1">Accuracy</div>
            </div>
          </div>

          {/* Voice Visualizer */}
          <div className="bg-black/20 rounded-2xl p-8 mb-6 min-h-[200px] flex flex-col items-center justify-center">
            <div className={`text-2xl font-semibold mb-4 ${stateInfo.color}`}>
              {stateInfo.text}
            </div>
            
            {audioTrack && (
              <div className="w-full max-w-md">
                <BarVisualizer
                  state={state}
                  barCount={30}
                  trackRef={audioTrack}
                  className="agent-visualizer"
                  options={{ minHeight: 20 }}
                />
              </div>
            )}

            {state === 'listening' && (
              <div className="mt-4 text-center">
                <div className="animate-pulse text-white text-lg">
                  🎙️ Speak your answer...
                </div>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="bg-white/5 rounded-xl p-6 mb-6">
            <h3 className="text-white font-semibold mb-3">How to Play:</h3>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>🎤 Wait for the agent to ask a question</li>
              <li>🗣️ Speak your answer clearly</li>
              <li>✨ Get instant feedback and your score</li>
              <li>🔄 Say "next question" or "ask me another" to continue</li>
              <li>🛑 Say "end game" when you're done</li>
            </ul>
          </div>

          {/* Controls */}
          <div className="flex justify-center">
            <DisconnectButton
              onClick={onDisconnect}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              End Session
            </DisconnectButton>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-6 text-purple-200 text-sm">
          <p>Powered by LiveKit + OpenAI Realtime API</p>
        </div>
      </div>

      {/* Room Audio Renderer */}
      <RoomAudioRenderer />
    </div>
  );
}

export default function VoiceTrivia({ onDisconnect }: VoiceTriviaProps) {
  const [token, setToken] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const roomName = `trivia-${Date.now()}`;
        const participantName = `player-${Math.random().toString(36).substr(2, 9)}`;
        
        const response = await getToken(roomName, participantName);
        setToken(response.token);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to connect');
      }
    };

    fetchToken();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center max-w-md">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-white mb-4">Connection Error</h2>
          <p className="text-red-300 mb-6">{error}</p>
          <button
            onClick={onDisconnect}
            className="bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-6 rounded-lg transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white mx-auto mb-4"></div>
          <p className="text-white text-xl">Connecting to trivia host...</p>
        </div>
      </div>
    );
  }

  const livekitUrl = import.meta.env.VITE_LIVEKIT_URL;

  return (
    <LiveKitRoom
      token={token}
      serverUrl={livekitUrl}
      connect={true}
      audio={true}
      video={false}
      onDisconnected={onDisconnect}
    >
      <TriviaInterface onDisconnect={onDisconnect} />
    </LiveKitRoom>
  );
}

