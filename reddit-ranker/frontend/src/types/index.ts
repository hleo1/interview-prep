export interface RedditResult {
  title: string;
  url: string;
  content: string;
  score: number;
  publishedDate: string | null;
  subreddit: string | null;
  postType: 'post' | 'comment' | 'unknown';
}

export interface SearchRequest {
  keywords: string;
  maxResults?: number;
  timeRange?: 'day' | 'week' | 'month' | 'year';
}

export interface SearchResponse {
  success: boolean;
  query: string;
  resultsCount: number;
  results: RedditResult[];
}

export interface ErrorResponse {
  error: string;
  message: string;
}

