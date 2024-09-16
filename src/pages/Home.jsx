import FlipLink from "../../components/FlipLink";
import Pricing from "../../components/Pricing";

const Home = () => {
  return (
    <div className="">
      <section
        id="hero"
        className="min-h-screen flex bg-gradient-to-tr from-teal-700 to-teal-400"
      >
        <div className="m-auto">
          <div className="flex space-x-2 md:space-x-8">
            <FlipLink subText="Let">Let</FlipLink>
            <FlipLink subText="Me">Me</FlipLink>
            <FlipLink subText="Build">Build</FlipLink>
          </div>
          <div className="flex space-x-2 md:space-x-8">
            <FlipLink subText="Your">Your</FlipLink>
            <FlipLink subText="Your">Website</FlipLink>
          </div>
          <div>
            <a
              className=" bg-slate-100 flex space-x-2 md:space-x-8 w-fit px-2 md:px-8 sm:px-4 sm:py-2 rounded-full"
              href="#pricing"
            >
              <FlipLink subText={"Get "} color={"red-50"}>
                Get
              </FlipLink>
              <FlipLink subText={" Started"} color={"red-500"}>
                Started
              </FlipLink>
            </a>
          </div>
        </div>
      </section>
      <section
        id="pricing"
        className="min-h-screen flex flex-col bg-gradient-to-br from-teal-700 to-teal-400"
      >
        <div className="m-auto bg-slate-100 rounded-sm p-8">
          <h1 className="text-4xl font-black font-san uppercase sm:text-7xl  md:text-8xl  my-5 bg-gradient-to-t from-teal-700 to-teal-800 text-transparent bg-clip-text shadow- text-center p-2">
            Pricing
          </h1>
          <div className="w-fit">
            <Pricing />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
