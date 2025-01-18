const NoPage = () => {
  return (
    <div className="min-h-screen -mt-16 flex bg-gradient-conic from-teal-700 to-teal-600">
      <a
        href="/"
        className="m-auto bg-gradient-conic from-slate-100 to-white md:rounded-lg p-4 sm:p-6 md:p-8 w-[90%] lg:w-2/5 h-fit "
      >
        <h1 className="text-gray-700 font-bold text-2xl">
          No page found at this url, please click here or use the navigation bar
          to go to the homepage.
        </h1>
      </a>
    </div>
  );
};

export default NoPage;
