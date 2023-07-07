import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          eligendi, iste eum ullam possimus veritatis natus cum nihil
          dignissimos sint necessitatibus consequatur tenetur unde fugit
          provident ut voluptate fugiat sequi. Numquam ut delectus veritatis
          maiores voluptas odio iusto tenetur nam vero pariatur doloribus illum
          labore, ex officiis, vel ad aliquam.
        </p>

        <br />

        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          laboriosam inventore quos esse quaerat quam excepturi modi, at
          dignissimos quidem magni veniam totam dolores eaque, fuga aut facere
          nihil repellendus? Reprehenderit, quo maxime nobis tenetur inventore
          libero repellat veniam omnis sint voluptatem aliquid optio, molestiae
          ut ipsum molestias dolore recusandae.
        </p>
      </div>
    </div>
  );
};

export default About;
