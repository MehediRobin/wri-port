"use client";
import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i },
  }),
};

function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      ref={ref}
      id="skills"
      className=" flex flex-col justify-center items-center scroll-mt-28 mb-20"
    >
      <SectionHeading> Skills </SectionHeading>
      <ul className="flex gap-6 justify-center items-center w-[50rem] flex-wrap">
        {skillsData.map((skill, i) => (
          <motion.li
            className="bg-gray-200 p-3 text-xl rounded shadow-md font-medium  hover:bg-gray-900 hover:text-white transition-all duration-400 cursor-pointer"
            key={i}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={i}
          >
            {skillsData[i]}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
