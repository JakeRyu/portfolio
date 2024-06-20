import React from "react"
import { LuCar, LuClapperboard } from "react-icons/lu"
import { TbCurrencyPound } from "react-icons/tb"
import { PiLockersBold, PiRadio } from "react-icons/pi"
import pssImg from "@/public/pension-self-service.png"
import adserveStudioImg from "@/public/adserve-studio.png"
import moenyboxAppImg from "@/public/moneybox-app.png"

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
      "Moneybox is a promising fintech startup based in London. The process of developing and deploying new features is very fast, and error handling and feedback implementation are also very quick. This is due to a well-established CI/CD pipeline and a strong agile culture. As a platform developer, I developed modules that process various calculations in batch, such as compound interest calculations. Fortunately, I had the opportunity to participate in the entire process of designing and implementing the new platform, and I felt a great sense of accomplishment in implementing clean architecture.",
    icon: React.createElement(TbCurrencyPound),
    date: "2018",
  },
  {
    title: "Senior Software Engineer",
    location: "Adserve (Homebased, UK)",
    description:
      "Adserve has a long-standing program that automatically schedules radio ads, which has been used by over 300 of the largest brands in European media. When I joined, the team was in the process of redeveloping the Windows application into a new React web application. I led the design of the backend APIs and created React components, such as grids, on the frontend. This role provided me with extensive full-stack experience and a great opportunity to learn new AWS services.",
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
    tags: ["ASP.NET Web API", "React", "Azure", "Terraform", "SQL Server"],
    imageUrl: pssImg,
  },
  {
    title: "Adserve Studio",
    description:
      "A collection of SPAs offers comprehensive audio planning, trafficking, and revenue optimization. I worked as a full-stack developer.",
    tags: ["ASP.NET Web API", "React", "AWS", "PostgreSQL"],
    imageUrl: adserveStudioImg,
  },
  {
    title: "Moneybox App",
    description:
      "Moneybox is a mobile app that simplifies saving and investing. As a platform developer, I created modules for batch processing calculations.",
    tags: ["ASP.NET Web API", "Native App", "Azure", "SQL Server"],
    imageUrl: moenyboxAppImg,
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
  "SQL Server",
  "PostgreSQL",
  "Azure Function",
  "Azure DevOps",
  "Feature Flag",
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
  "SASS",
  "JavaScript",
  "TypeScript",
  "React",
  "Context API",
  "Reducer",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "GraphQL",
  "Apollo",
  "Express",
  "Jest",
  "Testing Libarary",
] as const
