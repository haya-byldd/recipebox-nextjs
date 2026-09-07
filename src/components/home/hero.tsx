import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-accent-subtle px-6 py-15 text-center h-[calc(100vh-80px)] flex items-center">
      <div className="mx-auto max-w-3xl">
        <span className="mb-6 inline-block rounded-full bg-accent-soft/50 px-6 py-1.5 text-sm font-medium text-accent">Cook something delicious</span>
     <h1 className="text-4xl font-extrabold leading-[1.10] tracking-tight text-text-heading sm:text-5xl md:text-6xl">
  Discover Your Next <span className="text-accent">Favourite Recipe</span>
</h1>

        <p className="mx-auto mt-5 max-w-xl text-lg text-text-secondary">
        Save your favourites, explore new flavours, and make every meal a
      little better.
        </p>
        <Link href="/recipes"> <button className="mt-10 rounded-xl bg-accent px-7 py-3.5 font-semibold text-white shadow-sm transition hover:bg-accent-hover cursor-pointer duration-300 ease-out
    hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg
    active:translate-y-0 active:scale-[0.98]">
         Explore Recipes 
        </button></Link>
      </div>
    </section>
  );
};
export default Hero;
