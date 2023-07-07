import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactIcon from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import GitHub from "../assets/github.png";
import GraphQl from "../assets/graphql.png";
import Node from "../assets/node.png";
import Handlebars from "../assets/handlebars.png";
import NextJs from "../assets/nextjs.png";
import MongoDb from "../assets/mongodb.png";
import MySql from "../assets/mysql.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "hover:scale-105 duration-500 py-2 rounded-lg",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "hover:scale-105 duration-500 py-2 rounded-lg",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "hover:scale-105 duration-500 py-2 rounded-lg",
    },
    {
      id: 4,
      src: Tailwind,
      title: "Tailwind",
      style: "hover:scale-105 duration-500 py-2 rounded-lg",
    },
    {
      id: 5,
      src: Handlebars,
      title: "Handlebars",
      style: "hover:scale-105 duration-500 py-2 rounded-lg",
    },
    {
      id: 6,
      src: ReactIcon,
      title: "React",
      style: "hover:scale-105 duration-500 py-2 rounded-lg",
    },
    {
      id: 7,
      src: NextJs,
      title: "Next.js",
      style: "hover:scale-105 duration-500 py-2 rounded-lg",
    },
    {
      id: 8,
      src: Node,
      title: "Node.js",
      style: "hover:scale-105 duration-500 py-2 rounded-lg",
    },
    {
      id: 9,
      src: MongoDb,
      title: "MongoDB",
      style: "hover:scale-105 duration-500 py-2 rounded-lg",
    },
    {
      id: 10,
      src: GraphQl,
      title: "GraphQL",
      style: "hover:scale-105 duration-500 py-2 rounded-lg",
    },
    {
      id: 11,
      src: MySql,
      title: "MySQL",
      style: "hover:scale-105 duration-500 py-2 rounded-lg",
    },
    {
      id: 12,
      src: GitHub,
      title: "GitHub",
      style: "hover:scale-105 duration-500 py-2 rounded-lg",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full pt-28"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="font-bold py-5 text-white">
            Technologies I've worked with:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
