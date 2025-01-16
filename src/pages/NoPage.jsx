const NoPage = () => {
  return (
    <div className="min-h-screen -mt-16 flex bg-gradient-conic from-teal-700 to-teal-600">
      <div className="m-auto bg-gradient-conic from-slate-100 to-white md:rounded-lg p-4 sm:p-6 md:p-8 w-4/5 lg:w-1/2 my-20">
        <h1 className="text-5xl font-black font-san uppercase sm:text-7xl  md:text-8xl  my-5 bg-gradient-to-t from-teal-700 to-teal-800 text-transparent bg-clip-text shadow- text-center p-2">
          No page found at this url, please use the Navbar to navigate home.
        </h1>
      </div>
    </div>
  );
};

export default NoPage;
