"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"

function calculateYears(startYear: number): number {
  const currentYear = new Date().getFullYear()
  return currentYear - startYear
}

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My name is Jake Ryu. I was born and raised in South Korea, where I began
        my journey as a software developer. With over 20 years of experience as
        a software developer, I have honed my skills and expertise across
        various technologies and projects. I later moved to the UK to help build
        the local systems for{" "}
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
        </a>{" "}
        (part of Howden), a UK professional services consultancy specialising
        in risk, pensions, investment, and insurance.
      </p>

      <p className="mb-3">
        I value clean code, rigorous testing, and pragmatic modernisation —
        replacing slower manual processes with faster, more reliable software,
        and shipping it in a way the business can actually trust. Using{" "}
        <span className="italic font-medium">Clean Architecture</span> and{" "}
        <span className="italic font-medium">Domain-Driven Design (DDD)</span>,
        I manage dependencies cleanly and verify business logic through clear
        domain models. What I aim to leave behind is not just shipped features,
        but patterns, standards, and infrastructure that other teams can build
        on.
      </p>

      <p className="mb-3">
        When I&apos;m not coding, I enjoy long walks with audiobooks — usually
        on investment, self-development, or fiction — and spend weekends working
        on personal projects with my mix of AI coding assistants. I also love
        travelling with my family and capturing those moments through my
        cameras.
      </p>
    </motion.section>
  )
}
