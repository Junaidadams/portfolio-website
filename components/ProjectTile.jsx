import { projects } from "../constants";
import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ProjectTile = () => {
  const slider = React.useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4500,
    arrows: false,
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 max-w-[800px]">
        <Slider {...settings} ref={slider}>
          {projects.map((project) => (
            <div
              key={project.key}
              className="border-[1px] w-full bg-[#ffffff61] rounded-3xl border-[#2d31428b] mx-auto h-[490px] md:h-[600px] flex flex-col"
            >
              <div
                className="max-w-full h-5/12 p-3 m-auto rounded-t-3xl"
                style={{ backgroundColor: project.bgColor }}
              >
                <img
                  src={project.img}
                  alt={project.name}
                  className="m-auto w-5/6 max-h-full rounded-2xl"
                />
              </div>
              <div className="flex flex-col h-5/12">
                <div className="h-fit">
                  <div className="flex flex-row">
                    <button
                      className="mr-auto mt-auto"
                      onClick={() => slider?.current?.slickPrev()}
                    >
                      <ChevronLeft
                        className="my-auto"
                        size={30}
                        strokeWidth={1}
                      />
                    </button>
                    <h3 className="text-xl sm:text-3xl mt-4 sm:py-2 sm:px-6 px-2 font-medium font-poppins text-black">
                      {project.name}
                    </h3>
                    <button
                      className="ml-auto mt-auto"
                      onClick={() => slider?.current?.slickNext()}
                    >
                      <ChevronRight size={30} strokeWidth={1} />
                    </button>
                  </div>
                  <p className="md:hidden px-6 py-2 font-light text-black text-lg">
                    {project.shortDesc}
                  </p>
                  <p className="hidden md:flex px-6 lg:px-10 py-2 font-light text-black">
                    {project.longDesc}
                  </p>
                </div>
                <div className="w-full mt-3 mb-2 flex flex-row h-fit">
                  {project.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="text-white text-xs md:text-sm bg-black p-2 h-fit"
                    >
                      {tag}
                    </div>
                  ))}
                  <div className="w-fit mb-auto mt-auto ml-auto">
                    {project.link && (
                      <a
                        href={project.link}
                        className="border-[1px] text-xs md:text-sm h-fit border-black bg-black text-white hover:animate-none rounded-2l p-2  m-2 mr-0 sm:m-6 sm:mr-0 animate-pulse"
                      >
                        See More
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
