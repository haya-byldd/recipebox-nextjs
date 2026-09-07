"use client";
import Link from "next/link";
import { useState } from "react";
import RecipeBoxLogo from "./recipe-box-logo";
import { RiCloseFill, RiMenuLine } from "react-icons/ri";
import { LuMoon, LuSun } from "react-icons/lu";

const Navbar = () => {
  const [isMenUOpen, setIsMenuOpen] = useState(false);
   const retrieveTheme = JSON.parse(localStorage.getItem('theme') || 'true');
  const [isLightTheme, setIsLightTheme] = useState<boolean>(retrieveTheme);
  

  const handleTheme = () => {
    setIsLightTheme((prevTheme) => {
   const newTheme = prevTheme ? false : true;
    localStorage.setItem('theme', JSON.stringify(newTheme));
     document.documentElement.classList.toggle("dark", !newTheme);
   return newTheme
    })

  };

  const handleHamburgerMenu = () => {
    setIsMenuOpen((prevState) => {
      return prevState ? false : true;
    });
  };
 
  return (
    <header className={`border-b border-border bg-surface`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/">
          <RecipeBoxLogo />
        </Link>
        <nav className="hidden items-center gap-12 text-md font-medium text-text-secondary md:flex">
          <Link href="/recipes" className="transition hover:text-text-heading">
            Recipes
          </Link>
          <Link
            href="/favourites"
            className="transition hover:text-text-heading"
          >
            Favourites
          </Link>

          <Link
            href="/login"
            className="rounded-lg bg-accent px-6 py-2 text-white hover:bg-accent-hover"
          >
            Login
          </Link>

          <button
            onClick={handleTheme}
            className="w-10 h-10 rounded-2xl flex items-center justify-center transition border-gray200 border cursor-pointer"
          >
            {isLightTheme ? <LuMoon size={18} /> : <LuSun size={18} />}
          </button>
        </nav>
        <button
          className="md:hidden text-2xl text-accent"
          onClick={handleHamburgerMenu}
        >
          {isMenUOpen ? <RiCloseFill className="text-3xl" /> : <RiMenuLine />}
          {isMenUOpen && (
            <nav className="z-50 flex flex-col max-w-50 w-full font-medium bg-accent-soft p-4 text-base rounded-2xl  gap-5 absolute top-18.25 right-0">
              <Link
                href="/recipes"
                className="transition hover:text-text-heading"
              >
                Recipes
              </Link>
              <Link
                href="/favourites"
                className="transition hover:text-text-heading"
              >
                Favourites
              </Link>

              <Link
                href="/login"
                className="rounded-lg bg-accent px-4 py-2 text-white hover:bg-accent-hover"
              >
                Login
              </Link>
            </nav>
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
