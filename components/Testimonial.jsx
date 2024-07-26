import { testimonials } from "../constants";

export const Testimonial = () => {
  return (
    <div className="">
      {testimonials.map((data, index) => (
        <div
          key={index}
          className="bg-slate-300 bg-texture-1  sm:my-6 my-4 mx-auto w-full py-4 px-6 sm:py-8 sm:px-10 rounded-3xl shadow-3xl"
        >
          <div className="flex flex-col sm:flex-row">
            <div className="flex justify-center items-center w-fit h-fit p-1 bg-black mr-2 rounded-full my-auto shadow-2xl">
              <img
                src={data.image}
                width={35}
                height={35}
                className="rounded-full"
              />
            </div>

            <div>
              <h1 className="text-2xl xl:text-3xl border-b-[1px] border-black font-bold text-[#222] font-poppins">
                {data.name}
              </h1>
              <p className="text-sm text-slate-800">
                {data.designation}
                <a
                  target="_blank"
                  href={data.companyLink}
                  className="text-blue-500"
                >
                  {" "}
                  @{data.company}
                </a>
              </p>
            </div>
          </div>
          <div className="text-xl  pt-3 font-poppins text-slate-800">
            {data.testimonial}
          </div>
        </div>
      ))}
    </div>
  );
};
