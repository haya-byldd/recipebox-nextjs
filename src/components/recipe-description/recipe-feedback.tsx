import { Recipe } from "../home/types";
import { SlFire } from "react-icons/sl";
import { LuUser } from "react-icons/lu";
import { TbMessageUser } from "react-icons/tb";
import { IconType } from "react-icons";

type stat = {
  icon: IconType;
  label: string;
  value: string;
  iconClass: string;
  valueClass: string;
};

const RecipeFeedback = ({ recipe }: { recipe: Recipe }) => {
  const { caloriesPerServing, userId, reviewCount } = recipe;
  const feedbackStats = [
    {
      icon: SlFire,
      label: "Calories per serving",
      value: `${caloriesPerServing} Kcal`,
      iconClass: "text-accent",
      valueClass: "text-accent",
    },
    {
      icon: SlFire,
      label: "Review Count",
      value: `${reviewCount} reviews`,
      iconClass: "text-success",
      valueClass: "text-success",
    },
    {
      icon: TbMessageUser,
      label: "Created by",
      value: `userId: ${userId}`,
      iconClass: "text-text-heading",
      valueClass: "text-text-secondary",
    },
  ];
  return (
    <section className="rounded-2xl border-2 border-border bg-surface xs:p-8 p-4">
      <div className="grid xs:divide-x-2 gap-5 xs:gap-0 divide-border xs:grid-cols-3">
        {feedbackStats.map((stat: stat) => {
          const { icon, iconClass, label, value, valueClass } = stat;
          const Icon = icon;
          return (
            <div  className="flex items-center gap-3 px-5 py-1 justify-center xs:max-sm:flex-col">
              <span className={`text-3xl ${iconClass}`}>
                <Icon />
              </span>

              <div className="space-y-1 xs:max-sm:text-center">
                <p className="text-sm text-text-secondary ">{label}</p>

                <p className={`text-xl font-bold ${valueClass
                    
                }`}>
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

export default RecipeFeedback;
