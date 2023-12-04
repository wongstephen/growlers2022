/**
 * Renders a service card component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the service.
 * @param {string} props.description - The description of the service.
 * @param {React.Ref} props.ref - The ref for the component.
 * @param {React.ReactNode} props.btnComponent - The button component to render.
 * @returns {JSX.Element} The rendered service card component.
 */

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
