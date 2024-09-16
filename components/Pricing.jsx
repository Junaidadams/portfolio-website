import { pricingScheme } from "../constants";
import ToggleMenu from "./ToggleMenu";

const Pricing = () => {
  return (
    <div className=" h-full p-4 flex flex-col md:flex-row m-auto">
      {pricingScheme.map((data) => (
        <div
          className="shadow-teal-lg rounded my-2 md:my-0 md:mx-2 p-5"
          key={data.key}
        >
          <div className="border-b-2 pb-2 space-y-4 border-teal-600">
            <h1 className="text-gray-800 font-bold text-2xl">{data.name}</h1>
            <p>
              <span className="text-teal-800 text-2xl font-black">
                R{data.cost}
              </span>{" "}
              once off
            </p>
            <p>{data.description}</p>
            {data.pageOptions.length > 0 && (
              <ToggleMenu
                menuItems={data.pageOptions}
                name={data.key === 1 ? "Section options" : "Page options"}
              />
            )}
            <h3 className="font-bold">Add on pages:</h3>
            <p>
              {data.addOnPageLimit > 0
                ? `Up to ${data.addOnPageLimit} @R${data.addOnPageCost}/page`
                : `No limit @R${data.addOnPageCost}/page`}
            </p>

            <div className="">
              <h1 className="font-semibold">
                <span className="font-bold text-teal-500">Optional</span>{" "}
                Monthly retainer service
              </h1>
              <p>
                @R{data.retainerCost} for {data.retainerHoursIncluded}hr
              </p>
              <ToggleMenu
                menuItems={data.retainerServicesIncluded}
                name="Included Services"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
