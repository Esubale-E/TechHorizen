/* eslint-disable react/prop-types */

const Heading = ({ children }) => {
  return (
    <h1 className="text-5xl text-primary text-center font-bold leading-tight mb-4 ">
      {children}
    </h1>
  );
};

const Heading2 = ({ children }) => {
  return <h2 className="text-4xl font-bold text-primary mb-8">{children}</h2>;
};

const Heading3 = ({ children }) => {
  return (
    <h3 className="text-xl font-semibold text-highlight mb-4 text-center flex items-center">
      {children}
    </h3>
  );
};

export default Heading;
export { Heading2, Heading3 };
