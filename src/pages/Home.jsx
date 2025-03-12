import { useState } from "react";
import { motion } from "framer-motion";
import FlipLink from "../../components/FlipLink";
import Pricing from "../../components/Pricing";
import Steps from "../../components/Steps";
import ContactForm from "../../components/ContactForm";
import QuoteForm from "../../components/QuoteForm";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [toggleRetainer, setToggleRetainer] = useState(false);
  return (
    <div className="">
      <section
        id="hero"
        className="min-h-screen flex bg-gradient-to-t from-teal-700 to-teal-600 -mt-16"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
          }}
          className="m-auto text-center flex flex-col backdrop-blur-lg p-5"
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
              <FlipLink subText={"Get "} color={"#333"}>
                Get
              </FlipLink>
              <FlipLink subText={" Started"} color={"#333"}>
                Started
              </FlipLink>
            </a>
          </div>
        </motion.div>
      </section>
      <section
        id="information"
        className="min-h-screen flex flex-col bg-gradient-to-b from-teal-700 to-teal-400"
      >
        <div className="m-auto bg-gradient-to-t from-slate-100 to-white md:rounded-lg p-1 sm:p-6 md:p-8 w-[90%] lg:w-3/5 my-10">
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
        className="min-h-screen flex flex-col bg-gradient-to-t from-teal-700 to-teal-400"
      >
        <div className="m-auto bg-gradient-to-tr from-slate-100 to-white md:rounded-lg p-1 sm:p-6 md:p-8 w-[90%] lg:w-3/5 my-10">
          <h1 className="text-5xl font-black font-san uppercase sm:text-7xl  md:text-8xl  my-5 bg-gradient-to-t from-teal-700 to-teal-800 text-transparent bg-clip-text shadow- text-center p-2">
            Pricing
          </h1>
          <p className="text-gray-700 my-5 text-center">
            Prices valid until 30th April
          </p>
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
        id="contact"
        className="min-h-screen flex flex-col items-center bg-teal-700 "
      >
        <div className="bg-gradient-to-t from-slate-100 to-white md:rounded-lg p-1 sm:p-6 md:p-8 shadow-lg w-[90%] lg:w-3/5 my-10 mx-auto">
          <h1 className="text-5xl font-black font-san uppercase sm:text-7xl md:text-8xl my-5 bg-gradient-to-t from-teal-700 to-teal-800 text-transparent bg-clip-text shadow- text-center p-2">
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
            className="flex flex-col items-center p-4 space-y-2 w-fit"
          >
            <div className="flex flex-col items-center space-y-4 backdrop-blur-xl py-2">
              <p className="mx-auto text font-montserrat text-[#222] tracking-wide text-base md:text-lg px-6 py-1 md:w-2/3 xl:w-1/2">
                Please feel free to reach out to me regarding a quote.
                <br />
                <br /> I am not actively advertising larger websites (ones with
                backend functionality) as I have yet to figure out a pricing
                scheme for them, but will be able to provide quotes for them
                either way.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-1 backdrop-blur-xl py-2">
              <h1 className="text-gray-700 font-bold text-xl sm:text-2xl">
                Email
              </h1>
              <a
                href="mailto:junaidadams117@gmail.com"
                className="text-lg sm:text-xl text-teal-700 hover:text-teal-900 underline"
              >
                junaidadams117@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center space-y-1 backdrop-blur-xl py-2">
              <h1 className="text-gray-700 font-bold text-xl sm:text-2xl">
                Phone
              </h1>
              <a
                href="tel:0826756350"
                className="text-lg sm:text-xl text-teal-700 hover:text-teal-900 underline"
              >
                082 675 6350
              </a>
            </div>

            <p className="text-lg text-teal-600 text-center mt-6 backdrop-blur-xl py-5">
              Contact forms coming soon. Stay tuned!
            </p>
          </motion.div>
        </div>
      </section>
      {/* <section
        id="contact"
        className="min-h-screen flex flex-col bg-gradient-to-br from-teal-700 to-teal-400"
      >
        <div className="m-auto bg-gradient-to-tr from-slate-100 to-white md:rounded-lg p-1 sm:p-6 md:p-8 w-[90%] lg:w-3/5 my-10">
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
            <div className="md:w-1/2">
              <QuoteForm />
            </div>

            <div className="flex items-center">
              <p className="font-montserrat font-semibold text-xl h-fit text-teal-700 m-auto">
                or
              </p>
            </div>

            <div className="md:w-1/2">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
