'use client'
import Recipes from "@/components/recipe/recipes-page";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";

const RecipesPage = () => {
  const [search, setSearch] = useState("")
  
  const handleSearch = (e:any) => {
        const userInput = e.target.value
        setSearch(userInput)
  }

  return (
    <main>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-12 xs:mt-16 space-y-5 flex justify-between items-center">
          <div>
            <h1 className="text-2xl xs:text-3xl lg:text-4xl font-bold text-text-heading">
              Explore Delicious Recipes
            </h1>
            <p className="mt-2 text-sm text-accent lg:text-base italic">
              Discover easy and delicious recipes you'll love.
            </p>
          </div>
          <div className="max-w-87.5 w-full">
            {/* <SearchBar /> */}

            <div className="flex items-center justify-center gap-2 max-w-2xl w-full border-b">
              <LuSearch size={18} />
              <input
                type="text"
                placeholder="Search recipes, cuisine, ingredients..."
                className="flex-1 bg-transparent outline-none placeholder:text-sm"
                value = {search}
                onChange = {handleSearch}
              />
            </div>
          </div>
        </div>

        <Recipes query={search}/>
      </div>
    </main>
  );
};

// const SearchBar = () => {

//   return (
//     <div className="flex items-center justify-center gap-2 max-w-2xl w-full border-b">
//       <LuSearch size={18} />
//       <input
//         type="text"
//         placeholder="Search recipes, cuisine, ingredients..."
//         className="flex-1 bg-transparent outline-none placeholder:text-sm"
//       />

//     </div>
//   );
// };

export default RecipesPage;
