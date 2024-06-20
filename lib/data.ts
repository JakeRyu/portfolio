import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaPoundSign, FaReact } from "react-icons/fa"
import {
  LuCar,
  LuClapperboard,
  LuGraduationCap,
  LuPiggyBank,
} from "react-icons/lu"
import { LiaPoundSignSolid } from "react-icons/lia"
import { TbCurrencyPound } from "react-icons/tb"
import {
  PiLockersBold,
  PiLockersLight,
  PiLockersThin,
  PiRadio,
} from "react-icons/pi"
import corpcommentImg from "@/public/corpcomment.png"
import pssImg from "@/public/pension-self-service.png"
import rmtdevImg from "@/public/rmtdev.png"
import wordanalyticsImg from "@/public/wordanalytics.png"
import { BsCurrencyPound } from "react-icons/bs"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Seoul, South Korea",
    description:
      "I began my career as a web developer, participating in various projects and gaining extensive knowledge in web development, databases, and Windows servers. One of the most memorable projects was the ERP project for the largest duty-free shop in Korea, Lotte Duty Free Shop. I primarily used technologies such as ASP.NET, IIS, MS SQL Server, and ActiveX.",
    icon: React.createElement(LuClapperboard),
    date: "2000",
  },
  {
    title: "Application Architect",
    location: "Hyundai Motor UK",
    description:
      "I worked at Hyundai Motor UK head office for 11 years, where I was involved in both local systems and global projects. During that time, I worked on numerous projects, including developing a vehicle registration system in collaboration with the DVLA. For the first time, I introduced a RESTful API for the import center inventory management mobile project. Local projects were based on .NET, while global projects involved SAP ERP and Oracle CRM. This experience provided me with a deep understanding of system integration and architecture.",
    icon: React.createElement(LuCar),
    date: "2006",
  },
  {
    title: "Software Developer",
    location: "ByBox (Homebased, UK)",
    description:
      "I became a full-stack developer at ByBox, where I started using React. I developed solutions that brought innovation to the logistics system. This involved managing a network of electric cabinets nationwide, where delivery drivers use smartphones to deposit or retrieve items from the cabinets. Most importantly, the developers were truly dedicated to testing. I learned a lot about TDD (Test-Driven Development) and BDD (Behavior-Driven Development), for which I am very grateful.",
    icon: React.createElement(PiLockersBold),
    date: "2017",
  },
  {
    title: "Senior Engineer",
    location: "Moneybox (London, UK)",
    description:
      "Moneybox is a promising fintech startup based in London. The process of developing and deploying new features is very fast, and error handling and feedback implementation are also very quick. This is due to a well-established CI/CD pipeline and a strong agile culture. As a platform developer, I developed modules that process various calculations in batch, such as interest calculations. Fortunately, I had the opportunity to participate in the entire process of designing and implementing the new platform, and I felt a great sense of accomplishment in implementing clean architecture.",
    icon: React.createElement(TbCurrencyPound),
    date: "2018",
  },
  {
    title: "Senior Software Engineer",
    location: "Adserve (Homebased, UK)",
    description:
      "Adserve has a long-standing program that automatically schedules radio ads, which has been used by many radio stations across the UK. When I joined, the team was in the process of redeveloping the Windows application into a new React web application. I led the design of the backend APIs and created React components, such as grids, on the frontend. This role provided me with extensive full-stack experience and a great opportunity to learn new AWS services.",
    icon: React.createElement(PiRadio),
    date: "2020",
  },
  {
    title: "Lead Developer",
    location: "Barnett Waddingham (London, UK)",
    description:
      "Barnett Waddingham is a comprehensive financial services provider that specializes in pensions and financial risk management for businesses. I lead the design and implementation of APIs. We are actively adopting Azure services, with Feature Flags being a notable example. Additionally, I am working to establish a culture of rigorous testing and thorough API documentation.",
    icon: React.createElement(TbCurrencyPound),
    date: "2021",
  },
] as const

export const projectsData = [
  {
    title: "Pension self-service",
    description:
      "A website for pension members to choose their preferred name and access all pension information. I provided the API and rebranded old webpages.",
    tags: ["ASP.NET Web API", "React", "Azure", "Terraform"],
    imageUrl: pssImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const

export const backendSkillsData = [
  "C#",
  ".NET",
  "ASP.NET",
  "RESTful API",
  "Fluent Validation",
  "CQRS",
  "MediatR",
  "OpenAPI Spec",
  "Entity Framework",
  "Dapper",
  "linq2db",
  "SQL",
  "SQL Server",
  "Azure Function",
  "Azure Feature Toggle",
  "Azure DevOps",
  "Jira",
  "AWS",
  "Terraform",
  "Docker",
  "Git",
  "CI/CD",
  "xUnit",
  "Moq",
] as const

export const frontendkSkillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Context API",
  "Reducer",
  "Next.js",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Jest",
  "Testing Libarary",
] as const
