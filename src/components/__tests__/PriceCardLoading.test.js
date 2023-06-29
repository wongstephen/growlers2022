import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PriceCardLoading } from "../PriceCardLoading";

afterEach(() => {
  cleanup();
});

describe("tests for Price Card Loading Skeleton", () => {
  it("should test if price skeleton loads", () => {
    render(<PriceCardLoading />);
    const container = screen.getByTestId("price-loading");
    expect(container).toBeInTheDocument();
  });

  it("does not contain any text", () => {
    render(<PriceCardLoading />);
    const textElement = screen.getByText("Title");
    expect(textElement).toHaveClass("invisible");
  });
});
