import React from "react";
import { Social } from "./Social";

const Contact = () => {
  return (
    <section
      className="max-w-5xl py-24 mx-auto bg-trasnparent"
      id="contact"
      data-testid="contact-section"
    >
      <div className="container px-4 mx-auto">
        <div className="relative mx-auto mb-12 text-left">
          <div className="relative">
            <span className="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
              Contact, Hours, Location
            </span>
            <h2 className="mb-6 text-3xl font-bold leading-snug tracking-tight text-gray-900 md:text-5xl lg:text-7xl md:leading-snug lg:leading-snug">
              How to find us
            </h2>
            <div className="md:flex">
              <div className="text-md font-base tracking-wider text-gray-700 md:text-lg [&>*]:mb-12 basis-1/2">
                <a
                  className="hover:text-gray-800"
                  href="mailto:growlerzseattle@gmail.com"
                  aria-label="email growlerz"
                >
                  growlerzseattle@gmail.com
                </a>
                <p>(206) 459-2726</p>
                <p className="">
                  5269 Rainier Ave. S<br /> Seattle WA, 98118
                </p>
                <Social />
              </div>
              <div className="text-left basis-1/2">
                <img
                  className="w-11/12 max-w-lg mx-auto my-4 border-2 border-teal-100 rounded-tl-3xl mx-right rounded-br-3xl"
                  src={require("../assets/full-map.webp")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
