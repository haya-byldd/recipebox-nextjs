import Hero from "@/components/home/hero";
import HomeRecipes from "@/components/home/home-recipes";
import PopularCategories from "@/components/home/popular-categories";

export default function Home() {
  return (
   <main>
    <Hero/>
    <PopularCategories/>
    <HomeRecipes/>
   </main>
  );
}
