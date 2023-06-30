import React from "react";
import { Link } from "react-router-dom";
import pawsIcon from "../assets/paw2.svg";

const ErrorPage = () => {
  return (
    <div>
      <div className="mb-12 bg-black">
        <div className="flex flex-col gap-8 px-4 py-8 mx-auto max-w-7xl">
          <img
            src={pawsIcon}
            alt="paws-icon"
            className="w-12 h-12 sm:mx-auto"
          />
          <h2 className="mb-12 text-6xl tracking-wide text-teal-500 sm:text-center font-unbounded sm:text-8xl">
            Lost Paws? Let's Find Your Way
          </h2>
          <Link to="/" className="flex mb-12 w-ful">
            <button
              className="w-full max-w-xl px-8 py-2 mx-auto bg-teal-500 tracki4ng-widest font-unbounded rounded-3xl hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              aria-label="Go Home"
            >
              Back Home
            </button>
          </Link>
        </div>
      </div>
      <div className="max-w-4xl px-4 mx-auto mb-12">
        <h1 className="mb-12 font-unbounded">Error 404</h1>
        <p className="text-2xl sm:leading-loose sm:text-4xl font-unbounded">
          Oh no! We can’t find the page you’re looking for. Our furry friends
          must have buried it somewhere.
        </p>
      </div>
      <footer>
        <p className="text-xs tracking-wider text-center">
          © 2023 Growlerz Seattle. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default ErrorPage;
