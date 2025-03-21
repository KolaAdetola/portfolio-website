import React from "react";
import Tewls from "./Tewls";

const Skills = () => {
  const tools = [
    {
      image: "/images/css.svg",
      name: "CSS",
      description: "Stylesheet language",
    },
    {
      image: "/images/javascript.svg",
      name: "JavaScript",
      description: "Programming language",
    },
    {
      image: "/images/typescript.svg",
      name: "TypeScript",
      description: "Typed JavaScript",
    },
    {
      image: "/images/react.svg",
      name: "React",
      description: "UI library",
    },
    {
      image: "/images/nodejs.svg",
      name: "Node.js",
      description: "JS runtime",
    },
    {
      image: "/images/express.svg",
      name: "Express.js",
      description: "Backend framework",
    },
    {
      image: "/images/mongodb.svg",
      name: "MongoDB",
      description: "NoSQL database",
    },
    {
      image: ``,
      name: "Tailwind CSS",
      description: "CSS framework",
    },
    {
      image: "/images/figma.svg",
      name: "Figma",
      description: "Design tool",
    },
  ];
  return (
    <div className="text-4xl text-center mt-10 ">
      <div className=" ">
        Skills
        <span className="text-[#00BAFE]"> & </span>
        Tools
      </div>
      <div className="sm:grid-cols-3 grid gap-4 mt-4">
        <div className="w-full  rounded-2xl border-2 border-gray-400 px-4 py-4 flex items-center ">
          <div className="p-2 flex items-center justify-center rounded-lg bg-[#181818] ">
            <svg viewBox="0 0 128 128" width={"35px"} height={"35px"}>
              <path
                d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                fill="#38bdf8"
              ></path>
            </svg>
          </div>
          <div className="text-lg ml-4 w-full text-start ">
            {tools.map((tool, index) => {
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={tool.image} alt={tool.name} className="w-8 h-8" />
                    <div className="ml-2">
                      <h1 className="text-2xl text-white">{tool.name}</h1>
                      <h2 className="text-xl text-gray-400">
                        {tool.description}
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
