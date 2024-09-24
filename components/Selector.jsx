import { ChevronDown, X } from "lucide-react";
import PropTypes from "prop-types";
import { motion } from "framer-motion"; // Use framer motion for animations

const Selector = ({
  id,
  categories,
  selectedCategories,
  toggle,
  setToggle,
  handleClick,
}) => {
  return (
    <motion.div
      id={id}
      className={`p-1 flex bg-mainWhite no-scrollbar border overflow-auto ${
        toggle ? "h-80 z-10 absolute" : "h-12 w-fit"
      } border-gray-300 rounded mb-2`}
      initial={{ height: "3rem" }}
      animate={{ height: toggle ? "20rem" : "3rem" }} // Adjust height based on toggle state
      transition={{ duration: 0.3 }}
    >
      <div className="overflow-auto w-full">
        {categories.map((category) => (
          <div
            key={category.key}
            onClick={() => handleClick(category.value, id)}
            className={`cursor-pointer hover: py-2 pl-2 pr-8 ${
              selectedCategories.includes(category.value) ? "bg-gray-300" : ""
            }`}
          >
            {category.name}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="text-mainGrey h-fit mb-auto mt-2 ml-4 rounded-2xl"
        onClick={() => setToggle(!toggle)}
      >
        {!toggle ? <ChevronDown size={16} strokeWidth={3} /> : <X size={20} />}
      </button>
    </motion.div>
  );
};

Selector.propTypes = {
  id: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Selector;
