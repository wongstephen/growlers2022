import React, { useRef } from "react";
import { DayCare } from "./DayCare";
import { PlayPark } from "./PlayPark";
// import ReactMarkdown from "react-markdown";
// import rehypeRaw from "rehype-raw";

export const Services = ({ data, hours, servicesRef }) => {
  const playParkRef = useRef();
  const dayCareRef = useRef();

  return (
    <section
      id="services"
      className="relative max-w-5xl py-24 mx-auto overflow-hidden md:pb-32 bg-trasnparent"
      ref={servicesRef}
    >
      <div className="container relative px-4 mx-auto">
        <div className="mx-auto text-left mb-18 md:mb-16">
          <span className="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
            Services
          </span>
          <h1 className="mb-6 text-3xl font-bold leading-snug tracking-tight text-gray-900 md:text-5xl lg:text-7xl md:leading-snug lg:leading-snug">
            Enjoy the Best of Seattle with Your Furry Friend at Growlerz
          </h1>
          {/* Play Park */}
          <div className="my-16" ref={playParkRef}>
            <p className="inline-block mb-4 text-xl text-gray-800 uppercase font-semibold tracking-[.2rem]">
              Play Park
            </p>
            {/* {hours && (
              <ReactMarkdown
                className="mb-8 text-sm font-medium leading-tight text-gray-800 whitespace-pre-line md:text-base md:leading-normal"
                rehypePlugins={[rehypeRaw]}
                children={hours.Park}
              />
            )} */}
            <p className="mb-8 text-lg font-medium leading-loose text-gray-500 md:text-xl md:leading-loose">
              Our dog-friendly park is the perfect place to bring your furry
              friend for a good run around. And now, we're excited to announce
              the opening of our new dog self-wash station! So after a fun day
              at the park, your dog can get cleaned up and ready for the ride
              home. To ensure a safe and enjoyable experience for everyone, we
              kindly request that all dogs visiting the play park be registered
              in our convenient online portal and have up-to-date vaccinations
              prior to entry.
            </p>
            <PlayPark playParkRef={playParkRef} />
          </div>
          {/* Day Care */}
          <div className="my-16" ref={dayCareRef}>
            <p className="inline-block mb-4 text-xl text-gray-800 uppercase font-semibold tracking-[.2rem]">
              Day Care
            </p>
            {/* {hours && (
              <ReactMarkdown
                className="mb-8 text-sm font-medium leading-tight text-gray-800 whitespace-pre-line md:text-base md:leading-normal"
                rehypePlugins={[rehypeRaw]}
                children={hours.Daycare}
              />
            )} */}
            <p className="mb-8 text-lg font-medium leading-loose text-gray-500 md:text-xl md:leading-loose">
              Growlerz Seattle dog park is the perfect solution for busy pet
              parents. Our experienced and loving staff will provide your furry
              family member with plenty of exercise, socialization, and care in
              a stimulating environment. Your dog will have a great time and you
              can have peace of mind knowing they're in good hands.
            </p>
            <DayCare dayCareRef={dayCareRef} />
          </div>
          {/* Grooming */}
          <div className="my-16">
            <p className="inline-block mb-4 text-xl text-gray-800 uppercase font-semibold tracking-[.2rem]">
              On-site Grooming
            </p>
            <p className="mb-8 text-lg font-medium leading-loose text-gray-500 md:text-xl md:leading-loose">
              On-Site Grooming Now Available! Schedule your pup with our new
              groomer Brandy Robertson. Brandy has over 20 years of grooming
              experience and has been doing a magnificent job so far. Check out
              her grooming pics on Instagram{" "}
              <a
                href="https://www.instagram.com/brandyslovelygrooms/"
                target="_blank"
                rel="noreferrer"
                className="text-teal-500 hover:text-teal-600"
              >
                @brendyslovelygrooms
              </a>
              .
              <br />
              <br />
              Get scheduling and pricing info by emailing her at &nbsp;
              <a href="mailto: brandyslovelygrooming@gmail.com">
                brandyslovelygrooming@gmail.com
              </a>
            </p>
          </div>
          {/* Taproom */}
          <div className="my-16">
            <p className="inline-block mb-4 text-xl text-gray-800 uppercase font-semibold tracking-[.2rem]">
              Taproom
            </p>
            <p className="mb-8 text-lg font-medium leading-loose text-gray-500 md:text-xl md:leading-loose">
              Growlerz Taproom is the perfect spot to unwind with friends, both
              human and furry. With 8 delicious craft beers on tap and plenty of
              seating, you can stay for a while or just grab a quick drink.
              Plus, our taproom is open during Play Park hours, so you can
              easily make a day of it and enjoy the park and a cold beer.
            </p>
          </div>
        </div>
        <div className="relative max-w-full mx-auto mt-4">
          <img
            className="relative mx-auto border-2 border-teal-100 rounded-tl-3xl rounded-br-3xl"
            src={require("../assets/park.webp")}
            alt="Growlerz Park"
          />
        </div>
      </div>
    </section>
  );
};
