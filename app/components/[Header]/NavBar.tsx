"use client";

import Link from "next/link";
import SearchBar from "../utils/SearchBar";
import { useState } from "react";
import { Menu } from "lucide-react";
import { NAVBAR_LINKS } from "@/data/data";
import { NavLink } from "../utils/NavLink";
import SkipLink from "../utils/SkipLink";
import logo from "@/public/images/logo.png";
import Image from "next/image";
export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b-2 border-background">
      <SkipLink />
      <nav className="fixed w-full z-20 start-0 border-b border-default">
        <div className="bg-gray-200 text-black flex items-center justify-between p-2 h-16">
          <div className="lg:w-40 w-24">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse "
            >
              <Image
                src={logo}
                alt="Logo de l'association Vues d'Ici"
                className="w-12 h-12"
              />
            </Link>
          </div>
          <div className="relative lg:block lg:end-4">
            <SearchBar />
          </div>
          <div className={!isOpen ? "max-lg:invisible max-lg:hidden" : ""}>
            <ul
              className={`flex items-center gap-4 max-lg:gap-0 max-lg:grid ${
                !isOpen
                  ? "max-lg:invisible"
                  : "max-lg:visible max-lg:absolute max-lg:mt-8 max-lg:p-4 max-lg:rounded-sm max-lg:bg-gray-200 max-lg:right-0 max-lg:gap-4"
              }`}
            >
              {NAVBAR_LINKS.map((link, index) => (
                <li key={index}>
                  <NavLink {...link} />
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:hidden flex justify-end items-center">
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
