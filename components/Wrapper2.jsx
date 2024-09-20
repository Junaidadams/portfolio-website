import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { navbarConstants2, footerConstants2 } from "../constants";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Navbar color="" navbarConstants={navbarConstants2} />
      {children}
      <Footer
        color="bg-gradient-to-br from-teal-700 to-teal-400"
        footerConstants={footerConstants2}
      />
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Wrapper;
