import type { Recipe } from '../types/recipe';

const API_BASE_URL = 'http://localhost:3000/api';

export const recipeApi = {
  async getAll(): Promise<Recipe[]> {
    const response = await fetch(`${API_BASE_URL}/recipes`);
    const data = await response.json();
    return data.data;
  },

  async getById(id: string): Promise<Recipe> {
    const response = await fetch(`${API_BASE_URL}/recipes/${id}`);
    const data = await response.json();
    return data.data;
  },

  async create(recipe: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>): Promise<Recipe> {
    const response = await fetch(`${API_BASE_URL}/recipes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe),
    });
    const data = await response.json();
    return data.data;
  },

  async update(id: string, recipe: Partial<Recipe>): Promise<Recipe> {
    const response = await fetch(`${API_BASE_URL}/recipes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe),
    });
    const data = await response.json();
    return data.data;
  },

  async delete(id: string): Promise<void> {
    await fetch(`${API_BASE_URL}/recipes/${id}`, {
      method: 'DELETE',
    });
  },
};

