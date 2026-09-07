import { LuClipboardList } from "react-icons/lu";

const RecipeInstructions = ({ instructions }: { instructions: string[] }) => {
  return (
    <section className="rounded-2xl border border-border bg-surface p-6 flex-1">
      <div className="flex items-center gap-4 ">
        <span className="text-2xl text-accent">
          <LuClipboardList />
        </span>
        <h2 className="text-2xl font-bold text-text-primary">Instructions</h2>
      </div>
      <ul className="mt-7 space-y-5 text-[15px] text-text-secondary list-decimal pl-6 marker:font-bold">
        {instructions.map((instruction, index) => {
          return (
            <li key={index} className="marker:text-success pl-2 text-success-dark">
              {instruction}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RecipeInstructions;
