import { useState } from 'react';
import { ResultCard } from './components/ResultCard';
import { apiClient } from './services/api';
import type { RedditResult } from './types';

function App() {
  const [businessDescription, setBusinessDescription] = useState('');
  const [timeRange, setTimeRange] = useState<'day' | 'week' | 'month' | 'year'>('month');
  const [results, setResults] = useState<RedditResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!businessDescription.trim()) {
      setError('Please describe your business');
      return;
    }

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await apiClient.searchReddit({
        keywords: businessDescription,
        maxResults: 10,
        timeRange: timeRange,
      });

      setResults(response.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search Reddit');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Reddit Ranker
            </h1>
            <p className="text-gray-600 text-lg">
              Find high-value discussions for your small business
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="space-y-4">
            <div>
              <label htmlFor="business-description" className="block text-sm font-semibold text-gray-700 mb-2">
                Describe Your Business
              </label>
              <textarea
                id="business-description"
                value={businessDescription}
                onChange={(e) => setBusinessDescription(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="E.g., I run a local bakery specializing in gluten-free pastries and custom wedding cakes..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1">
                <label htmlFor="time-range" className="block text-sm font-semibold text-gray-700 mb-2">
                  Time Range
                </label>
                <select
                  id="time-range"
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value as 'day' | 'week' | 'month' | 'year')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                >
                  <option value="day">Past Day</option>
                  <option value="week">Past Week</option>
                  <option value="month">Past Month</option>
                  <option value="year">Past Year</option>
                </select>
              </div>

              <button
                onClick={handleSearch}
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Searching...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Find Opportunities
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          </div>
        )}

        {/* Results Section */}
        {hasSearched && !loading && (
          <div>
            {results.length > 0 ? (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Found {results.length} Opportunities
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Sorted by relevance score (highest first)
                  </p>
                </div>
                <div className="space-y-6">
                  {results.map((result, index) => (
                    <ResultCard key={result.url} result={result} rank={index + 1} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">No results found</h3>
                <p className="mt-2 text-gray-500">
                  Try adjusting your business description or time range
                </p>
              </div>
            )}
          </div>
        )}

        {/* Initial State */}
        {!hasSearched && !loading && (
          <div className="text-center py-16">
            <svg className="mx-auto h-16 w-16 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Ready to find opportunities?</h3>
            <p className="mt-2 text-gray-500 max-w-md mx-auto">
              Describe your business above and we'll find the best Reddit discussions where you can engage with potential customers
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
