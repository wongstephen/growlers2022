import clsx from "clsx";

export const SectionContainer = ({
  sectionId,
  titleTextH1,
  titleTextH4,
  children,
  ...rest
}) => {
  return (
    <section
      id={sectionId}
      className="relative max-w-5xl py-24 mx-auto overflow-hidden bg-transparent md:pb-32"
      {...rest}
    >
      <div className="container relative px-4 mx-auto">
        <div className="mx-auto text-left mb-18 md:mb-16">
          <h4 className={clsx("text-teal-500 text-h4")}>{titleTextH4}</h4>
          <h1 className="mb-6 text-3xl font-bold leading-snug tracking-tight text-gray-900 md:text-5xl lg:text-7xl md:leading-snug lg:leading-snug">
            {titleTextH1}
          </h1>
          {children}
        </div>
      </div>
    </section>
  );
};
