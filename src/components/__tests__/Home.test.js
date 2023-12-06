import React from "react";
import { render, screen } from "@testing-library/react";
import { Hero } from "../Hero";
import "@testing-library/jest-dom/extend-expect";

describe("home component", () => {
  test("renders welcome message", () => {
    render(<Hero />);
    const welcomeHeading = screen.getByText(/DOGS. BEER. COMMUNITY./i);
    expect(welcomeHeading).toBeInTheDocument();

    const welcomeDescription = screen.getByText(
      /The Ultimate Dog Park Experience - Beers on Tap, and Fun for Your Pup!/i
    );
    expect(welcomeDescription).toBeInTheDocument();
  });

  test("renders hours if provided", () => {
    const hours = {
      Park: "Monday to Friday: 9am - 6pm",
      Daycare: "Monday to Friday: 8am - 7pm",
    };

    render(<Hero hours={hours} />);

    const parkHours = screen.getByText(/Play Park Hours/i);
    expect(parkHours).toBeInTheDocument();

    const daycareHours = screen.getByText(/Day Care Hours/i);
    expect(daycareHours).toBeInTheDocument();

    const parkHoursContent = screen.getByText(hours.Park);
    expect(parkHoursContent).toBeInTheDocument();

    const daycareHoursContent = screen.getByText(hours.Daycare);
    expect(daycareHoursContent).toBeInTheDocument();
  });

  test("renders address", () => {
    render(<Hero />);

    const address = screen.getByText(/5269 Rainier Ave. S, Seattle, WA/i);
    expect(address).toBeInTheDocument();
  });
});
