"use client"

import React from "react"
import { motion } from "framer-motion"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { FaGithubSquare } from "react-icons/fa"

type SocialLinksProps = {
  variant: "hero" | "outro"
}

export default function SocialLinks({ variant }: SocialLinksProps) {
  const motionProps =
    variant === "hero"
      ? {
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
        }
      : {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
        }

  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      {...motionProps}
    >
      {variant === "outro" && (
        <a
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href="https://www.linkedin.com/in/jakeryu/"
          target="_blank"
        >
          Let&apos;s connect on LinkedIn{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </a>
      )}

      <a
        className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
        href="https://blog.jakeryu.com/blog"
        target="_blank"
      >
        {variant === "hero" ? "View my blog" : "Read my blog"}{" "}
        <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
      </a>

      {variant === "hero" && (
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/jakeryu/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      )}

      <a
        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="https://github.com/jakeryu"
        target="_blank"
      >
        <FaGithubSquare />
      </a>
    </motion.div>
  )
}
