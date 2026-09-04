const About = () => {
  return (
    <section className="px-6 py-16" id="about">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-orange-50 px-8 py-12 text-center md:px-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            About RecipeBox
          </span>

          <h2 className="mt-3 text-2xl font-bold text-heading">
            Making Cooking Simple & Delicious
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-text-secondary text-md ">
            RecipeBox helps you discover delicious recipes, explore different
            cuisines, and find inspiration for your next meal. Whether you're
            a beginner or an experienced cook, there's always something new to
            try.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;