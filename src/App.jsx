import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes/RoutsConfig";
import AuthProvider from "./components/providers/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <RoutesConfig />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
