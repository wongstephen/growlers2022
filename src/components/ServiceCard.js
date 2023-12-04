import clsx from "clsx";

export default function ServiceCard({
  title,
  description,
  forwardRef,
  drawerComponent,
}) {
  return (
    <div className="grid gap-8 my-16" ref={forwardRef}>
      <h4 className={clsx("text-h4 text-teal-500")}>{title}</h4>
      <p className={clsx("text-default whitespace-pre-line")}>{description}</p>
      {drawerComponent ? drawerComponent : null}
    </div>
  );
}
