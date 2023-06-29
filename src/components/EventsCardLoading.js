import React from "react";

export const EventsCardLoading = () => {
  return (
    <div
      className="flex flex-col max-w-4xl pt-12 -mx-4 animate-pulse"
      data-testid="events-card-loading"
    >
      <div className="w-full px-4 mb-4 md:w-full">
        <div className="h-full group">
          <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 bg-white rounded-md shadow-md group group-hover:bg-trasnparent hover:shadow-xl">
            <div className="w-1/2 mb-8 bg-slate-200">
              <h3 className="invisible mb-4 text-2xl">Hello World</h3>
            </div>
            <div className="mb-8 bg-slate-200">
              <p className="invisible bg-slate-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                mattis vulputate enim nulla aliquet porttitor lacus. Pretium
                vulputate sapien nec sagittis aliquam. Tristique et egestas quis
                ipsum suspendisse ultrices gravida dictum. Sed augue lacus
                viverra vitae congue eu consequat ac. Scelerisque viverra mauris
                in aliquam sem fringilla ut. In iaculis nunc sed augue lacus.
              </p>
            </div>

            <div className="w-1/3 mx-auto bg-slate-200">
              <p className="invisible">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                mattis vulputate enim nulla aliquet porttitor lacus. Pretium
                vulputate sapien nec sagittis aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
