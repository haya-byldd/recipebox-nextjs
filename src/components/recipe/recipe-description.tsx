"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MdOutlineArrowBack, MdOutlineTimer } from "react-icons/md";
import { Recipe } from "../home/types";
import { TiHeartFullOutline, TiStarFullOutline } from "react-icons/ti";
import { PiChartBarLight, PiCookingPotLight } from "react-icons/pi";
import { LuClipboardList, LuSalad, LuUser, LuUsers } from "react-icons/lu";
import { SlFire } from "react-icons/sl";
import { TbMessageUser } from "react-icons/tb";
import Link from "next/link";
import RecipeStats from "../recipe-description/recipe-stats";
import RecipeIngredients from "../recipe-description/recipe-ingredients";
import RecipeInstructions from "../recipe-description/recipe-instructions";
import RecipeFeedback from "../recipe-description/recipe-feedback";

const RecipeDescription = () => {
  const [recipeDetails, setRecipeDetails] = useState<Recipe | null>(null);
  const params = useParams();
  const recipeId = params.id;

  const getRecipesDescription = async () => {
    const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
    const data = await response.json();
    setRecipeDetails(data);
  };
  useEffect(() => {
    getRecipesDescription();
  }, []);

  if (recipeDetails === null) {
    return (
      <main className="bg-page-bg flex items-center justify-center h-[calc(100vh-80px)]">
        <p className="text-accent xs:text-2xl font-semibold">
          Getting your recipe ready…
        </p>
      </main>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 pt-10 pb-16 ">
      <header className="h-17.5">
        <Link href="/recipes">
          <button className="cursor-pointer flex items-center justify-center gap-1  text-sm font-medium text-success-dark">
            <MdOutlineArrowBack className="text-lg text-accent" />
            <span>Back to Recipes</span>
          </button>
        </Link>
      </header>
      <div className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:gap-10 md:items-center">
          <div className="xs:h-100 rounded-2xl overflow-hidden relative">
            <img
              src={recipeDetails.image}
              alt={recipeDetails.name}
              className="w-full h-full object-cover"
            />
            <button className="absolute right-2 top-3 rounded-full bg-surface/90 p-2 font-semibold shadow-sm cursor-pointer">
              <TiHeartFullOutline size={20} className="text-red-600" />
            </button>
          </div>
          <div className="md:my-10 space-y-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mt-5">
              {recipeDetails.name}
            </h1>
            <div className="flex items-center gap-1">
              <span className="text-gold text-lg sm:text-2xl">
                <TiStarFullOutline />
              </span>
              <span className="text-lg sm:text-2xl font-medium">
                {recipeDetails.rating}
              </span>
              <span className="text-sm text-success mt-1 ml-1.5">
                ({recipeDetails.reviewCount} Reviews)
              </span>
            </div>
            <div className="flex gap-4">
              <p className="px-3 py-1 bg-success-soft text-success-dark rounded-2xl text-sm font-medium">
                {recipeDetails.cuisine}
              </p>
              {recipeDetails.mealType.map((meal, i) => {
                return (
                  <p
                    className="px-3 py-1 bg-[#FEF1E6] text-accent rounded-2xl text-sm font-medium flex items-center gap-0.5"
                    key={i}
                  >
                    {meal}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <RecipeStats recipe={recipeDetails} />

        <section className="flex flex-col gap-4 w-full md:flex-row">
          <RecipeIngredients ingredients={recipeDetails.ingredients} />
          <RecipeInstructions instructions={recipeDetails.instructions} />
        </section>

        <RecipeFeedback recipe={recipeDetails} />
      </div>
    </div>
  );
};

export default RecipeDescription;
