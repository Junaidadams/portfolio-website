import { favourites } from "../constants";
import { Image } from "lucide-react";

export const Capybara = () => {
  return (
    <div>
      {favourites.animals.map((data, index) => (
        <div
          key={index}
          className="flex-row bg-texture-1 bg-slate-300 rounded-3xl shadow-3xl p-4 justify-center mx-auto w-3/4"
        >
          <img alt="Capybara Image" src={data.image} className="w-3/4 " />
          <a href="https://www.pngwing.com/en/free-png-bgeam">
            <Image color="#172554" size={28} strokeWidth={1.5} />
          </a>
        </div>
      ))}
    </div>
  );
};
