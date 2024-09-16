import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";

import Wrapper from "../components/Wrapper";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
