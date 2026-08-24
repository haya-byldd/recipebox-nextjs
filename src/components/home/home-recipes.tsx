"use client";
import { useEffect, useState } from "react";
import RecipeCard from "../recipe/recipes-card";
import { Recipe } from "./types";

const HomeRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const getHomeRecipes = async () => {
    const response = await fetch("https://dummyjson.com/recipes?limit=3");
    const data = await response.json();

    setRecipes(data.recipes);
  };

  useEffect(() => {
    getHomeRecipes();
  }, []);

  return (
    <section className="bg-bg-gray50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Popular Recipes
            </h2>
            <p className="mt-2 text-gray-500">
              Recipes people are loving right now.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => {
            return <RecipeCard recipe={recipe} key={recipe.id}/>;
          })}
        </div>
        <div className="mt-10 text-center">
          <button className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:bg-gray-100">
            View All Recipes
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeRecipes;
