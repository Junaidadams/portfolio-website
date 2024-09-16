import { pricingScheme } from "../constants";

const Pricing = () => {
  return (
    <div className=" h-full p-4 flex flex-col md:flex-row m-auto">
      {pricingScheme.map((data) => (
        <div
          className="shadow-lg rounded my-2 md:my-0 md:mx-2 p-5"
          key={data.key}
        >
          <h1 className="text-gray-800 font-bold text-2xl">{data.name}</h1>
          <p>
            <span className="text-teal-800 text-2xl font-black">
              R{data.cost}
            </span>{" "}
            once off
          </p>
          <p>{data.description}</p>

          <h3 className="font-bold">Add on pages:</h3>
          <p>
            {data.addOnPageLimit > 0
              ? `Up to ${data.addOnPageLimit} @R${data.addOnPageCost} per page`
              : `No limit @R${data.addOnPageCost} per page`}
          </p>
          <ul>
            <h3 className="font-bold">Page options:</h3>
            {data.pageOptions
              ? data.pageOptions.map((option, index) => (
                  <li className="text-teal-800" key={index}>
                    {option}
                  </li>
                ))
              : ""}{" "}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
