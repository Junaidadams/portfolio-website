import { frontendTechnologies, backendTechnologies } from "../constants";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

export const TechTiles = () => {
  return (
    <div className=" flex flex-col md:flex-row w-fit mx-auto">
      <div className="mb-4 mr-8">
        <ul>
          <h1 className="text-3xl font-extralight font-poppins hover:text-[#313648] text-black mb-4">
            Frontend Technologies:
          </h1>
          {frontendTechnologies.map((frontendTech, index) => (
            <li
              key={index}
              className="my-1 text-xl hover:text-[#313648] font-poppins hover:translate-x-3 transition ease-in-out delay-150"
            >
              <a
                href={frontendTech.link}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={frontendTech.shortDesc}
                data-tooltip-place="top"
                className="flex flex-row"
              >
                {frontendTech.img && (
                  <img
                    src={frontendTech.img}
                    width={20}
                    height={20}
                    className="mx-2"
                  />
                )}
                {frontendTech.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:ml-8">
        <ul>
          <h1 className="text-3xl font-poppins  hover:text-[#313648] text-black mb-4">
            Backend Technologies
          </h1>

          {backendTechnologies.map((backendTech, index) => (
            <li
              key={index}
              className="my-1 hover:text-[#313648] hover:translate-x-3 transition ease-in-out delay-150 font-poppins text-xl font-extralight"
            >
              <a
                href={backendTech.link}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={backendTech.shortDesc}
                data-tooltip-place="top"
                className="flex flex-row"
              >
                {backendTech.img && (
                  <img
                    src={backendTech.img}
                    width={20}
                    height={20}
                    className="mx-2"
                  />
                )}
                {backendTech.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Tooltip id="my-tooltip" delayShow={600} />
    </div>
  );
};
