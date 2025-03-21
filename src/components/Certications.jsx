import Image from 'next/image'
import React from 'react'
import ProjectCard from './ProjectCard'

const Certications = () => {
  const projects = [
    {
      ImgUrl: "/images/food.jpeg",
      title: "Restaurant Website",
      tags:["React", "Tailwind CSS"]
    },
    {
      ImgUrl: "/images/github.jpeg",
      title: "Github Profile Clone",
      tags:["React", "Tailwind CSS"]
    },
    {
      ImgUrl: "/images/learnly.jpeg",
      title: "Project 3",
      tags:["React", "Tailwind CSS"]
    },
    {
      ImgUrl: "/images/quote.jpeg",
      title: "Project 3",
      tags:["React", "Tailwind CSS"]
    },
    {
      ImgUrl: "/images/weather.jpeg",
      title: "Project 3",
      tags:["React", "Tailwind CSS"]
    },
    {
      ImgUrl: "/images/portfolio.jpeg",
      title: "Project 3",
      tags:["React", "Tailwind CSS"]
    },
  ]
  return (
    <div className="text-4xl text-center mt-10">
        Projects
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10 p-4  ">
          {projects.map((project, index) => (
            <ProjectCard key={index} ImgUrl={project.ImgUrl} title={project.title} description={project.description} tags={project.tags} />
          ))}
        </div>
    </div>
  )
}

export default Certications