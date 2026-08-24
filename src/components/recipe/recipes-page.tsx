"use client";
import { use, useEffect, useState } from "react";
import RecipeCard from "./recipe-card";
import { Recipe } from "../home/types";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalRecipes, setTotalRecipes] = useState(0)
  const limit = 12;
  const totalPages = Math.ceil(totalRecipes/limit);
  const skip = (currentPage - 1) * limit;


  const handleNextPage  = () => {
    setCurrentPage((prevPage) => {
        return prevPage + 1;
    })
  }

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const getRecipes = async () => {
    const response = await fetch(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`);
    const data = await response.json();
    setRecipes(data.recipes);

    setTotalRecipes(data.total)
  };

  useEffect(() => {
    getRecipes();
    console.log("inside useEffect")
  }, [currentPage]);
  console.log(currentPage)

  return (<>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-16 max-w-350 w-full">
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      })}
    </div>
    <div  className="flex justify-center items-center gap-10">
        <button className="w-25 py-2 px-4 border border-green text-green-dark rounded-lg font-semibold sm:w-35 sm:px-8 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50" onClick={handlePreviousPage} disabled={currentPage === 1} >Previous</button>
        <span className="text-green-dark font-medium text-sm">{currentPage} of {totalPages} Pages </span>
        <button onClick={handleNextPage} className="w-25 py-2 px-4 border border-orange text-orange rounded-lg font-semibold sm:w-35 sm:px-8 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50" disabled={currentPage === totalPages}>Next</button>
    </div>
    </>
  );
};
export default RecipesPage;
