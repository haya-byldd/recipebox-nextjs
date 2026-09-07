"use client";
import { useEffect, useState } from "react";
import RecipeCard from "./recipe-card";
import { Recipe } from "../home/types";

const Recipes = ({query}: {query:string}) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalRecipes, setTotalRecipes] = useState(0)
  const limit = 9;
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
    let baseURL = 'https://dummyjson.com/recipes';
    if(!query){
       baseURL = `${baseURL}?limit=${limit}&skip=${skip}`
    }else{
      baseURL = `${baseURL}/search?q=${query}`
    }

    const response = await fetch(baseURL);
    const data = await response.json();
    setRecipes(data.recipes);
    setTotalRecipes(data.total)
  };

  useEffect(() => {
    getRecipes();
  }, [currentPage,query]);





  return (
  <div className="py-16 space-y-16">
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md-lg-mid:grid-cols-3">
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      })}
    </div>
    <div  className="flex justify-center items-center gap-10">
        <button className="w-25 py-2 px-4 border border-success text-success-dark rounded-lg font-semibold sm:w-35 sm:px-8 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50" onClick={handlePreviousPage} disabled={currentPage === 1} >Previous</button>
        <span className="text-success-dark font-medium text-sm">{currentPage} of {totalPages} Pages </span>
        <button onClick={handleNextPage} className="w-25 py-2 px-4 border border-accent text-accent rounded-lg font-semibold sm:w-35 sm:px-8 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50" disabled={currentPage === totalPages}>Next</button>
    </div>
    </div>
  );
};
export default Recipes;
