import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { Open_Sans } from "@fontsource/open-sans"; // Adjusted font import
import {
  X,
  MoreVertical,
  Lamp,
  BookOpenText,
  Hammer,
  Cpu,
  Phone,
} from "lucide-react";

// const open_Sans = Open_Sans({ subsets: ["latin"] });

const Navbar = () => {
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

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Dependency array is empty to ensure the effect runs only once

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
          className="bg-cyan-900 md:hidden w-3/4 p-0 flex absolute inset-y-0 left-0 flex-col ab min-h-screen z-40"
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
            <li className="text-center shadow-sm  hover:text-[#f5f5f5b3] pt-0">
              <a href="#" onClick={() => setToggle(!toggle)}>
                <div className=" text-2xl border-b-[1px] p-8 border-[#fff] flex-row flex antialiased cursor-pointer">
                  <Lamp className="my-auto mr-6" />
                  Home.
                </div>
              </a>
            </li>
            <li className="text-center shadow-sm  hover:text-[#f5f5f5b3]">
              <a href="#about" onClick={() => setToggle(!toggle)}>
                <div className=" text-2xl border-b-[1px] p-8 border-[#fff] flex-row flex antialiased cursor-pointer">
                  <BookOpenText className="my-auto mr-6" />
                  About Me.
                </div>
              </a>
            </li>
            <li className="text-center shadow-sm  hover:text-[#f5f5f5b3]">
              <a href="#projects" onClick={() => setToggle(!toggle)}>
                <div className=" text-2xl border-b-[1px] p-8 border-[#fff] flex-row flex antialiased cursor-pointer">
                  <Hammer className="my-auto mr-6" />
                  My Projects.
                </div>
              </a>
            </li>
            <li className="text-center shadow-sm  hover:text-[#f5f5f5b3]">
              <a href="#technologies" onClick={() => setToggle(!toggle)}>
                <div className=" text-2xl border-b-[1px] px-6 py-8 border-[#fff] flex-row flex antialiased cursor-pointer">
                  <Cpu className="my-auto mr-6" />
                  What I Use.
                </div>
              </a>
            </li>
            <li className="text-center shadow-sm  hover:text-[#f5f5f5b3]">
              <a href="#contact" onClick={() => setToggle(!toggle)}>
                <div className=" text-2xl border-b-[1px] p-8 border-[#fff] flex-row flex antialiased cursor-pointer">
                  <Phone className="my-auto mr-6" />
                  Contact Me.
                </div>
              </a>
            </li>
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
              scrollPercentage > 16 ? "text-[#2d3842]" : "text-[#f5f5f5]"
            } hover:cursor-pointer p-3  rounded-full`}
            onClick={() => setToggle(!toggle)}
          >
            <MoreVertical />
          </div>
        )}
      </div>

      <ul
        className={`${
          scrollPercentage > 15 ? "text-[#2D3142]" : "text-[#f5f5f5]"
        } md:flex text-lg md:text-lg font-normal  lg:space-x-8 md:space-x-4 mr-12 hidden `}
      >
        <li className="">
          <a href="#">
            <div className="antialiased cursor-pointer">Home</div>
          </a>
        </li>
        <li>
          <a href="#about">
            <div className=" antialiased cursor-pointer">About Me</div>
          </a>
        </li>
        <li>
          <a href="#projects">
            <div className="antialiased cursor-pointer">My Projects</div>
          </a>
        </li>
        <li>
          <a href="#technologies">
            <div className="antialiased cursor-pointer">What I use</div>
          </a>
        </li>
        <li>
          <a href="#contact">
            <div className="antialiased cursor-pointer">Contact Me</div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
