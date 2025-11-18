interface TriviaLandingProps {
  onStart: () => void;
}

export default function TriviaLanding({ onStart }: TriviaLandingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-8xl mb-6">🎯</div>
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Trivia Time!
          </h1>
          <p className="text-2xl text-purple-200 mb-2">
            AI-Powered Voice Trivia Game
          </p>
          <p className="text-lg text-purple-300">
            Test your knowledge with our friendly AI host
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <div className="text-4xl mb-3">🎤</div>
            <h3 className="text-xl font-bold text-white mb-2">Voice Powered</h3>
            <p className="text-purple-200">
              Just speak your answers naturally - no typing required!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="text-xl font-bold text-white mb-2">AI Host</h3>
            <p className="text-purple-200">
              Powered by OpenAI Realtime API for natural conversations
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-xl font-bold text-white mb-2">Multiple Categories</h3>
            <p className="text-purple-200">
              Science, History, Geography, Movies, and Sports
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-xl font-bold text-white mb-2">Live Scoring</h3>
            <p className="text-purple-200">
              Track your progress and accuracy in real-time
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={onStart}
            className="group relative bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-xl py-5 px-12 rounded-full transition-all transform hover:scale-105 shadow-2xl"
          >
            <span className="flex items-center gap-3">
              <span>Start Playing</span>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </button>
          <p className="text-purple-300 text-sm mt-4">
            🎧 Make sure your microphone is ready!
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-purple-300 text-sm">
          <p>Built with LiveKit • OpenAI • React</p>
        </div>
      </div>
    </div>
  );
}

