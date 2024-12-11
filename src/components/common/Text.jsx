// eslint-disable-next-line react/prop-types
const Text = ({ children }) => {
  
  return (
    <p className="text-lg text-text dark:text-darktext mb-12">
      {children}
    </p>
  );
};

export default Text;

