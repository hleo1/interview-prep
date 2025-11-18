# Recipe Cataloging Backend

Express/TypeScript backend API for the recipe cataloging application with Firebase Firestore integration.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Place your Firebase service account JSON file in the backend directory

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Run development server:
```bash
npm run dev
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Lint code

## API Endpoints

### General
- `GET /` - API welcome message
- `GET /api/health` - Health check endpoint

### Recipes
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get a single recipe by ID
- `POST /api/recipes` - Create a new recipe
- `PUT /api/recipes/:id` - Update a recipe
- `DELETE /api/recipes/:id` - Delete a recipe

## Recipe Schema

```json
{
  "name": "string (required)",
  "description": "string",
  "ingredients": ["array of strings (required)"],
  "instructions": ["array of strings (required)"],
  "cookingTime": "number (minutes)",
  "servings": "number",
  "category": "string",
  "imageUrl": "string"
}
```

