import {
  TiHeartFullOutline,
  TiHeartOutline,
  TiStarFullOutline,
} from "react-icons/ti";
import { Recipe } from "../home/types";
import { PiTimerFill } from "react-icons/pi";
import Link from "next/link";
import { useState } from "react";

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const { image, name, cuisine, rating, prepTimeMinutes, difficulty, id } =
    recipe;

  const handleAddToFav = () => {
    setIsLiked((prevState) => {
      return prevState ? false : true;
    });

    const existingFavourites = JSON.parse(
      localStorage.getItem("favourites") || "[]",
    );

    const isAlreadyAdded = existingFavourites.some((favourite: Recipe) => {
      if (favourite.id === recipe.id) {
        return true;
      } else {
        return false;
      }
    });

    if (isAlreadyAdded) {
      alert("Recipe is already added.");
      return;
    } else {
      const updatedFavourites = [...existingFavourites, recipe];
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      alert("Recipe added");
    }
  };

  return (
    <article className="overflow-hidden rounded-2xl border border-gray200 bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover xs:h-60"
        />
        <button
          onClick={handleAddToFav}
          className="absolute right-2 top-3 rounded-full bg-surface/90 p-2 font-semibold shadow-sm cursor-pointer"
        >
          {isLiked ? (
            <TiHeartFullOutline size={20} className="text-red-600" />
          ) : (
            <TiHeartOutline size={20}/>
          )}
        </button>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-text-heading">{name}</h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-text-secondary">{cuisine}</span>
          <span className="text-sm font-medium text-text-secondary flex items-center gap-0.5 justify-center">
            <span className="text-highlight text-md">
              <TiStarFullOutline />
            </span>
            {rating}
          </span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm flex items-center gap-0.5 justify-center font-medium text-orange600">
            {difficulty}
          </span>
          <span className="text-sm text-accent font-medium flex gap-0.5 justify-center items-center">
            <span className="text-accent">
              <PiTimerFill />
            </span>
            {prepTimeMinutes}min
          </span>
        </div>

        <Link href={`recipe-description/${id}`}>
          <button className="mt-5 w-full rounded-lg border border-gray200 py-2.5 text-sm font-semibold text-text-secondary transition hover:bg-gray200 cursor-pointer">
            View Recipe
          </button>
        </Link>
      </div>
    </article>
  );
};
export default RecipeCard;
