"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Briefcase, Users, Clock, Star, BadgeCheck } from "lucide-react";

const stats = [
  {
    label: "Projects Completed",
    icon: <Briefcase className="size-8 text-[#00BAFE]" />,
    target: 57,
    suffix: "+",
  },
  {
    label: "Users Worldwide",
    icon: <Users className="size-8 text-[#00BAFE]" />,
    target: 4200,
    suffix: "+",
  },
  {
    label: "Years of Experience",
    icon: <Clock className="size-8 text-[#00BAFE]" />,
    target: 3,
    suffix: "+",
  },
  {
    label: "GitHub Stars",
    icon: <Star className="size-8 text-[#00BAFE]" />,
    target: 1100,
    suffix: "+",
  },
  {
    label: "Certifications Earned",
    icon: <BadgeCheck className="size-8 text-[#00BAFE]" />,
    target: 5,
    suffix: "+",
  },
];

const AnimatedStats = () => {
  return (
    <section className="py-12 my-14 rounded-sm bg-[#181818] text-white">
      <div className="max-w-6xl mx-auto px-4">
        

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="mb-2 ">{stat.icon}</div>
              <p className="text-3xl font-extrabold text-white">
                <CountUp end={stat.target} duration={1.8} separator="," />
                {stat.suffix}
              </p>
              <p className="text-gray-400 text-[15px] mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
