import { Router, Request, Response } from 'express';
import { tavily } from '@tavily/core';

const router = Router();

interface RedditSearchQuery {
  keywords: string;
  maxResults?: number;
  timeRange?: 'day' | 'week' | 'month' | 'year';
}

interface RedditResult {
  title: string;
  url: string;
  content: string;
  score: number;
  publishedDate: string | null;
  subreddit: string | null;
  postType: 'post' | 'comment' | 'unknown';
}

/**
 * Extract Reddit metadata from URL
 * Examples:
 * - https://www.reddit.com/r/smallbusiness/comments/...
 * - https://old.reddit.com/r/Entrepreneur/comments/...
 */
function extractRedditMetadata(url: string): { subreddit: string | null; postType: 'post' | 'comment' | 'unknown' } {
  try {
    const urlObj = new URL(url);
    
    // Extract subreddit from path like /r/subredditname/...
    const subredditMatch = urlObj.pathname.match(/\/r\/([^\/]+)/);
    const subreddit = subredditMatch ? subredditMatch[1] : null;
    
    // Determine if it's a post or comment
    // Comments have /comments/ in the path
    const isComment = urlObj.pathname.includes('/comments/');
    const postType = isComment ? 'post' : 'unknown'; // Tavily returns post URLs, hard to distinguish comments
    
    return { subreddit, postType };
  } catch (error) {
    return { subreddit: null, postType: 'unknown' };
  }
}

/**
 * Enhance the search query for better Reddit targeting
 */
function buildRedditQuery(businessDescription: string): string {
  // Add context to help find engagement opportunities
  return `${businessDescription} site:reddit.com looking for advice OR recommendations OR help OR suggestions`;
}

router.post('/search', async (req: Request, res: Response) => {
  try {
    const { keywords, maxResults = 10, timeRange = 'month' }: RedditSearchQuery = req.body;

    if (!keywords || keywords.trim().length === 0) {
      return res.status(400).json({
        error: 'Keywords are required',
        message: 'Please provide a business description to search Reddit'
      });
    }

    if (!process.env.TAVILY_API_KEY) {
      return res.status(500).json({
        error: 'Configuration error',
        message: 'Tavily API key is not configured'
      });
    }

    // Initialize Tavily client
    const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });

    // Build enhanced query for Reddit discussions
    const enhancedQuery = buildRedditQuery(keywords);

    // Search Reddit using Tavily
    const response = await tvly.search(enhancedQuery, {
      includeDomains: ['reddit.com'],
      maxResults: maxResults,
      searchDepth: 'basic',
      timeRange: timeRange,
      includeAnswer: false
    });

    // Format the results with Reddit-specific metadata
    const results: RedditResult[] = response.results.map((result: any) => {
      const { subreddit, postType } = extractRedditMetadata(result.url);
      
      return {
        title: result.title,
        url: result.url,
        content: result.content,
        score: result.score,
        publishedDate: result.published_date || null,
        subreddit,
        postType
      };
    });

    // Sort by Tavily relevance score (highest first)
    results.sort((a, b) => b.score - a.score);

    res.status(200).json({
      success: true,
      query: keywords,
      resultsCount: results.length,
      results: results
    });

  } catch (error) {
    console.error('Reddit search error:', error);
    res.status(500).json({
      error: 'Search failed',
      message: error instanceof Error ? error.message : 'Unknown error occurred'
    });
  }
});

export default router;

