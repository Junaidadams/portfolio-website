import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

const ToggleMenu = ({ menuItems = [], name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const menuVariants = {
    open: {
      maxHeight: "100vh", // or a value that comfortably fits the menu
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        staggerChildren: 0.05,
      },
    },
    closed: {
      maxHeight: 0,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="relative bg-slate-100 p- rounded-lg shadow-lg"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-sm focus:outline-none hover:from-teal-700 hover:to-teal-600"
      >
        {name}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
          className="ml-2"
        >
          <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={menuVariants}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="overflow-hidden "
      >
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="text-teal-800  font-medium px-4 py-2 rounded-lg"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

ToggleMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
};

export default ToggleMenu;
