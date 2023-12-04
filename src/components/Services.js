import React, { useRef } from "react";
import { DayCare } from "./DayCare";
import { PlayPark } from "./PlayPark";
import { ServiceCard } from "./ServiceCard";
import { SectionContainer } from "./elements/SectionContainer";
import parkImg from "../assets/park.webp";
import { services } from "../utils/constants";

export const Services = () => {
  const playParkRef = useRef();
  const dayCareRef = useRef();

  return (
    <SectionContainer
      sectionId={services.section.sectionId}
      titleTextH1={services.section.title}
      titleTextH4={services.section.subtitle}
      data-testid="services-section"
    >
      <div className="container relative px-4 mx-auto">
        <div className="mx-auto text-left mb-18 md:mb-16">
          <ServiceCard
            title={services.playPark.title}
            description={services.playPark.description}
            forwardRef={playParkRef}
            drawerComponent={<PlayPark playParkRef={playParkRef} />}
          />

          <ServiceCard
            title={services.dayCare.title}
            description={services.dayCare.description}
            forwardRef={dayCareRef}
            drawerComponent={<DayCare dayCareRef={dayCareRef} />}
          />
          <ServiceCard
            title={services.taproom.title}
            description={services.taproom.description}
            forwardRef={dayCareRef}
          />
        </div>
        <div className="relative max-w-full mx-auto mt-4">
          <img
            className="relative mx-auto border-2 border-teal-100 rounded-tl-3xl rounded-br-3xl"
            src={parkImg}
            alt="Growlerz Park"
          />
        </div>
      </div>
    </SectionContainer>
  );
};
