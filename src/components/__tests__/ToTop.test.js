import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { ToTop } from "../ToTop";

afterEach(() => {
  cleanup();
});

const noop = () => {};
Object.defineProperty(window, "scrollTo", { value: noop, writable: true });

describe("Test top button", () => {
  it.todo("Button click scrolls to top");
});
