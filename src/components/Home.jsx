import React from "react";
import HeroImage from "../assets/heroImage.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure aut
            quos quas soluta error tempore itaque nisi quidem ea ducimus.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-900 to-black cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 pl-2">
                <BsArrowRight size={15} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
