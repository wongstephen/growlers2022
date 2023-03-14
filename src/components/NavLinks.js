import React from "react";

export const NavLinks = ({ scollFunc, name, children, compact, closeNav }) => {
  return (
    <li>
      <button
        className={`text-gray-500 font-medium cursor-pointer hover:text-gray-900 ${
          compact && "block px-4 py-3 rounded-md hover:bg-gray-50"
        }`}
        name={name}
        onClick={(e) => {
          closeNav && closeNav();
          scollFunc(e.target.name);
        }}
        aria-label={name}
      >
        {children}
      </button>
    </li>
  );
};
