import { useState } from 'react';
import TriviaLanding from './TriviaLanding';
import VoiceTrivia from './VoiceTrivia';

type GameState = 'landing' | 'playing';

export default function TriviaGame() {
  const [gameState, setGameState] = useState<GameState>('landing');

  const handleStart = () => {
    setGameState('playing');
  };

  const handleDisconnect = () => {
    setGameState('landing');
  };

  return (
    <>
      {gameState === 'landing' && <TriviaLanding onStart={handleStart} />}
      {gameState === 'playing' && <VoiceTrivia onDisconnect={handleDisconnect} />}
    </>
  );
}
