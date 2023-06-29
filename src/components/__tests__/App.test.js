import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";
import "@testing-library/jest-dom/extend-expect";

describe("App component", () => {
  test("renders welcome message", () => {
    render(<App />);
    const welcomeElement = screen.getByText(/Welcome!/i);
    expect(welcomeElement).toBeInTheDocument();
  });
});
