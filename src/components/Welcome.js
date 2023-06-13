import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export const Welcome = ({ hours }) => {
  return (
    <div className="py-8 md:py-12 lg:py-16" data-testid="section-1">
      <div className="container px-6 mx-auto">
        <div className="relative z-10 -mx-2 md:flex-wrap md:flex md:flex-row">
          <div className="w-full mb-12 md:w-1/2 md:mb-0 md:rounded-lg">
            <span className="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
              Welcome!
            </span>
            <h1 className="w-full mb-6 text-4xl font-bold leading-snug tracking-wide text-gray-900 md:text-4xl lg:text-7xl md:leading-snug">
              DOGS. BEER. COMMUNITY.
            </h1>
            <p className="mb-8 text-lg leading-tight text-gray-50y-700 font-base md:text-4xl">
              The Ultimate Dog Park Experience - Beers on Tap, and Fun for Your
              Pup!
            </p>

            <p className="text-sm">Play Park Hours</p>
            {hours && (
              <ReactMarkdown
                className="mb-4 text-xs font-medium leading-tight text-gray-800 whitespace-pre-line md:text-base md:leading-normal"
                rehypePlugins={[rehypeRaw]}
                children={hours.Park}
              />
            )}

            <p className="text-sm">Day Care Hours</p>
            {hours && (
              <ReactMarkdown
                className="mb-4 text-xs font-medium leading-tight text-gray-800 whitespace-pre-line md:text-base md:leading-normal"
                rehypePlugins={[rehypeRaw]}
                children={hours.Daycare}
              />
            )}

            <p className="mb-8 font-normal leading-loose text-gray-500 text-md md:text-2xl md:leading-loose">
              <span className="text-teal-500">
                5269 Rainier Ave. S, Seattle, WA
              </span>
            </p>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/2 md:mb-0">
            <div className="relative mx-auto max-w-max md:ml-auto md:mr-0 ">
              <img
                className="m-auto rounded-tl-xl rounded-br-xl w-80 h-auto md:w-80 md:h-80 lg:w-96 lg:h-auto xl:w-[32rem] xl:h-auto border-2 border-teal-100 my-0"
                src={require("../assets/welcome-hero.jpg")}
                alt="Two dogs welcome"
                data-testid="hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
