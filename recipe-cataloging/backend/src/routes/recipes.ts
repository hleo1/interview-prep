import { Router, Request, Response } from 'express';
import { db } from '../config/firebase';
import { Recipe } from '../types/recipe';

const router = Router();
const recipesCollection = db.collection('Recipes');

// Get all recipes
router.get('/', async (req: Request, res: Response) => {
  try {
    const snapshot = await recipesCollection.get();
    const recipes: Recipe[] = [];
    
    snapshot.forEach((doc) => {
      recipes.push({
        id: doc.id,
        ...doc.data()
      } as Recipe);
    });

    res.json({ success: true, data: recipes, count: recipes.length });
  } catch (error) {
    console.error('Error getting recipes:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch recipes' });
  }
});

// Get a single recipe by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const doc = await recipesCollection.doc(id).get();

    if (!doc.exists) {
      return res.status(404).json({ success: false, error: 'Recipe not found' });
    }

    const recipe: Recipe = {
      id: doc.id,
      ...doc.data()
    } as Recipe;

    res.json({ success: true, data: recipe });
  } catch (error) {
    console.error('Error getting recipe:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch recipe' });
  }
});

// Create a new recipe
router.post('/', async (req: Request, res: Response) => {
  try {
    const recipeData: Recipe = {
      ...req.body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Validate required fields
    if (!recipeData.name || !recipeData.ingredients || !recipeData.instructions) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields: name, ingredients, and instructions are required' 
      });
    }

    const docRef = await recipesCollection.add(recipeData);
    const newRecipe: Recipe = {
      id: docRef.id,
      ...recipeData
    };

    res.status(201).json({ success: true, data: newRecipe });
  } catch (error) {
    console.error('Error creating recipe:', error);
    res.status(500).json({ success: false, error: 'Failed to create recipe' });
  }
});

// Update a recipe
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const docRef = recipesCollection.doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ success: false, error: 'Recipe not found' });
    }

    const updateData = {
      ...req.body,
      updatedAt: new Date().toISOString()
    };

    // Remove id from update data if present
    delete updateData.id;
    delete updateData.createdAt; // Don't allow updating createdAt

    await docRef.update(updateData);

    const updatedDoc = await docRef.get();
    const updatedRecipe: Recipe = {
      id: updatedDoc.id,
      ...updatedDoc.data()
    } as Recipe;

    res.json({ success: true, data: updatedRecipe });
  } catch (error) {
    console.error('Error updating recipe:', error);
    res.status(500).json({ success: false, error: 'Failed to update recipe' });
  }
});

// Delete a recipe
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const docRef = recipesCollection.doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ success: false, error: 'Recipe not found' });
    }

    await docRef.delete();

    res.json({ success: true, message: 'Recipe deleted successfully' });
  } catch (error) {
    console.error('Error deleting recipe:', error);
    res.status(500).json({ success: false, error: 'Failed to delete recipe' });
  }
});

export default router;

