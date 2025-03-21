import React from "react";

const ProjectCard = ({ ImgUrl, title, description }) => {
  return (
    <div className="bg-[#181818] p-4 rounded-lg shadow-lg">
      <div
        className="h-52 md:h-60 rounded-lg"
        style={{ background: `url(${ImgUrl})`, backgroundSize: "cover" }}
      ></div>
      <h1 className="text-start text-xl text-white mt-4 font-semibold">
        {title}
      </h1>
      <div className="flex justify-between items-center gap-4 mt-2">
          <div className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg ">
            API
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;
