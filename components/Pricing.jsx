import { pricingScheme } from "../constants";

const Pricing = () => {
  return (
    <div className=" h-full p-4 flex flex-col md:flex-row m-auto">
      {pricingScheme.map((data) => (
        <div className="shadow-lg rounded m-5 p-5" key={data.key}>
          <h1>{data.name}</h1>
          <p>
            R<span className="text-teal-800 text-2xl">{data.cost}</span> once
            off
          </p>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
