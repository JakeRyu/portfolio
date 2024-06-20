"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"

function calculateYears(startYear: number): number {
  const currentYear = new Date().getFullYear()
  return currentYear - startYear
}

export default function About() {
  const { ref } = useSectionInView("About")

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My name is Jake Ryu. I was born and raised in South Korea, where I began
        my journey as a software developer. With 20+ years of experience in the
        field, I have honed my skills and expertise across various technologies
        and projects. After gaining six years of experience in Korea, I moved to
        the UK to help build the local systems for{" "}
        <a
          className="italic font-medium"
          href="https://www.hyundai.com/uk/en.html"
          target="_blank"
        >
          Hyundai Motor Company
        </a>
        . I have since settled here and am currently working as a Lead Developer
        at{" "}
        <a
          className="italic font-medium"
          href="https://www.barnett-waddingham.co.uk/"
          target="_blank"
        >
          Barnett Waddingham
        </a>
        , a financial services company specializing in workplace pensions.
      </p>

      <p className="mb-3">
        I believe in the responsibility of developers to implement requirements
        accurately and efficiently. Quality assurance through testing is
        paramount in my development process. Utilising methodologies like{" "}
        <span className="italic font-medium">Clean Architecture</span> and{" "}
        <span className="italic font-medium">Domain-Driven Design (DDD)</span>,
        I manage dependencies effectively and verify business logic through
        clear domain models. These approaches enable me to write robust,
        maintainable, and scalable code.
      </p>

      <p className="mb-3">
        When I&apos;m not coding, I enjoy watching English Premier League (EPL)
        matches. I also love reading novels and self-improvement books.
      </p>
    </motion.section>
  )
}
