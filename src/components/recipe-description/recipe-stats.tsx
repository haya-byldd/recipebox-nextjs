import { MdOutlineTimer } from "react-icons/md";
import { PiCookingPotLight, PiChartBarLight } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { Recipe } from "../home/types";
import { IconType } from "react-icons";

type stat = {
  label: string;
  value: string;
  icon: IconType;
  color: string;
};

const RecipeStats = ({ recipe }: { recipe: Recipe }) => {
  const { prepTimeMinutes, cookTimeMinutes, servings, difficulty } = recipe;
  const stats = [
    {
      label: "Prep Time",
      value: `${prepTimeMinutes} mins`,
      icon: MdOutlineTimer,
      color: "text-success",
    },
    {
      label: "Cook Time",
      value: `${cookTimeMinutes} mins`,
      icon: PiCookingPotLight,
      color: "text-accent",
    },
    {
      label: "Servings",
      value: `${servings}`,
      icon: LuUsers,
      color: "text-success",
    },
    {
      label: "Difficulty",
      value: `${difficulty}`,
      icon: PiChartBarLight,
      color: "text-accent",
    },
  ];
  return (
    <section className="rounded-2xl border-2 border-border bg-surface sm:p-8 p-5 py-6">
      <div className="grid grid-cols-2 gap-8 md:divide-x-2 divide-border md:grid-cols-4">
        {stats.map((stat: stat) => {
          const { color, icon, label, value } = stat;
          const Icon = icon;
          return (
            <div
              key={label}
              className="flex flex-col items-center justify-start gap-2 px-2.5 py-1 xs:flex-row sm:gap-3 lg:px-5"
            >
              <span className={`text-3xl ${color}`}>
                <Icon />
              </span>
              <div className="sm:space-y-1  text-center">
                <p className="text-sm text-text-secondary">{label}</p>

                <p className="text-xl font-bold text-text-primary">
                  {value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecipeStats;

