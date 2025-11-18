import { useState, useEffect } from 'react';
import type { Recipe } from './types/recipe';
import { recipeApi } from './services/api';
import { RecipeCard } from './components/RecipeCard';
import { RecipeForm } from './components/RecipeForm';
import { RecipeDetail } from './components/RecipeDetail';
import { Modal } from './components/RecipeModal';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | undefined>();
  const [viewingRecipe, setViewingRecipe] = useState<Recipe | undefined>();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    try {
      setLoading(true);
      const data = await recipeApi.getAll();
      setRecipes(data);
    } catch (error) {
      console.error('Failed to load recipes:', error);
      alert('Failed to load recipes. Make sure your backend is running on http://localhost:3000');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (recipe: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      await recipeApi.create(recipe);
      await loadRecipes();
      setShowForm(false);
    } catch (error) {
      console.error('Failed to create recipe:', error);
      alert('Failed to create recipe');
    }
  };

  const handleUpdate = async (recipe: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (!editingRecipe?.id) return;
    try {
      await recipeApi.update(editingRecipe.id, recipe);
      await loadRecipes();
      setEditingRecipe(undefined);
    } catch (error) {
      console.error('Failed to update recipe:', error);
      alert('Failed to update recipe');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this recipe?')) return;
    try {
      await recipeApi.delete(id);
      await loadRecipes();
    } catch (error) {
      console.error('Failed to delete recipe:', error);
      alert('Failed to delete recipe');
    }
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                🍳 Recipe Catalog
              </h1>
              <p className="text-gray-600 mt-1">Discover and manage your favorite recipes</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2 justify-center"
            >
              <span className="text-2xl">+</span>
              <span>Add New Recipe</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search recipes by name, description, or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors shadow-sm"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
          </div>
        ) : filteredRecipes.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍽️</div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              {searchTerm ? 'No recipes found' : 'No recipes yet'}
            </h2>
            <p className="text-gray-500 mb-6">
              {searchTerm ? 'Try adjusting your search' : 'Start by adding your first recipe!'}
            </p>
            {!searchTerm && (
              <button
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all transform hover:scale-105"
              >
                Add Your First Recipe
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Showing {filteredRecipes.length} {filteredRecipes.length === 1 ? 'recipe' : 'recipes'}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onEdit={setEditingRecipe}
                  onDelete={handleDelete}
                  onView={setViewingRecipe}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Modals */}
      <Modal
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        title="Create New Recipe"
      >
        <RecipeForm
          onSubmit={handleCreate}
          onCancel={() => setShowForm(false)}
        />
      </Modal>

      <Modal
        isOpen={!!editingRecipe}
        onClose={() => setEditingRecipe(undefined)}
        title="Edit Recipe"
      >
        <RecipeForm
          recipe={editingRecipe}
          onSubmit={handleUpdate}
          onCancel={() => setEditingRecipe(undefined)}
        />
      </Modal>

      <Modal
        isOpen={!!viewingRecipe}
        onClose={() => setViewingRecipe(undefined)}
        title="Recipe Details"
      >
        {viewingRecipe && <RecipeDetail recipe={viewingRecipe} />}
      </Modal>
    </div>
  );
}

export default App;
