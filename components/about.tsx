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
        my journey as a software developer. It&apos;s been{" "}
        {`${calculateYears(2000)}`} years since I started. After gaining six
        years of experience in Korea, I moved to the UK to help build the local
        systems for Hyundai Motor Company. I have since settled here and am
        currently working as a Lead Developer at{" "}
        <a href="https://www.barnett-waddingham.co.uk/" target="_blank">
          Barnett Waddingham
        </a>
        , a financial services company specializing in workplace pensions. I
        primarily work with <span className="italic font-medium">.NET</span> and{" "}
        <span className="italic font-medium">React</span> to create amazing
        projects.
      </p>

      <p className="mb-3">
        I have a keen interest in web and solution architecture. When designing
        backends, a solid architecture is crucial for providing stable services.
        The world of software presented through the browser also fascinates me.
        While the web has made tremendous strides in the past, it continues to
        evolve rapidly. For instance, the choice of Next.js to overcome some of
        React’s limitations is a testament to the fast pace of web development.
        In this ever-growing field, I strive to stay current with the latest
        technology trends and best practices.
      </p>

      <p className="mb-3">
        I believe that developers have a responsibility to implement
        requirements accurately and efficiently. We all know the importance of
        tests in enhancing code quality and minimizing errors. This is why I
        frequently utilise methodologies like{" "}
        <span className="italic font-medium">Clean Architecture</span> and{" "}
        <span className="italic font-medium">Domain-Driven Design (DDD)</span>.
        Clean Architecture simplifies testing by managing dependencies in a
        single direction, while DDD enhances the verification of business logic
        through clear domain models. These approaches help me write robust and
        maintainable code.
      </p>
      <p className="mb-3">
        When I’m not coding, I enjoy watching English Premier League (EPL)
        matches. I also love reading novels and self-improvement books.
      </p>
    </motion.section>
  )
}
