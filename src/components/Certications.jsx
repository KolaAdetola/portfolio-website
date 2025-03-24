import Image from 'next/image'
import React from 'react'
import ProjectCard from './ProjectCard'

const Certications = () => {
  const projects = [
    {
      ImgUrl: "/images/food.jpeg",
      title: "Restaurant Website",
      links:""
    },
    {
      ImgUrl: "/images/github.jpeg",
      title: "Github Profile Clone",
      links:"https://kolaadetola.github.io/responsive-github/"
    },
    {
      ImgUrl: "/images/learnly.jpeg",
      title: "Chat/Exam Management system",
      links:""
    },
    {
      ImgUrl: "/images/quote.jpeg",
      title: "quote generator",
      links:"https://kolaadetola.github.io/Quote-Generator/"
    },
    {
      ImgUrl: "/images/weather.jpeg",
      title: "real time weather app",
      links:"https://kolaadetola.github.io/weather-app/"
    },
    {
      ImgUrl: "/images/folio.jpeg",
      title: "personal portfolio",
      links:"https://portfolio-website-omega-vert.vercel.app/"
    },
  ]
  return (
    <div className="text-4xl text-center mt-10">
        Projects
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10 p-4  ">
          {projects.map((project, index) => (
            <ProjectCard key={index} ImgUrl={project.ImgUrl} title={project.title} description={project.description} link={project.links} />
          ))}
        </div>
    </div>
  )
}

export default Certications