import Link from "next/link";
import { useState } from "react";
import categories from "../data.preval";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id="head" className="w-full fixed z-40">
      <div className="bg-white relative bumper">
        <div className="h-20 flex justify-between md:justify-center items-center">
          <Link href="/">
            <a className="inline-block">
              <img
                className="h-8 sm:h-10 md:h-16 "
                src="/images/logo.png"
                alt="Think3DP logo"
              />
            </a>
          </Link>
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
        <div className="h-10 hidden md:flex justify-center items-center">
          {categories.map((menuItem, index) => {
            return (
              <div className="px-3" key={index}>
                <Link href={`/${menuItem.fields.slug}`}>
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
                <Link href={`/${menuItem.fields.slug}`}>
                  <a className="hover:text-gray-700">{menuItem.fields.name}</a>
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
