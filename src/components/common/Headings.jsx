// eslint-disable-next-line react/prop-types
const Heading = ({ children }) => {
  return (
    <h1 className="text-5xl text-White text-center font-bold leading-tight mb-4">
      {children}
    </h1>
  );
};

const Heading2 = () => {
  return (
    <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
      Create Your Account
    </h2>
  );
};
const Heading3 = () => {
  return (
    <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
      Create Your Account
    </h2>
  );
};

export default Heading;

export { Heading2, Heading3 };
