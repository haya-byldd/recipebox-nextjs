import { TiStarFullOutline } from "react-icons/ti";
import { Recipe } from "../home/types";

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
    const {image,name,cuisine,rating} = recipe;
  return (
    <article className="overflow-hidden rounded-2xl border border-gray200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-bold text-heading">{name}</h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-text-secondary">{cuisine}</span>
          <span className="text-sm font-medium text-text-secondary flex items-center gap-0.5 justify-center"><span className="text-gold text-md"><TiStarFullOutline /></span>{rating}</span>
        </div>
        <button className="mt-5 w-full rounded-lg border border-gray200 py-2.5 text-sm font-semibold text-text-secondary transition hover:bg-gray200 cursor-pointer">
          View Recipe
        </button>
      </div>
    </article>
  );
};
export default RecipeCard;
