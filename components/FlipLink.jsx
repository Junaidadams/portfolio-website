import PropTypes from "prop-types";
import { easeInOut, motion } from "framer-motion";

const FlipLink = ({ children, subText }) => {
  const duration = 0.25;
  const stagger = 0.025;
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black font-san uppercase sm:text-7xl md:text-8xl lg:text-9xl text-slate-100"
    >
      <div>
        {children.split("").map((letter, index) => {
          return (
            <motion.span
              transition={{
                duration: duration,
                ease: easeInOut,
                delay: stagger * index,
              }}
              className="inline-block"
              variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
              key={index}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {subText.split("").map((letter, index) => {
          return (
            <motion.span
              transition={{
                duration: duration,
                ease: easeInOut,
                delay: stagger * index,
              }}
              className="inline-block"
              variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
              key={index}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};

export default FlipLink;

FlipLink.propTypes = {
  children: PropTypes.string,
  subText: PropTypes.string,
};
