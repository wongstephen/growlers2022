import React from "react";

export const NavLinks = ({
  scollFunc,
  name,
  children,
  compact,
  test,
  closeNav,
  navRef,
}) => {
  return (
    <li>
      <button
        className={`text-gray-600 font-medium cursor-pointer hover:text-gray-900 ${
          compact && "block  hover:bg-gray-50"
        }`}
        name={navRef}
        onClick={(e) => {
          closeNav && closeNav();
          scollFunc(e.target.name);
        }}
        aria-label={name}
        data-testid={test}
        title={name}
      >
        {children}
      </button>
    </li>
  );
};
