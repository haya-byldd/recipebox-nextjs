const Hero = () => {
  return (
    <section className="bg-hero-bg px-6 py-15 text-center h-[calc(100vh-80px)] flex items-center">
      <div className="mx-auto max-w-3xl">
        <span className="mb-6 inline-block rounded-full bg-orange-tint/50 px-6 py-1.5 text-sm font-medium text-orange">Cook something delicious</span>
     <h1 className="text-4xl font-extrabold leading-[1.10] tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
  Discover Your Next <span className="text-orange">Favourite Recipe</span>
</h1>

        <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600">
        Save your favourites, explore new flavours, and make every meal a
      little better.
        </p>
         <button className="mt-10 rounded-xl bg-orange px-7 py-3.5 font-semibold text-white shadow-sm transition hover:bg-orange-hover cursor-pointer duration-300 ease-out
    hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg
    active:translate-y-0 active:scale-[0.98]">
          Explore Recipes
        </button>
      </div>
    </section>
  );
};
export default Hero;
