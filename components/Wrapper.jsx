import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Wrapper;
