import React from "react";

export const Alert = ({ data }) => {
  return (
    <section
      id="alert"
      data-testid="alert-section"
      className="text-white bg-teal-800 full-width"
    >
      <div className="gap-2 px-4 py-2 mx-auto text-center text-balance">
        <p
          className="text-base font-semibold tracking-wider uppercase"
          data-testid="alert-title"
        >
          {data && data.Title}
        </p>
        <p className="text-xs tracking-wide" data-testid="alert-body">
          {data && data.Body}
        </p>
      </div>
    </section>
  );
};
