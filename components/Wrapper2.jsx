import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { navbarConstants2, footerConstants2 } from "../constants";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Navbar
        bgColorMobile="bg-gradient-radial from-teal-700 to-teal-800"
        scrollPercentageSwitch={25}
        navbarConstants={navbarConstants2}
      />
      {children}
      <Footer
        color="bg-gradient-to-tr from-teal-700 to-teal-400"
        textColor="#f5f5f5"
        footerConstants={footerConstants2}
      />
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Wrapper;
