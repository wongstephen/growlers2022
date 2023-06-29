import React from "react";
import { render, screen } from "@testing-library/react";
import { Events } from "../Events";
import "@testing-library/jest-dom/extend-expect";

const mockPosts = [
  {
    attributes: {
      Title: "Event 1",
      Body: "Event1 body",
      Media: {
        data: {
          attributes: {
            formats: {
              small: {
                url: "event1.jpg",
              },
            },
          },
        },
      },
    },
  },
  {
    attributes: {
      Title: "Event 2",
      Body: "Event2 body",
      Media: {
        data: {
          attributes: {
            formats: {
              small: {
                url: "event2.jpg",
              },
            },
          },
        },
      },
    },
  },
];

describe("Events component", () => {
  const oldEnv = process.env.REACT_APP_POSTMEDIA;
  beforeAll(() => {
    jest.resetModules();
    process.env.REACT_APP_POSTMEDIA = "http://localhost:1337/";
  });

  afterAll(() => {
    process.env.REACT_APP_POSTMEDIA = oldEnv;
  });

  test("renders event titles and bodies", () => {
    render(<Events posts={mockPosts} />);

    const event1Title = screen.getByText(/Event 1/i);
    expect(event1Title).toBeInTheDocument();

    const event1Body = screen.getByText(/Event1 body/i);
    expect(event1Body).toBeInTheDocument();

    const event2Title = screen.getByText(/Event 2/i);
    expect(event2Title).toBeInTheDocument();

    const event2Body = screen.getByText(/Event2 body/i);
    expect(event2Body).toBeInTheDocument();
  });

  test("renders event images if available", () => {
    render(<Events posts={mockPosts} />);

    const event1Image = screen.getByAltText(/Event 1 alt/i);
    expect(event1Image).toBeInTheDocument();
    expect(event1Image).toHaveAttribute(
      "src",
      "http://localhost:1337/event1.jpg"
    );

    const event2Image = screen.getByAltText(/Event 2 alt/i);
    expect(event2Image).toBeInTheDocument();
    expect(event2Image).toHaveAttribute(
      "src",
      "http://localhost:1337/event2.jpg"
    );
  });

  test("renders loading state when no posts are provided", () => {
    render(<Events posts={null} />);

    const loadingElements = screen.getAllByTestId("events-card-loading");
    expect(loadingElements).toHaveLength(2);
  });
});
