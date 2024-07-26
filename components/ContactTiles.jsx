import { contactInformation } from "../constants";
import { motion } from "framer-motion";

export const ContactTiles = () => {
  return (
    <div className="flex justify-evenly w-full p-4">
      {contactInformation.map((information) => (
        <motion.div
          key={information.key}
          className="w-1/6 flex flex-col"
          whileHover={{ y: -7 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href={information.address} className="">
            <img
              src={information.icon}
              alt={information.name}
              className="mb-8"
            />
            <div className="font-poppins md:text-2xl text-[#333] font-semibold text-center">
              {information.name}
              {information.displayAddress && (
                <>
                  <br />
                  <span className="text-xs hidden md:flex sm:text-sm  justify-center mx-auto">
                    {information.displayAddress}
                  </span>
                </>
              )}
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  );
};
