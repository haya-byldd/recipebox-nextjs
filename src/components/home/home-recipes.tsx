"use client";
import { useEffect, useState } from "react";
import RecipeCard from "../recipe/recipe-card";
import { Recipe } from "./types";
import Link from "next/link";

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
    <section className="bg-gray50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-text-heading">
              Popular Recipes
            </h2>
            <p className="mt-2 text-text-secondary">
              Recipes people are loving right now.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => {
            return <RecipeCard recipe={recipe} key={recipe.id} />;
          })}
        </div>
        <div className="mt-10 text-center">
          <Link href="/recipes">
            {" "}
            <button className="cursor-pointer rounded-xl border border-gray300 bg-surface px-7 py-3 font-semibold text-gray800 transition hover:bg-gray100">
              View All Recipes
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeRecipes;
