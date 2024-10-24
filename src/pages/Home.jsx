import { useState } from "react";
import { motion } from "framer-motion";
import FlipLink from "../../components/FlipLink";
import Pricing from "../../components/Pricing";
import Steps from "../../components/Steps";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [toggleRetainer, setToggleRetainer] = useState(false);
  return (
    <div className="">
      <section
        id="hero"
        className="min-h-screen flex bg-gradient-conic from-teal-700 to-teal-600 -mt-16"
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
        <div className="m-auto bg-gradient-conic from-slate-100 to-white md:rounded-lg p-4 sm:p-6 md:p-8">
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
          <p className="text-gray-700 my-5 text-center">
            Prices valid until 31st October
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
        className="min-h-screen flex flex-col items-center bg-gradient-to-br from-teal-700 to-teal-400"
      >
        <div className="bg-gradient-conic from-slate-100 to-white md:rounded-lg p-4 sm:p-6 md:p-8 shadow-lg w-fit mx-auto">
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
            className="flex flex-col items-center p-4 space-y-8 w-fit"
          >
            <div className="flex flex-col items-center space-y-4 backdrop-blur-xl py-5">
              <p className="mx-auto text-center font-montserrat text-[#222] tracking-wide text-base md:text-lg px-6 py-1 md:w-2/3 xl:w-1/2">
                Please feel free to reach out to me regarding a quote.
                <br /> I am not actively advertising larger websites (ones with
                backend functionality) as I have yet to figure out a pricing
                scheme for them, but will be able to provide quotes for them
                either way.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 backdrop-blur-xl py-5">
              <h1 className="text-gray-700 font-bold text-2xl">Email</h1>
              <a
                href="mailto:junaidadams117@gmail.com"
                className="text-xl text-teal-700 hover:text-teal-900 underline"
              >
                junaidadams117@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center space-y-4 backdrop-blur-xl py-5">
              <h1 className="text-gray-700 font-bold text-2xl">Phone</h1>
              <a
                href="tel:0826756350"
                className="text-xl text-teal-700 hover:text-teal-900 underline"
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
