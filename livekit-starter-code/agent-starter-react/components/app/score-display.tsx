'use client';

import { useEffect, useState } from 'react';
import { useRoomContext } from '@livekit/components-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

interface ScoreData {
  score: number;
  questionsAsked: number;
  percentage: number;
}

export function ScoreDisplay({ className }: { className?: string }) {
  const room = useRoomContext();
  const [scoreData, setScoreData] = useState<ScoreData>({
    score: 0,
    questionsAsked: 0,
    percentage: 0,
  });
  const [scoreChanged, setScoreChanged] = useState(false);

  useEffect(() => {
    if (!room) return;

    const handleData = (payload: Uint8Array) => {
      try {
        const decoder = new TextDecoder();
        const message = JSON.parse(decoder.decode(payload));

        if (message.type === 'score_update') {
          const newScore = message.score;
          const oldScore = scoreData.score;
          
          setScoreData({
            score: newScore,
            questionsAsked: message.questionsAsked,
            percentage: message.percentage,
          });

          // Trigger animation if score increased
          if (newScore > oldScore) {
            setScoreChanged(true);
            setTimeout(() => setScoreChanged(false), 600);
          }
        }
      } catch (error) {
        console.error('Error parsing score data:', error);
      }
    };

    room.on('dataReceived', handleData);

    return () => {
      room.off('dataReceived', handleData);
    };
  }, [room, scoreData.score]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'fixed top-4 right-4 md:top-6 md:right-6 z-50 rounded-2xl border border-border bg-background/80 backdrop-blur-lg shadow-2xl px-4 py-3 md:px-6 md:py-4',
        scoreChanged && 'ring-2 ring-primary/50',
        className
      )}
    >
      <div className="flex items-center gap-3 md:gap-6">
        <div className="flex flex-col">
          <span className="text-xs md:text-sm font-medium text-muted-foreground">Score</span>
          <div className="flex items-baseline gap-1 md:gap-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={scoreData.score}
                initial={{ scale: 1.5, color: 'rgb(34, 197, 94)' }}
                animate={{ scale: 1, color: 'var(--primary)' }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-3xl md:text-4xl font-bold"
              >
                {scoreData.score}
              </motion.span>
            </AnimatePresence>
            <span className="text-xl md:text-2xl text-muted-foreground">
              / {scoreData.questionsAsked}
            </span>
          </div>
        </div>
        
        <div className="h-12 md:h-16 w-px bg-border" />
        
        <div className="flex flex-col items-center">
          <span className="text-xs md:text-sm font-medium text-muted-foreground">Accuracy</span>
          <motion.span
            key={scoreData.percentage}
            animate={{ scale: scoreChanged ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-primary"
          >
            {scoreData.percentage.toFixed(0)}%
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

