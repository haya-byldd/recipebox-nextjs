import { PiChefHat } from "react-icons/pi";

const Footer = () => {
    return (
     <footer className="border-t border-border bg-white px-6 py-8 text-center">
      <p className="font-bold text-heading flex justify-center items-center gap-1"><span className="text-white bg-orange p-1 rounded-full"><PiChefHat/></span>RecipeBox</p>
      <p className="mt-2 text-sm text-text-muted">© 2026 RecipeBox</p>
    </footer>
    )
}

export default Footer;