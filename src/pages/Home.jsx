import { useState } from "react";
import { motion } from "framer-motion";
import FlipLink from "../../components/FlipLink";
import Pricing from "../../components/Pricing";
import Steps from "../../components/Steps";
import QuoteForm from "../../components/QuoteForm";
import ContactForm from "../../components/ContactForm";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [toggleRetainer, setToggleRetainer] = useState(false);
  return (
    <div className="">
      <section
        id="hero"
        className="min-h-screen flex bg-gradient-to-tr from-teal-700 to-teal-400 -mt-16"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
          }}
          className="m-auto text-center flex flex-col"
        >
          <div className="flex space-x-2 md:space-x-8 mx-auto">
            <FlipLink subText="Let">Let</FlipLink>
            <FlipLink subText="Me">Me</FlipLink>
            <FlipLink subText="Build">Build</FlipLink>
          </div>
          <div className="flex space-x-2 md:space-x-8 mx-auto">
            <FlipLink subText="Your">Your</FlipLink>
            <FlipLink subText="Website">Website</FlipLink>
          </div>
          <div className="mt-4 mx-auto">
            <a
              className=" bg-slate-100 flex space-x-2 md:space-x-8 w-fit px-2 md:px-8 sm:px-4 sm:py-2 rounded-full"
              href="#pricing"
            >
              <FlipLink subText={"Get "} color={"#555"}>
                Get
              </FlipLink>
              <FlipLink subText={" Started"} color={"#555"}>
                Started
              </FlipLink>
            </a>
          </div>
        </motion.div>
      </section>

      <section
        id="information"
        className="min-h-screen flex flex-col bg-gradient-to-br from-teal-700 to-teal-400"
      >
        <div className="m-auto bg-gradient-to-tr from-slate-100 to-white md:rounded-lg p-4 sm:p-6 md:p-8">
          <h1 className="text-5xl font-black font-san uppercase sm:text-7xl  md:text-8xl  my-5 bg-gradient-to-t from-teal-700 to-teal-800 text-transparent bg-clip-text shadow- text-center p-2">
            Process
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <Steps />
          </motion.div>
        </div>
      </section>
      <section
        id="pricing"
        className="min-h-screen flex flex-col bg-gradient-to-tr from-teal-700 to-teal-400"
      >
        <div className="m-auto bg-gradient-to-tr from-slate-100 to-white md:rounded-lg p-4 sm:p-6 md:p-8">
          <h1 className="text-5xl font-black font-san uppercase sm:text-7xl  md:text-8xl  my-5 bg-gradient-to-t from-teal-700 to-teal-800 text-transparent bg-clip-text shadow- text-center p-2">
            Pricing
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 1 },
            }}
            className="w-fit"
          >
            <Pricing />
          </motion.div>
        </div>
      </section>
      <section
        id="quote"
        className="min-h-screen flex flex-col bg-gradient-to-br from-teal-700 to-teal-400"
      >
        <div className="m-auto bg-gradient-to-tr from-slate-100 to-white md:rounded-lg p-4 sm:p-6 md:p-8">
          <h1 className="text-5xl font-black font-san uppercase sm:text-7xl  md:text-8xl  my-5 bg-gradient-to-t from-teal-700 to-teal-800 text-transparent bg-clip-text shadow- text-center p-2">
            Contact
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 1 },
            }}
            className="w-fit flex flex-col p-4 md:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-8"
          >
            <div className="w-1/2">
              <QuoteForm />
            </div>

            {/* Wrapper div to center the <p> */}
            <div className="flex items-center">
              <p className="font-montserrat font-semibold text-xl h-fit text-teal-700 m-auto">
                or
              </p>
            </div>

            <div className="w-1/2">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
