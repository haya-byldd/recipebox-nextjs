
const PopularCategories = () => {
    const categories = ["Italian", "Asian", "Mexican", "Dessert"];

  return (
    <section className="px-6 py-16 h-80 text-center flex items-center">
      <div className="mx-auto w-7xl">
        <h2 className="text-center text-2xl font-bold text-text-heading">Popular Categories</h2>
        <ul className="mt-8 flex flex-wrap justify-center gap-4">
            {categories.map((category, i) => {
                return(
                    <li key={i}
                    className="rounded-xl border border-border bg-surface px-6 py-4 font-medium text-text-secondary shadow-sm transition hover:-translate-y-0.5 hover:border-accent-hover hover:text-accent">{category}</li>

                )
            })}
        </ul>
      </div>
    </section>
  );
};

export default PopularCategories;
