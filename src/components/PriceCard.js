import React from "react";

export const PriceCard = ({
  mainPrice,
  mainPriceDesc,
  title,
  popular,
  description,
  link,
  subdescription,
}) => {
  return (
    <div className="w-full p-4 md:w-1/2">
      <div className="flex flex-col h-full pt-8 pb-8 transition duration-500 bg-white rounded-md shadow-sm hover:shadow-md">
        <div className="px-8 pb-8 ">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <h3 className="mr-3 text-lg font-medium text-gray-900 md:text-xl">
              {title}
            </h3>
            {popular && (
              <span className="inline-block px-2 py-px text-xs font-medium leading-5 text-white uppercase bg-yellow-500 rounded-full">
                Popular
              </span>
            )}
          </div>
          <div className="mb-6">
            <span className="relative text-3xl font-bold text-gray-900 -top-10 right-1">
              $
            </span>
            <span className="text-6xl font-semibold text-gray-900 md:text-7xl">
              {mainPrice}
            </span>
            <span className="inline-block ml-1 font-semibold text-gray-700">
              {mainPriceDesc}
            </span>
          </div>
          <p className="mb-6 font-medium text-gray-700">{description}</p>

          {link && (
            <a
              className="inline-block w-full py-4 mb-4 text-base font-medium leading-6 text-center bg-teal-500 rounded-full shadow-lg px-7 md:text-lg text-teal-50 hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Click here for more information about ${title}`}
            >
              Get Started
            </a>
          )}
        </div>
        {/* {subdescription && (
          <>
            <div className="border-b border-gray-100"></div>
            <ul className="self-start px-8 pt-8">
              {subdescription.map((obj, idx) => {
                return (
                  <li
                    className="flex items-center mb-3 font-medium text-gray-500"
                    key={idx}
                  >
                    {obj}
                  </li>
                );
              })}
            </ul>
          </>
        )} */}
      </div>
    </div>
  );
};
