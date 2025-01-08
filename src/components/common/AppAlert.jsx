// eslint-disable-next-line react/prop-types
const AppAlert = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        {children}
      </div>
    </div>
  );
};

export default AppAlert;
