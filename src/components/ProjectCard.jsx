import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ ImgUrl, title, link }) => {
  return (
    <div className=" bg-[#181818] rounded-lg shadow-lg">
      <div
        className="h-42 sm:h-52 rounded-t-xl relative group "
        style={{ background: `url(${ImgUrl})`, backgroundSize: "cover" }}
      >
      </div>
      <div className=" px-4 py-2 flex justify-between flex-row ">
        <div className="">
          <h1 className="text-start text-xl capitalize text-white mt-4 font-semibold">
            {title}
          </h1>
        </div>
        <div className="mt-5 hover:cursor-pointer">
          <a href={link} target="_blank">
            <svg
              width="40px"
              height="40px"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              transform="matrix(1, 0, 0, 1, 0, 0)"
            >
              <g
                id="SVGRepo_bgCarrier"
                stroke-width="0"
                transform="translate(0,0), scale(1)"
              >
                <rect
                  x="-2.4"
                  y="-2.4"
                  width="28.80"
                  height="28.80"
                  rx="2.592"
                  fill="#00BAFE"
                  strokewidth="0"
                ></rect>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#ffffff"
                stroke-width="0.288"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5"
                  stroke="#"
                  stroke-width="1.656"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
