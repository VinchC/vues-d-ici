/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { NAVBAR_LINKS } from "@/data/data";
import Link from "next/link";
import { NavLink } from "../utils/NavLink";
import ThemeSwitch from "../utils/ThemeSwitch";
import SearchBar from "../utils/SearchBar";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-0 h-16 border-b-2 border-background z-50">
      <nav className="fixed w-full z-20 top-0 start-0 border-b border-default">
        <div className="bg-gray-200 text-black flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
              Vues d&apos;Ici
            </span>
          </Link>
        </div>
        <div className="flex-1" />

        <div className="flex-col">
          <label htmlFor="input-group-1" className="sr-only">
            Votre recherche
          </label>
          <div className="relative md:block md:end-4">
            <SearchBar />
          </div>
          <div className="md:hidden flex justify-end items-center">
            <button
              onClick={() => {
                isOpen ? setIsOpen(false) : setIsOpen(true);
              }}
              type="button"
              className="text-background"
              aria-label="ouvre le menu déroulant de la barre de navigation pour les écrans dont la largeur est inférieure à 768 pixels"
            >
              <Menu />
            </button>
          </div>
          <div
            className={
              !isOpen ? "max-md:invisible" : "w-25 bg-card rounded-sm p-2 mr-0"
            }
          >
            <ul
              className={`flex items-center gap-2 max-md:flex-col ${
                !isOpen ? "max-md:invisible" : "max-md:visible"
              }`}
            >
              {NAVBAR_LINKS.map((link, index) => (
                <NavLink key={index} {...link} />
              ))}
              {/* <button
                aria-label="bascule le mode jour / nuit (prend par défaut le mode préfére par l'utilisateur"
                className=""
              >
                <ThemeSwitch />
              </button> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
