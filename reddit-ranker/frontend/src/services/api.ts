import type { SearchRequest, SearchResponse, ErrorResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async searchReddit(request: SearchRequest): Promise<SearchResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/reddit/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const errorData: ErrorResponse = await response.json();
        throw new Error(errorData.message || 'Search failed');
      }

      const data: SearchResponse = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('An unexpected error occurred');
    }
  }
}

export const apiClient = new ApiClient(API_BASE_URL);

