import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import "@testing-library/jest-dom/extend-expect";

describe("ErrorPage", () => {
  test("renders the error message and link", () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    // Check if the error message is rendered
    expect(screen.getByText("Error 404")).toBeInTheDocument();
    expect(
      screen.getByText(/Oh no! We can’t find the page/i)
    ).toBeInTheDocument();

    // Check if the link is rendered and points to the home page
    const link = screen.getByRole("button", { name: "Go Home" });
    expect(link).toBeInTheDocument();

    // Check if the footer is rendered
    expect(
      screen.getByText("© 2023 Growlerz Seattle. All Rights Reserved.")
    ).toBeInTheDocument();
  });
});
