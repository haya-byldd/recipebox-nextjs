"use client";
import Link from "next/link";
import { useState } from "react";
import RecipeBoxLogo from "./recipe-box-logo";
import {
  RiCloseFill,
  RiCloseLargeFill,
  RiMenuFill,
  RiMenuLine,
} from "react-icons/ri";

const Navbar = () => {
  const [isMenUOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerMenu = () => {
    setIsMenuOpen((prevState) => {
      return prevState ? false : true;
    });
  };
  return (
    <header className="border-b border-border bg-bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <RecipeBoxLogo />
        <nav className="hidden items-center gap-12 text-md font-medium text-text-secondary md:flex">
          <Link href="#" className="transition hover:text-heading">
            Recipes
          </Link>
          <Link href="#" className="transition hover:text-heading">
            Favourites
          </Link>
          <Link href="#" className="transition hover:text-heading">
            About
          </Link>
          <Link
            href="#"
            className="rounded-lg bg-orange px-6 py-2 text-white hover:bg-orange-hover">
            Login
          </Link>
        </nav>
        <button
          className="md:hidden text-2xl text-orange"
          onClick={handleHamburgerMenu}
        >
          {isMenUOpen ? <RiCloseFill className="text-3xl" /> : <RiMenuLine />}
          {isMenUOpen && (
            <nav className="flex flex-col max-w-50 w-full bg-orange-tint/50 p-4 text-base rounded-2xl  gap-5 absolute top-18.25 right-0">
              <Link href="#" className="transition hover:text-heading">
                Home
              </Link>
              <Link href="#" className="transition hover:text-heading">
                Recipes
              </Link>
              <Link href="#" className="transition hover:text-heading">
                About
              </Link>
              <Link
                href="#"
                className="rounded-lg bg-orange px-4 py-2 text-white hover:bg-orange-hover"
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
