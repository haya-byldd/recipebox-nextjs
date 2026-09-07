import { PiChefHat } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface ">
      <div className="px-6 py-8 text-center max-w-7xl mx-auto">
      <p className="font-bold text-text-heading flex justify-center items-center gap-1">
        <span className="text-white bg-accent p-1 rounded-full">
          <PiChefHat />
        </span>
        RecipeBox
      </p>
      <p className="mt-2 text-sm text-text-muted">© 2026 RecipeBox</p>
      </div>
    </footer>
  );
};

export default Footer;
