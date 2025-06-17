import Image from 'next/image'
import React from 'react'
import ProjectCard from './ProjectCard'
import { motion } from "framer-motion";


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
      links:"https://learnly-fvcx.onrender.com"
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
    <motion.div
      className="text-4xl text-center mt-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      Projects
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 p-4">
        {projects.map((project, index) => (
          <motion.div key={index} variants={cardVariants}>
            <ProjectCard
              ImgUrl={project.ImgUrl}
              title={project.title}
              link={project.links}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Certications
