import React from "react";
import { Briefcase, Code, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const timelineData = [
  {
    date: "2024 – Present",
    title: "Fullstack Developer – Freelance",
    description:
      "Built responsive web apps with Next.js, TailwindCSS, and MongoDB. Delivered optimized, scalable solutions for multiple clients.",
    icon: <Briefcase className="text-[#00BAFE]" />,
  },
  {
    date: "2023",
    title: "Open Source Contributor",
    description:
      "Contributed to GitHub projects, improving performance and documentation. Helped grow developer communities.",
    icon: <Code className="text-[#00BAFE]" />,
  },
  {
    date: "2022",
    title: "Software Engineering Bootcamp",
    description:
      "Completed an intensive bootcamp covering React, Node.js, and MongoDB. Built multiple capstone projects with real-world use cases.",
    icon: <GraduationCap className="text-[#00BAFE]" />,
  },
];

const About = () => {
  return (
    <div className=" mt-24 scroll-mt-5" id="about">
      <section
        id="experience"
        className="scroll-mt-28 py-16 px-4 w-full rounded-sm bg-[#181818] text-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-center font-bold mb-10 text-[#00BAFE]">
            Experience & Achievements
          </h2>

          <ol className="relative  ml-5 border-l px-10  border-gray-700">
            {timelineData.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="mb-10 ml-4"
              >
                <div className="absolute w-6 h-6 bg-[#0a0a0a] border border-white rounded-full -left-3 flex items-center justify-center">
                  {item.icon}
                </div>
                <time className="mb-1 text-sm font-medium text-gray-400">
                  {item.date}
                </time>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-base font-normal text-gray-300 mt-1">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* <div className="w-full mt-[150px] bg-[#181818] px-6 py-8 text-lg sm:text-2xl rounded-lg">
        <h1 className="">
          Welcome!! I'm Kolawole Adetola a passionate{" "}
          <span className="uppercase italic">Full-Stack web Developer</span> who
          enjoys building scalable and user-friendly applications. When I’m not
          coding, I’m diving into anime, playing badminton, or advocating for
          women’s rights. I thrive on learning, creating, and making a positive
          impact through technology
        </h1>
      </div> */}
    </div>
  );
};

export default About;
