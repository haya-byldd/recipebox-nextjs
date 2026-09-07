import { LuSalad } from "react-icons/lu";

const RecipeIngredients = ({ ingredients }: { ingredients: string[] }) => {
  return (
    <section className="rounded-2xl border border-border bg-surface p-6 lg:max-w-87.5 lg:w-full">
      <div className="flex items-center gap-4">
        <span className="text-2xl text-success">
          <LuSalad />
        </span>
        <h2 className="text-2xl font-bold text-text-primary">Ingredients</h2>
      </div>
      <ul className="mt-7 space-y-5 text-[15px] text-text-secondary list-disc pl-6 marker:font-bold">
        {ingredients.map((ingredient, index) => {
          return (
            <li key={index} className="marker:text-success text-success-dark">
              {ingredient}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RecipeIngredients;
