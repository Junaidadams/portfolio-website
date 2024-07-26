import { favourites } from "../constants";

export const Capybara = () => {
  return (
    <div>
      {favourites.animals.map((data, index) => (
        <div key={index} className="flex-row">
          <a href="https://www.pngwing.com/en/free-png-bgeam">
            <img
              alt="Capybara Image"
              src={data.image}
              className="w-3/4 bg-texture-1 bg-slate-300 rounded-3xl shadow-3xl p-4 justify-center mx-auto"
            />
          </a>
        </div>
      ))}
    </div>
  );
};
