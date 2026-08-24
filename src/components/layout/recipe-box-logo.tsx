import { PiChefHat } from "react-icons/pi";
const RecipeBoxLogo = () => {
    return (
          <div className="flex items-center gap-1">
          <span className="rounded-full bg-orange text-white p-1">
            <PiChefHat className="text-2xl " />
          </span>
          <h2 className="text-xl font-bold text-heading">RecipeBox</h2>
        </div>
    )
}

export default RecipeBoxLogo;