import { useState } from 'react'

interface GitHubIssue {
  id: number;
  title: string;
  html_url: string;
  repository_url: string;
  state: string;
  created_at: string;
  user: {
    login: string;
    avatar_url: string;
  };
  labels: Array<{
    name: string;
    color: string;
  }>;
}

interface SearchResponse {
  total_count: number;
  items: GitHubIssue[];
}

function App() {
  const [language, setLanguage] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchResponse | null>(null);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!language.trim()) {
      setError('Please enter a language');
      return;
    }

    setLoading(true);
    setError('');
    setResults(null);

    try {
      const response = await fetch(
        `http://localhost:3000/api/issues?language=${encodeURIComponent(language)}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getRepoName = (repoUrl: string) => {
    const parts = repoUrl.split('/');
    return `${parts[parts.length - 2]}/${parts[parts.length - 1]}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            OSS Finder
          </h1>
          <p className="text-gray-300 text-lg">
            Discover open-source repositories with good first issues
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-12">
          <div className="flex gap-4 max-w-2xl mx-auto">
            <input
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              placeholder="Enter a programming language (e.g., JavaScript, Python, Rust)"
              className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-900/50 border border-red-700 rounded-lg">
            <p className="text-red-300">{error}</p>
          </div>
        )}

        {/* Results */}
        {results && (
          <div>
            <div className="mb-6">
              <p className="text-gray-300 text-lg">
                Found <span className="font-bold text-blue-400">{results.total_count}</span> open issues
              </p>
            </div>

            <div className="grid gap-6">
              {results.items.map((issue) => (
                <div
                  key={issue.id}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={issue.user.avatar_url}
                      alt={issue.user.login}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        <a
                          href={issue.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-400 transition-colors"
                        >
                          {issue.title}
                        </a>
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {getRepoName(issue.repository_url)} • Opened by {issue.user.login}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {issue.labels.map((label) => (
                          <span
                            key={label.name}
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: `#${label.color}20`,
                              color: `#${label.color}`,
                              borderColor: `#${label.color}40`,
                              borderWidth: '1px'
                            }}
                          >
                            {label.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !results && !error && (
          <div className="text-center text-gray-400 mt-20">
            <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="text-xl">Enter a programming language to get started</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
