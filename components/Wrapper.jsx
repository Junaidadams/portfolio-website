import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { navbarConstants1, footerConstants1 } from "../constants";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Navbar navbarConstants={navbarConstants1} />
      {children}
      <Footer footerConstants={footerConstants1} />
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Wrapper;
