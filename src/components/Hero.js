import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import heroImg from "../assets/welcome-hero.jpg";

export const Hero = ({ hours }) => {
  return (
    <div data-testid="hero-section" className="grid gap-4 md:gap-12">
      <div className="flex flex-col items-center gap-2 px-4 md:gap-8 md:flex-row xl:p-0">
        <div>
          <img
            className="h-auto w-28 md:w-40"
            src={require("../assets/logo-clear-bg.webp")}
            alt="Growlerz logo"
          />
        </div>
        <h1 className="w-full font-extrabold leading-none tracking-tighter text-center text-gray-800 [font-size:_clamp(3rem,10vw,5rem)] max-w-[10ch] mx-auto md:m-0 md:text-left">
          DOGS. BEER. COMMUNITY.
        </h1>
      </div>

      <div className="grid gap-4 px-4 md:grid-cols-2 xl:p-0">
        <div className="grid gap-4 text-center md:text-left">
          <p className="text-xl font-light text-gray-800 font-base md:text-4xl ">
            The Ultimate Dog Park Experience - Beers on Tap, and Fun for Your
            Pup!
          </p>
          {hours && (
            <div>
              <p className="text-sm">Play Park Hours</p>
              <ReactMarkdown
                className="text-xs font-medium leading-tight text-gray-800 whitespace-pre-line md:text-base md:leading-normal"
                rehypePlugins={[rehypeRaw]}
                children={hours.Park}
              />
            </div>
          )}

          {hours && (
            <div>
              <p className="text-sm">Day Care Hours</p>
              <ReactMarkdown
                className="text-xs font-medium leading-tight text-gray-800 whitespace-pre-line md:text-base md:leading-normal"
                rehypePlugins={[rehypeRaw]}
                children={hours.Daycare}
              />
            </div>
          )}

          <div>
            <p className="text-sm">Find us at</p>
            <p className="m-0 text-xs font-semibold text-teal-800 md:text-base ">
              5269 Rainier Ave. S, Seattle, WA
            </p>
          </div>
        </div>

        <div
          className="relative w-full h-48 bg-red-500 bg-center bg-cover rounded-lg md:h-full"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
        >
          <div className="absolute w-full h-full bg-teal-800 rounded-lg -z-10 top-1 left-1" />
        </div>
      </div>
    </div>
  );
};
