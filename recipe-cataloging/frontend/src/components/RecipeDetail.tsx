import type { Recipe } from '../types/recipe';

interface RecipeDetailProps {
  recipe: Recipe;
}

export const RecipeDetail = ({ recipe }: RecipeDetailProps) => {
  return (
    <div className="space-y-6">
      {recipe.imageUrl && (
        <div className="w-full h-64 rounded-xl overflow-hidden">
          <img
            src={recipe.imageUrl}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{recipe.name}</h2>
        {recipe.category && (
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            {recipe.category}
          </span>
        )}
      </div>

      <p className="text-gray-600 text-lg">{recipe.description}</p>

      <div className="flex gap-6 py-4 border-y border-gray-200">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span className="font-semibold text-gray-700">{recipe.cookingTime} minutes</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          <span className="font-semibold text-gray-700">{recipe.servings} servings</span>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🥘</span> Ingredients
        </h3>
        <ul className="space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">✓</span>
              <span className="text-gray-700">{ingredient}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">👨‍🍳</span> Instructions
        </h3>
        <ol className="space-y-4">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </span>
              <p className="text-gray-700 pt-1">{instruction}</p>
            </li>
          ))}
        </ol>
      </div>

      {recipe.createdAt && (
        <div className="text-sm text-gray-500 pt-4 border-t border-gray-200">
          Created: {new Date(recipe.createdAt).toLocaleDateString()}
          {recipe.updatedAt && recipe.updatedAt !== recipe.createdAt && (
            <> • Updated: {new Date(recipe.updatedAt).toLocaleDateString()}</>
          )}
        </div>
      )}
    </div>
  );
};

