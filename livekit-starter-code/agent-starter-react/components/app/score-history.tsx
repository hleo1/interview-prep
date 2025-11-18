'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/livekit/button';

interface ScoreRecord {
  id: string;
  participant_id: string;
  score: number;
  questions_asked: number;
  percentage: number;
  timestamp: string;
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';

export function ScoreHistory({ className }: { className?: string }) {
  const [history, setHistory] = useState<ScoreRecord[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Log the backend URL for debugging
  useEffect(() => {
    console.log('ScoreHistory component mounted. Backend URL:', BACKEND_URL);
  }, []);

  const fetchHistory = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      console.log('Fetching score history from:', `${BACKEND_URL}/api/trivia/history`);
      const response = await fetch(`${BACKEND_URL}/api/trivia/history`);
      
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch score history: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Score history data:', data);
      
      // Sort by timestamp, newest first
      const sorted = data.data.sort((a: ScoreRecord, b: ScoreRecord) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
      console.log('Sorted history:', sorted.length, 'records');
      setHistory(sorted);
    } catch (err) {
      console.error('Error fetching score history:', err);
      setError(`Unable to load score history: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Fetch when panel is opened
    if (isOpen) {
      fetchHistory();
    }
  }, [isOpen, fetchHistory]);

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-500';
    if (percentage >= 60) return 'text-blue-500';
    if (percentage >= 40) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className={cn('fixed top-4 left-4 md:top-6 md:left-6 z-50', className)}>
      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-2 backdrop-blur-lg bg-background/80 border border-border shadow-lg"
        variant="outline"
      >
        {isOpen ? '✕ Close' : '📊 Past Scores'}
      </Button>

      {/* History Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-border bg-background/95 backdrop-blur-lg shadow-2xl overflow-hidden"
            style={{ maxHeight: '70vh', width: '350px' }}
          >
            <div className="p-4 border-b border-border bg-background/80">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Score History</h3>
                <Button
                  onClick={fetchHistory}
                  disabled={isLoading}
                  size="sm"
                  variant="ghost"
                >
                  {isLoading ? '⟳' : '↻'}
                </Button>
              </div>
            </div>

            <div className="overflow-y-auto" style={{ maxHeight: 'calc(70vh - 80px)' }}>
              {isLoading && history.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">
                  <div className="animate-spin text-2xl">⟳</div>
                  <p className="mt-2">Loading...</p>
                </div>
              ) : error ? (
                <div className="p-8 text-center text-red-500">
                  <p>{error}</p>
                  <Button onClick={fetchHistory} size="sm" className="mt-4">
                    Retry
                  </Button>
                </div>
              ) : history.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">
                  <p className="text-3xl mb-2">🎮</p>
                  <p>No games played yet!</p>
                  <p className="text-sm mt-1">Play a trivia game to see your scores here.</p>
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {history.map((record, index) => (
                    <motion.div
                      key={record.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className={cn('text-2xl font-bold', getScoreColor(record.percentage))}>
                              {record.score}/{record.questions_asked}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              ({record.percentage.toFixed(0)}%)
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {formatDate(record.timestamp)}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Player: {record.participant_id}
                          </p>
                        </div>
                        
                        {/* Medal for top scores */}
                        {record.percentage === 100 && (
                          <div className="text-2xl" title="Perfect Score!">
                            🏆
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

