import Link from "next/link";
import { useState } from "react";
import categories from "../data.preval";
import SocialIcons from "./SocialIcons";

const pages = [
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id="head" className="w-full fixed z-40">
      <div className="bg-white relative">
        <div className="bumper h-20 flex justify-between md:justify-center items-center">
          <div className="w-full flex justify-between">
            <div className="hidden md:flex items-center w-1/3">
              <SocialIcons />
            </div>
            <Link href="/">
              <a className="inline-block">
                <img
                  className="h-6 sm:h-10 md:h-10 "
                  src="/images/logo.png"
                  alt="Think3DP logo"
                />
              </a>
            </Link>
            <div className="hidden md:flex items-center justify-end w-1/3">
              {pages.map((page, index) => {
                return (
                  <Link key={index} href={page.url}>
                    <a className="hover:text-lime font-medium mr-4">
                      {page.name}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          <button
            mobile-nav-toggle=""
            onClick={() => setIsMenuOpen((state) => !state)}
            className={`mobile-nav__toggle-btn inline-block md:hidden ${
              isMenuOpen ? "is-active" : ""
            }`}
          >
            <span className="u-visibly-hidden">Menu</span>{" "}
            <div className="mobile-nav__toggle">
              <div className="mobile-nav__toggle-line line--1 bg-black"></div>{" "}
              <div className="mobile-nav__toggle-line line--2 bg-black"></div>{" "}
              <div className="mobile-nav__toggle-line line--3 bg-black"></div>{" "}
              <div className="mobile-nav__toggle-line line--4 bg-black"></div>
            </div>
          </button>
        </div>
        <div className="h-12 hidden md:flex justify-center items-center border-t border-b">
          {categories.map((menuItem, index) => {
            return (
              <div className="px-3" key={index}>
                <Link href={`/category/${menuItem.fields.slug}`}>
                  <a className="hover:text-lime">{menuItem.fields.name}</a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`fixed bg-white w-full transition-all duration-700 z-20 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="bumper py-6">
          {categories.map((menuItem, index) => {
            return (
              <div key={index} className="px-3 text-center text-xl p-2">
                <Link href={`/category/${menuItem.fields.slug}`}>
                  <a
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-lime"
                  >
                    {menuItem.fields.name}
                  </a>
                </Link>
              </div>
            );
          })}
          {pages.map((menuItem, index) => {
            return (
              <div key={index} className="px-3 text-center text-xl p-2">
                <Link href={`${menuItem.url}`}>
                  <a
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-lime"
                  >
                    {menuItem.name}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`fixed bg-black h-full w-full transition-all duration-700 ${
          isMenuOpen ? "opacity-40 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </div>
  );
}
