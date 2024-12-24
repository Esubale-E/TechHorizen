/* eslint-disable react/prop-types */

const Text = ({ children }) => {
  return <p className="text-lg text-text mb-12">{children}</p>;
};
const AppText = ({ children }) => {
  return <p className="text-base text-gray-700">{children}</p>;
};
const LightText = ({ children }) => {
  return <p className="text-lg text-gray-500">{children}</p>;
};
const ErrText = ({ children }) => (
  <p className="text-red-500 text-sm">{children}</p>
);


export { AppText, LightText ,ErrText};

export default Text;
