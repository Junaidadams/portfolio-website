import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";

import Wrapper from "../components/Wrapper";
import Wrapper2 from "../components/Wrapper2";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Wrapper2>
            <Home />
          </Wrapper2>
        }
      />
      <Route
        path="/portfolio"
        element={
          <Wrapper>
            <Portfolio />
          </Wrapper>
        }
      />
    </Routes>
  );
};

export default App;
