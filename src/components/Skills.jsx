"use client"
import Image from "next/image";
import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend"); // State to track active tab

  const frontendTools = [
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      name: "HTML",
      description: "Markup language",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      name: "CSS",
      description: "Stylesheet language",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      name: "JavaScript",
      description: "Programming language",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      name: "TypeScript",
      description: "Typed JavaScript",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      name: "React",
      description: "UI library",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      name: "Next.js",
      description: "React framework",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      name: "Tailwind CSS",
      description: "CSS framework",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      name: "Figma",
      description: "Design tool",
    },
  ];

  const backendTools = [
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      name: "Node.js",
      description: "JS runtime",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
      name: "Express.js",
      description: "Backend framework",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      name: "MongoDB",
      description: "NoSQL database",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      name: "Postman API",
      description: "API testing tool",
    },
  ];

  const activeTools = activeTab === "frontend" ? frontendTools : backendTools;

  return (
    <div className="text-4xl text-center mt-10 scroll-mt-28 " id="skills">
      <div>
        Skills
        <span className="text-[#00BAFE]"> & </span>
        Tools
      </div>

      {/* Tab Section */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setActiveTab("frontend")}
          className={`px-4 py-2 rounded-md text-lg font-semibold ${
            activeTab === "frontend"
              ? " bg-white text-black font-semibold"
              : "bg-black text-white font-semibold border-2 border-white"
          }`}
        >
          Frontend
        </button>
        <button
          onClick={() => setActiveTab("backend")}
          className={`px-4 py-2 rounded-md text-lg font-semibold ${
            activeTab === "backend"
              ? "bg-white text-black font-semibold border-2 "
              : "bg-black text-white font-semibold border-2 border-white"
          }`}
        >
          Backend
        </button>
      </div>

      {/* Tools Grid */}
      <div className="sm:grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3 space-y-3 sm:space-y-0 mt-6">
        {activeTools.map((tool) => (
          <div
            key={tool.name}
            className="w-full rounded-2xl border-2 border-[#151518] px-2.5 py-2 flex items-center hover:bg-[#1c1c20] hover:cursor-pointer"
          >
            <div className="p-2 flex items-center justify-center rounded-lg bg-[#181818]">
              <Image src={tool.image} alt={tool.name} width={30} height={30} />
            </div>
            <div className="text-lg ml-4 w-full text-start">
              <h1 className="text-md text-white">{tool.name}</h1>
              <h2 className="text-md text-gray-400 whitespace-nowrap">
                {tool.description}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
