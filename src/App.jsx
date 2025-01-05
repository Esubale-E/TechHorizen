import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes/RoutsConfig";
import AuthContext from "./contexts/authContext";
import authReducer from "./reducers/authReducer";
import { useReducer } from "react";

const App = () => {
  const [user, dispach] = useReducer(authReducer, {});

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, dispach }}>
        <RoutesConfig />
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;
