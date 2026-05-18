"use client"

import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import { HiDownload } from "react-icons/hi"
import { useSectionInView } from "@/lib/hooks"
import SocialLinks from "@/components/social-links"
import profileImg from "@/public/jake.jpeg"

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5)

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profileImg}
              alt="Jake portrait"
              width="256"
              height="256"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="fond-bold">
          Hello! I’m Jake, a Lead Developer at a UK financial services
          consultancy.
        </p>
        <p>
          {" "}
          I move comfortably between .NET backend architectures with Clean
          Architecture and DDD, and frontend work with React and Next.js.
        </p>
      </motion.h1>

      <SocialLinks variant="hero" />
    </section>
  )
}
