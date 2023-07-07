import React from "react";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://dummyimage.com/300x300/fff/aaa",
    },
    {
      id: 2,
      src: "https://dummyimage.com/300x300/fff/aaa",
    },
    {
      id: 3,
      src: "https://dummyimage.com/300x300/fff/aaa",
    },
    {
      id: 4,
      src: "https://dummyimage.com/300x300/fff/aaa",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800  text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="font-bold py-5 text-white">
            Check out some of my projects!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-lg shadow-black rounded-lg">
              <img
                src="https://dummyimage.com/300x300/fff/aaa"
                alt=""
                className="w-full p-4 duration-150 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-1 duration-150 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-1 duration-150 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
