import {
  TiHeartFullOutline,
  TiStarFullOutline,
} from "react-icons/ti";
import { Recipe } from "../home/types";
import { PiTimerFill } from "react-icons/pi";

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const { image, name, cuisine, rating, prepTimeMinutes, difficulty } = recipe;
  return (
    <article className="overflow-hidden rounded-2xl border border-gray200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-60 object-cover xs:h-60" />
        <button className="absolute right-2 top-3 rounded-full bg-card/90 p-2 font-semibold shadow-sm cursor-pointer">
          <TiHeartFullOutline size={20} className="text-red-600" />
        </button>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-heading">{name}</h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-text-secondary">{cuisine}</span>
          <span className="text-sm font-medium text-text-secondary flex items-center gap-0.5 justify-center">
            <span className="text-gold text-md">
              <TiStarFullOutline />
            </span>
            {rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm flex items-center gap-0.5 justify-center font-medium text-orange-600">
            {difficulty}
          </span>
          <span className="text-sm text-orange font-medium flex gap-0.5 justify-center items-center">
            <span className="text-orange">
              <PiTimerFill />
            </span>
            {prepTimeMinutes}min
          </span>
        </div>

        <div className="flex mt-5 gap-2">
          <button className="flex-1 rounded-lg border border-gray200 py-2.5 text-sm font-semibold text-text-secondary transition hover:bg-gray200 cursor-pointer">
            View Recipe
          </button>
        </div>
      </div>
    </article>
  );
};
export default RecipeCard;
