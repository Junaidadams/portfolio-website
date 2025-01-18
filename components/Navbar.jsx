import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, MoreVertical } from "lucide-react";
import { HashLink as Link } from "react-router-hash-link";

import PropTypes from "prop-types";

const Navbar = ({ navbarConstants, scrollPercentageSwitch, bgColorMobile }) => {
  const [toggle, setToggle] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      const scrollPosition = window.scrollY;

      const percentage = (scrollPosition / (fullHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [toggle]);

  return (
    <nav
      className={`z-20 flex justify-between items-center min-w-screen backdrop-blur-[50px] ${
        scrollPercentage > 25 ? "bg-[#f5f5f580]" : ""
      } sticky top-0 min-h-[64px]`}
    >
      {toggle && (
        <motion.div
          initial={{ opacity: 1, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`${bgColorMobile} md:hidden w-3/4 p-0 flex absolute inset-y-0 left-0 flex-col min-h-screen z-40`}
        >
          <div className="md:hidden w-full text-textmain hover:cursor-pointer flex flex-row-reverse">
            <div
              className="p-5 text-[#f5f5f5] rounded-full"
              onClick={() => setToggle(!toggle)}
            >
              <X size={30} />
            </div>
          </div>

          {/* MOBILE NAV MENU */}
          <ul className="flex text-[#f5f5f5] flex-col h-full mr-auto ml-4 sm:ml-20">
            {navbarConstants.map((item, index) => (
              <li
                key={index}
                className="text-center shadow-sm hover:text-[#f5f5f5b3]"
              >
                <Link to={item.to} onClick={() => setToggle(!toggle)}>
                  <div className="text-2xl border-b-[1px] p-8 border-[#fff] flex-row flex antialiased cursor-pointer">
                    <item.icon className="my-auto mr-6" />
                    {item.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      <a href="/">
        <div className="flex flex-row p-4"></div>
      </a>

      <div className="flex flex-row p-2">
        {!toggle && (
          <div
            className={`md:hidden ${
              scrollPercentage > scrollPercentageSwitch
                ? "text-[#000000]"
                : "text-[#f5f5f5]"
            } hover:cursor-pointer p-3 rounded-full`}
            onClick={() => setToggle(!toggle)}
          >
            <MoreVertical />
          </div>
        )}
      </div>

      {/* DESKTOP NAV MENU */}
      <ul
        className={`${
          scrollPercentage > scrollPercentageSwitch
            ? "text-[#000000]"
            : "text-[#f5f5f5]"
        } md:flex text-lg md:text-lg font-normal lg:space-x-8 md:space-x-4 mr-12 hidden`}
      >
        {navbarConstants.map((item, index) => (
          <li key={index}>
            <Link to={item.to}>
              <div className="antialiased cursor-pointer">{item.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  navbarConstants: PropTypes.array.isRequired,
  scrollPercentageSwitch: PropTypes.number.isRequired,
  bgColorMobile: PropTypes.string.isRequired,
};

export default Navbar;
