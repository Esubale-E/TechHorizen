// eslint-disable-next-line react/prop-types
const Heading = ({ children }) => {
  return (
    <h1 className="text-5xl text-text text-center font-bold leading-tight mb-4 dark:text-darktext">
      {children}
    </h1>
  );
};

// eslint-disable-next-line react/prop-types
const Heading2 = ({ children }) => {
  return (
    <h2 className="text-4xl font-bold text-primary dark:text-darkprimary mb-8">
      {children}
    </h2>
  );
};

// eslint-disable-next-line react/prop-types
const Heading3 = ({ children }) => {
  return (
    <h3 className="text-xl font-semibold text-highlight dark:text-darkhighlight mb-4 text-center">
      {children}
    </h3>
  );
};

export default Heading;
export { Heading2, Heading3 };
