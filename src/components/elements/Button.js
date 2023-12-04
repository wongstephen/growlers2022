export const Button = ({ children, onClick, ...rest }) => {
  return (
    <button
      className="mb-8 text-lg font-medium leading-loose text-teal-500 md:text-xl md:leading-loose"
      type="button"
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
