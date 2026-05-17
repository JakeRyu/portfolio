"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { publicationsData } from "@/lib/data"

export default function Publications() {
  const { ref } = useSectionInView("Publications")

  return (
    <section
      id="publications"
      ref={ref}
      className="mb-28 w-[min(100%,53rem)] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Publications</SectionHeading>
      <ul className="flex flex-col gap-4">
        {publicationsData.map((pub, index) => (
          <motion.li
            key={index}
            className="bg-gray-100 border border-black/5 rounded-lg p-5 text-left dark:bg-white/10 dark:text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * index }}
          >
            <h3 className="text-lg font-semibold">{pub.title}</h3>
            <p className="text-sm text-gray-700 dark:text-white/70 mt-1">
              {pub.year} — {pub.summary}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
