import { useState } from 'react';
import type { RedditResult } from '../types/index';

interface ResultCardProps {
  result: RedditResult;
  rank: number;
}

export function ResultCard({ result, rank }: ResultCardProps) {
  const [expanded, setExpanded] = useState(false);
  
  // Format score as percentage
  const scorePercentage = Math.round(result.score * 100);
  
  // Determine score color based on relevance
  const getScoreColor = (score: number) => {
    if (score >= 0.8) return 'bg-green-500';
    if (score >= 0.6) return 'bg-blue-500';
    if (score >= 0.4) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  // Truncate content for preview
  const contentPreview = result.content.length > 200 
    ? result.content.slice(0, 200) + '...' 
    : result.content;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200">
      {/* Rank and Score Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-700 font-bold rounded-full text-sm">
            #{rank}
          </div>
          <div className="flex items-center gap-2">
            <div className={`${getScoreColor(result.score)} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
              {scorePercentage}% Match
            </div>
            {result.subreddit && (
              <div className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                r/{result.subreddit}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Title */}
      <a 
        href={result.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block mb-3 group"
      >
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors line-clamp-2">
          {result.title}
        </h3>
      </a>

      {/* Content */}
      <div className="mb-4">
        <p className="text-gray-600 text-sm leading-relaxed">
          {expanded ? result.content : contentPreview}
        </p>
        {result.content.length > 200 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-indigo-600 hover:text-indigo-700 text-sm font-medium mt-2 focus:outline-none"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-500">
          {result.publishedDate ? (
            <span>Posted: {new Date(result.publishedDate).toLocaleDateString()}</span>
          ) : (
            <span>Recent post</span>
          )}
        </div>
        <a
          href={result.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          <span>View on Reddit</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}

