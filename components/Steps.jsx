import { useState } from "react";
import { motion } from "framer-motion";
import { steps } from "../constants";

const Steps = () => {
  const [hoveredKey, setHoveredKey] = useState(null); // Track the key of the hovered step

  return (
    <div className="h-full w-full p-3 md:p-4 flex flex-col m-auto">
      {steps.map((step) => (
        <div key={step.key} className="w-full">
          <motion.div
            className="flex md:p-4 hover:cursor-pointer my-2"
            onHoverStart={() => setHoveredKey(step.key)} // Set the hovered key
            onHoverEnd={() => setHoveredKey(null)} // Reset on hover end
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-fit ml-auto my-auto"
              animate={hoveredKey === step.key ? { y: [-3, 3, -3] } : { y: 0 }} // Only animate the hovered step
              transition={{
                repeat: hoveredKey === step.key ? Infinity : 0,
                duration: 0.6,
              }}
            >
              <step.icon size={60} strokeWidth={1} color="#333" />
            </motion.div>
            <div className="w-full md:w-1/3 mr-auto">
              <h1 className="w-full text-center text-teal-900 mx-auto text-lg md:text-xl font-montserrat font-bold">
                {step.name}
              </h1>
              <div className="mx-auto text-center font-montserrat text-[#222] tracking-wide text-base md:text-lg px-6 py-1">
                {step.description}
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
