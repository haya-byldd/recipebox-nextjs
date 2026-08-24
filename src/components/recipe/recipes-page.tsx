"use client";
import { useEffect, useState } from "react";
import RecipeCard from "./recipe-card";
import { Recipe } from "../home/types";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const getRecipes = async () => {
    const response = await fetch("https://dummyjson.com/recipes?limit=0");
    const data = await response.json();
    setRecipes(data.recipes);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-16 max-w-350 w-full">
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
};
export default RecipesPage;
