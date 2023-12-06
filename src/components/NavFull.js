import React from "react";
import { NavLinks } from "./NavLinks";
import { navLinkData } from "./data/navLinkData";
import HamburgerIcon from "./elements/HamburgerIcon";

export const NavFull = ({ setOpen, scrollTo }) => {
  return (
    <div className="flex items-center justify-between w-full p-4 xl:px-0">
      <ul className="hidden md:flex md:gap-6">
        {navLinkData.map((obj, idx) => {
          return (
            <NavLinks
              scollFunc={scrollTo}
              navRef={obj.ref}
              key={idx}
              test={obj.test}
              name={obj.title}
            >
              {obj.title}
            </NavLinks>
          );
        })}
      </ul>

      <div className="items-center justify-end hidden md:flex">
        <a
          className="inline-block px-4 py-2 mr-2 font-medium leading-5 text-gray-500 bg-transparent rounded-md hover:text-gray-900"
          href="https://growlerz.portal.gingrapp.com/#/public/login"
          target="_blank"
          rel="noreferrer"
          title="Login to Gingr"
          aria-label="Login to Gingr"
        >
          Log In
        </a>
        <a
          className="inline-block px-4 py-2 text-sm font-medium leading-5 bg-teal-700 rounded-md shadow-lg text-teal-50 hover:bg-teal-900 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          href="https://growlerz.gingrapp.com/front_end/new_customer"
          target="_blank"
          rel="noreferrer"
          title="Signup at Gingr"
          aria-label="Signup at Gingr"
        >
          Sign Up
        </a>
      </div>

      <button className="ml-auto md:hidden" onClick={() => setOpen(true)}>
        <HamburgerIcon height={35} width={35} />
      </button>
    </div>
  );
};
