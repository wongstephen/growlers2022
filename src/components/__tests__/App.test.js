import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

describe("App", () => {
  test("renders the components", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Check if the components are rendered
    expect(screen.queryByText(/error 404/i)).not.toBeInTheDocument();
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    expect(screen.getByTestId("services-section")).toBeInTheDocument();
    expect(screen.getByTestId("events-section")).toBeInTheDocument();
    expect(screen.getByTestId("faq-section")).toBeInTheDocument();
    expect(screen.getByTestId("contact-section")).toBeInTheDocument();
    expect(screen.getByTestId("footer-section")).toBeInTheDocument();
    expect(screen.getByTestId("toTop-component")).toBeInTheDocument();
  });
});
