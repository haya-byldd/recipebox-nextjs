"use client";
import { Recipe } from "@/components/home/types";
import RecipeCard from "@/components/recipe/recipe-card";

const Favourites = () => {
  const favouriteRecipes = JSON.parse(
    localStorage.getItem("favourites") || "[]",
  );

  if (favouriteRecipes.length === 0) {
    return (
      <main className="h-[calc(100vh-80px)]  flex items-center justify-center">
        <p className="text-2xl text-accent">
          {" "}
          There are no favourite recipes yet.{" "}
        </p>
      </main>
    );
  }
  return (
    <main>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md-lg-mid:grid-cols-3">
          {favouriteRecipes.map((favouriteRecipe: Recipe) => {
            return (
              <RecipeCard key={favouriteRecipe.id} recipe={favouriteRecipe} />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Favourites;
