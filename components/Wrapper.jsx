import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { navbarConstants1, footerConstants1 } from "../constants";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Navbar
        bgColorMobile="bg-[#164e63]"
        scrollPercentageSwitch={15}
        navbarConstants={navbarConstants1}
      />
      {children}
      <Footer color="bg-[#f5f5f5]" footerConstants={footerConstants1} />
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Wrapper;
