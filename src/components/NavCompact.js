import React from "react";
import { NavLinks } from "./NavLinks";
import { navLinkData } from "./data/navLinkData";
export const NavCompact = ({ open, setOpen, scrollTo }) => {
  const closeNav = () => {
    setOpen(false);
  };

  return (
    <div
      className={`fixed top-0  z-50 w-full h-full ease-linear bg-gray-900 ${
        open ? "bg-opacity-50 left-0" : "bg-opacity-0 left-[-100%]"
      }`}
      onClick={closeNav}
    >
      <div
        className={`fixed top-0 bottom-0 w-4/6 max-w-xs bg-transparent transition-all duration-500 ${
          open ? "right-0 opacity-100" : "right-[-100%]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="relative h-full p-6 overflow-y-auto bg-white">
          <div className="flex flex-col justify-between h-full">
            <div className="inline-flex items-center text-xl font-bold tracking-widest text-gray-900 uppercase max-w-max md:text-3xl">
              <img
                className="h-24 md:h-32"
                src={require("../assets/logo-clear-bg.webp")}
                alt=""
              />
            </div>
            <ul className="py-6">
              {navLinkData.map((obj, idx) => {
                return (
                  <NavLinks
                    scollFunc={scrollTo}
                    closeNav={closeNav}
                    name={obj.ref}
                    compact={true}
                    key={idx}
                  >
                    {obj.title}
                  </NavLinks>
                );
              })}
            </ul>
            <div className="flex flex-col flex-wrap">
              <div className="mb-2">
                <a
                  className="inline-block w-full px-4 py-2 text-sm font-medium leading-5 text-center text-gray-500 bg-transparent rounded-full shadow-lg hover:text-gray-900"
                  href="https://growlerz.portal.gingrapp.com/#/public/login"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Login to Gingr App"
                >
                  Log In
                </a>
              </div>
              <div className="">
                <a
                  className="inline-block w-full px-4 py-2 text-sm font-medium leading-5 text-center text-white bg-teal-500 rounded-full shadow-lg hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  href="https://growlerz.gingrapp.com/front_end/new_customer"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Sign up to Gingr App"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* closeNav Button */}
        <button
          className="absolute p-4 cursor-pointer top-5 right-3"
          href="#"
          onClick={closeNav}
          name="closeNavAction"
          aria-label="Close menu"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z"
              fill="#556987"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
