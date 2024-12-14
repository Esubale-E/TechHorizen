import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes/RoutsConfig";

const App = () => {
  return (
    <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
  );
};

export default App;
