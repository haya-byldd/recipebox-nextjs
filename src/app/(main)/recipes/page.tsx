import RecipesPage from "@/components/recipe/recipes-page";

const Recipes = () => {
  return (
    <div className="mx-auto px-6">
      <div className="mt-12 xs:mt-16">
        <h1 className="text-2xl xs:text-3xl lg:text-4xl font-bold text-heading">
          Explore Delicious Recipes
        </h1>

        <p className="mt-2 text-sm text-orange lg:text-base italic">
          Discover easy and delicious recipes you'll love.
        </p>
      </div>

      <RecipesPage />
    </div>
  );
};

export default Recipes;
