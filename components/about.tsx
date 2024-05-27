"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"

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
        I was born and raised in South Korea, where I got my education and
        started my journey as a web developer. An exciting project with Hyundai
        Motor brought me to the UK, and now I happily live and work here as a
        full-stack developer.
      </p>

      <p className="mb-3">
        I&apos;ve been in web programming since 2000, and it&apos;s been amazing
        to see and be part of the evolution of web applications. My career has
        taken me through a variety of projects, from large-scale ERP systems to
        mobile investment apps for startups, with a strong focus on .NET-based
        projects.
      </p>

      <p className="mb-3">
        In my work, I love using{" "}
        <span className="italic font-medium">Clean Architecture</span> and
        <span className="italic font-medium">
          Domain-Driven Design (DDD)
        </span>{" "}
        principles. <span className="italic font-medium">Clean coding</span> and{" "}
        <span className="italic font-medium">
          Test-Driven Development (TDD)
        </span>{" "}
        are very important to me—they help me create reliable and maintainable
        software.
      </p>

      <p className="mb-3">
        When I&apos;m not coding, I enjoy watching English Premier League (EPL)
        matches. I also love attending developer conferences and diving into a
        good book, whether it&apos;s a novel or a self-improvement guide.
      </p>
    </motion.section>
  )
}
