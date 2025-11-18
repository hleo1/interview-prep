import { Button } from '@/components/livekit/button';
import { ScoreHistory } from '@/components/app/score-history';

function WelcomeImage() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mb-6 size-20 text-primary"
    >
      {/* Trophy with stars - Trivia Night icon */}
      <path
        d="M40 10C36 10 32 12 32 15V20H25C23 20 20 22 20 25V28C20 35 24 40 30 42C32 44 34 45 36 45V50C36 52 34 54 32 54H28C26 54 24 56 24 58V62C24 64 26 66 28 66H52C54 66 56 64 56 62V58C56 56 54 54 52 54H48C46 54 44 52 44 50V45C46 45 48 44 50 42C56 40 60 35 60 28V25C60 22 57 20 55 20H48V15C48 12 44 10 40 10Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M40 8C35 8 30 10 30 14V18H22C19 18 16 20 16 24V28C16 36 21 42 28 44C30 47 33 48 36 49V52C36 55 33 57 30 57H24C21 57 18 60 18 63V68C18 71 21 74 24 74H56C59 74 62 71 62 68V63C62 60 59 57 56 57H50C47 57 44 55 44 52V49C47 48 50 47 52 44C59 42 64 36 64 28V24C64 20 61 18 58 18H50V14C50 10 45 8 40 8Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Star 1 */}
      <path
        d="M15 15L16 18L19 19L16 20L15 23L14 20L11 19L14 18L15 15Z"
        fill="currentColor"
        className="text-secondary"
      />
      {/* Star 2 */}
      <path
        d="M65 15L66 18L69 19L66 20L65 23L64 20L61 19L64 18L65 15Z"
        fill="currentColor"
        className="text-secondary"
      />
      {/* Star 3 */}
      <path
        d="M70 50L71 52L73 53L71 54L70 56L69 54L67 53L69 52L70 50Z"
        fill="currentColor"
        className="text-accent"
      />
    </svg>
  );
}

interface WelcomeViewProps {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div ref={ref}>
      {/* Score History */}
      <ScoreHistory />
      
      <section className="bg-background flex flex-col items-center justify-center text-center px-4">
        <WelcomeImage />

        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary mb-4 animate-text-shimmer">
          🎤 Trivia Night 🎤
        </h1>

        <p className="text-foreground max-w-prose text-lg md:text-xl leading-7 font-semibold mb-2">
          Test your knowledge with our AI quiz master!
        </p>

        <p className="text-muted-foreground max-w-md text-sm md:text-base leading-6 mb-8">
          Get ready to answer questions, compete for points, and have a blast! Use your microphone to buzz in and answer.
        </p>

        <Button 
          variant="primary" 
          size="lg" 
          onClick={onStartCall} 
          className="mt-2 px-8 py-6 text-lg font-bold font-mono shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          🏆 {startButtonText} 🏆
        </Button>

        <div className="mt-6 flex gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            ⚡ Quick Rounds
          </span>
          <span className="flex items-center gap-1">
            🎯 Multiple Categories
          </span>
          <span className="flex items-center gap-1">
            🌟 Fun & Interactive
          </span>
        </div>
      </section>

      <div className="fixed bottom-5 left-0 flex w-full items-center justify-center px-4">
        <p className="text-muted-foreground max-w-prose pt-1 text-xs leading-5 font-normal text-pretty md:text-sm">
          Powered by LiveKit Voice AI •{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.livekit.io/agents/start/voice-ai/"
            className="underline hover:text-primary transition-colors"
          >
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
};
