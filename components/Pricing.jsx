import { pricingScheme } from "../constants";
import ToggleMenu from "./ToggleMenu";

const Pricing = () => {
  return (
    <div className=" h-full p-4 flex flex-col md:flex-row m-auto">
      {pricingScheme.map((data) => (
        <div
          className="md:w-1/2 shadow-teal-lg font rounded my-2 md:my-0 md:mx-2 p-5"
          key={data.key}
        >
          <div className="border-b-2 pb-4 space-y-4 border-teal-600">
            <h1 className="text-gray-700 font-bold text-2xl">{data.name}</h1>
            <div>
              <div>
                {data.saleCost < data.cost ? (
                  <div className="">
                    <strike className="text-gray-900 text-2xl font-black">
                      R{data.cost}
                    </strike>{" "}
                    <span className="text-teal-800 text-2xl font-black">
                      R{data.saleCost}
                    </span>{" "}
                    <span> once off</span>
                  </div>
                ) : (
                  <p>
                    <span className="text-teal-800 text-2xl font-black">
                      R{data.cost}
                    </span>{" "}
                    once off
                  </p>
                )}
              </div>
            </div>
            <div className="sm:text-lg">{data.description}</div>
            {data.pageOptions.length > 0 && (
              <ToggleMenu
                menuItems={data.pageOptions}
                name={data.key === 1 ? "Section options" : "Page options"}
              />
            )}
            <div className="sm:text-lg">
              <h3 className="font-bold">Add on pages:</h3>
              <p>
                {data.addOnPageLimit > 0
                  ? `Up to ${data.addOnPageLimit} @R${data.addOnPageCost}/page`
                  : `No limit @R${data.addOnPageCost}/page`}
              </p>
            </div>

            <div className="space-y-4 sm:text-lg">
              <div>
                <h1 className="font-bold">
                  <span className="font-black ">Optional</span> monthly retainer
                  service:
                </h1>
                <p>
                  <span className="font-">
                    <span className="text-teal-500">@</span>R{data.retainerCost}
                  </span>{" "}
                  for{" "}
                  <span className="font-">{data.retainerHoursIncluded}hr</span>
                </p>
              </div>
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
