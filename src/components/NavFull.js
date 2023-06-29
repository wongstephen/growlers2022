import React from "react";
import { NavLinks } from "./NavLinks";
import { navLinkData } from "./data/navLinkData";

export const NavFull = ({ setOpen, scrollTo }) => {
  return (
    <div className="bg-transparent">
      <nav className="container flex justify-between p-6 px-6 mx-auto">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2 xl:w-1/3">
            <p
              className="inline-flex items-center text-xl font-bold tracking-widest text-gray-900 uppercase max-w-max md:text-3xl"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img
                className="hidden md:block md:h-36"
                src={require("../assets/logo-clear-bg.webp")}
                alt="growlerz logo"
              />
              <span className="-ml-2 md:hidden">Growlerz</span>
            </p>
          </div>

          <div className="w-1/2 xl:w-1/3">
            <ul className="hidden xl:flex xl:justify-center [&>*]:mr-12">
              {navLinkData.map((obj, idx) => {
                return (
                  <NavLinks
                    scollFunc={scrollTo}
                    name={obj.ref}
                    key={idx}
                    test={obj.test}
                  >
                    {obj.title}
                  </NavLinks>
                );
              })}
            </ul>
          </div>
          <div className="w-1/2 xl:w-1/3">
            <div className="items-center justify-end hidden xl:flex">
              <a
                className="inline-block px-4 py-2 mr-2 font-medium leading-5 text-gray-500 bg-transparent rounded-md hover:text-gray-900"
                href="https://growlerz.portal.gingrapp.com/#/public/login"
                target="_blank"
                rel="noreferrer"
              >
                Log In
              </a>
              <a
                className="inline-block px-4 py-2 text-sm font-medium leading-5 bg-teal-500 rounded-full shadow-lg text-teal-50 hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                href="https://growlerz.gingrapp.com/front_end/new_customer"
                target="_blank"
                rel="noreferrer"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <button
          className="self-center rounded-full navbar-burger xl:hidden"
          onClick={() => setOpen(true)}
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="text-gray-50"
              width="32"
              height="32"
              rx="6"
              fill="currentColor"
            ></rect>
            <path
              className="text-gray-500"
              d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </nav>
    </div>
  );
};
