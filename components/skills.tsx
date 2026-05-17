"use client"

import React from "react"
import SectionHeading from "./section-heading"
import {
  aiToolsData,
  areasOfInterestData,
  backendSkillsData,
  frontendkSkillsData,
} from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import { motion } from "framer-motion"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView("Skills")

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mb-8">
        {backendSkillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {frontendkSkillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold text-gray-700 dark:text-white/80 mt-10 mb-1">
        AI Tools
      </h3>
      <p className="text-sm italic text-gray-600 dark:text-white/60 mb-4">
        Used responsibly with rigorous human verification
      </p>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {aiToolsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold text-gray-700 dark:text-white/80 mt-10 mb-4">
        Areas of interest
      </h3>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {areasOfInterestData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
