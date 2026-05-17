"use client"

import React from "react"
import SectionHeading from "./section-heading"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { experiencesData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import { useTheme } from "@/context/theme-context"

export default function Experience() {
  const { ref } = useSectionInView("Experience")
  const { theme } = useTheme()

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <p className="mb-12 px-4 max-w-[40rem] mx-auto text-center italic text-gray-700 dark:text-white/75">
        My career has been a sequence of deliberate steps — each role chosen to
        deepen something the previous one couldn&apos;t fully give me. From
        early full-stack roots in Seoul, to global-scale enterprise systems at
        Hyundai, to test-driven microservices at ByBox, to regulated cloud
        fintech at Moneybox, to React-first product engineering at Adserve, to
        modernising legacy systems at Barnett Waddingham — every move added a
        layer I now carry into the next.
      </p>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              {item.chapter && (
                <p className="!mt-0 mb-5 pb-3 border-b border-gray-300 dark:border-white/20 italic text-gray-500 dark:text-white/60">
                  {item.chapter}
                </p>
              )}
              <h3 className="font-semibold capitalize mt-3">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
              {item.takeaway && (
                <p className="!mt-3 !font-normal text-gray-700 dark:text-white/75">
                  <span className="font-semibold">{item.takeawayLabel}:</span>{" "}
                  {item.takeaway}
                </p>
              )}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
