/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import Link from "next/link";
import SearchBar from "../utils/SearchBar";
import { useState } from "react";
import { Menu } from "lucide-react";
import { NAVBAR_LINKS } from "@/data/data";
import { NavLink } from "../utils/NavLink";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-0 border-b-2 border-background z-50">
      <nav className="fixed w-full z-20 top-0 start-0 border-b border-default">
        <div className="bg-gray-200 text-black flex items-center justify-between p-2 h-16">
          <div className="md:w-40 w-24">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse "
            >
              <span className="self-center text-lg md:text-xl text-heading font-semibold whitespace-nowrap">
                Vues d&apos;Ici
              </span>
            </Link>
          </div>
          <div className="relative md:block md:end-4">
            <SearchBar />
          </div>
          <div className={!isOpen ? "max-md:invisible max-md:hidden" : ""}>
            <ul
              className={`flex items-center gap-2 max-md:gap-0 max-md:grid ${
                !isOpen
                  ? "max-md:invisible"
                  : "max-md:visible max-md:absolute max-md:mt-8 max-md:p-4 max-md:rounded-sm max-md:bg-gray-200 max-md:right-0 max-md:gap-4"
              }`}
            >
              {NAVBAR_LINKS.map((link, index) => (
                <NavLink key={index} {...link} />
              ))}
            </ul>
          </div>

          <div className="md:hidden flex justify-end items-center">
            <button
              onClick={() => {
                isOpen ? setIsOpen(false) : setIsOpen(true);
              }}
              type="button"
              className=""
              aria-label="ouvre le menu déroulant de la barre de navigation pour les écrans dont la largeur est inférieure à 768 pixels"
            >
              <Menu />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
