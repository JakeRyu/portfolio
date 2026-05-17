import React from "react"
import { LuCar, LuClapperboard } from "react-icons/lu"
import { TbCurrencyPound } from "react-icons/tb"
import { PiLockersBold, PiRadio } from "react-icons/pi"
import pssImg from "@/public/pension-self-service.png"
import adserveStudioImg from "@/public/adserve-studio.png"
import moenyboxAppImg from "@/public/moneybox-app.png"
import featureFlagsImg from "@/public/feature-flags.png"
import retroBoardImg from "@/public/retro-board.png"
import pledgeServiceImg from "@/public/pledge-service.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
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
    name: "Publications",
    hash: "#publications",
  },
] as const

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Seoul, South Korea",
    chapter: "The apprentice chapter",
    description:
      "Started out working broadly across web development, databases, and Windows servers — gaining breadth before depth. The most memorable delivery was an ERP project for Lotte Duty Free Shop, Korea's largest duty-free retailer, built with ASP.NET, IIS, MS SQL Server, and ActiveX.",
    takeawayLabel: "What I took forward",
    takeaway:
      "breadth across web, databases, and servers — and the confidence that comes from shipping production systems for real clients from day one.",
    icon: React.createElement(LuClapperboard),
    date: "2000",
  },
  {
    title: "Application Architect",
    location: "Hyundai Motor UK",
    chapter: "The foundation chapter",
    description:
      "Eleven years of full-cycle architecture across the UK dealer network, marketing, sales, finance, and import operations — many projects replacing paper-based processes with digital ones. Local stack was .NET; global projects integrated SAP ERP and Oracle CRM. Notable deliveries included a vehicle registration system in collaboration with the DVLA and a mobile inventory app for the import centre, for which I introduced the team's first RESTful API.",
    takeawayLabel: "What I took forward",
    takeaway:
      "a deep instinct for translating business problems into technical solutions, and an early conviction that good software is measured by how it changes the work, not how clever the code is.",
    icon: React.createElement(LuCar),
    date: "2006",
  },
  {
    title: "Software Developer",
    location: "ByBox (Homebased, UK)",
    chapter: "The discipline chapter",
    description:
      "My first role in a microservice-based environment. ByBox runs a nationwide network of electronic lockers where delivery drivers deposit and collect items via mobile. I worked full-stack across distributed services — backend in ASP.NET Web API with NServiceBus for inter-service messaging, and a React + Redux operations dashboard. The team's strict TDD discipline and SpecFlow specifications, written with business analysts before any code, drove every behavioural test end-to-end.",
    takeawayLabel: "What I took forward",
    takeaway:
      "testing as a mindset, not a phase — and the SpecFlow/BDD habit of writing behaviour with business analysts before writing code.",
    icon: React.createElement(PiLockersBold),
    date: "2017",
  },
  {
    title: "Senior Engineer",
    location: "Moneybox (London, UK)",
    chapter: "The cloud and scale chapter",
    description:
      "At Moneybox I built the backend of a regulated UK savings and investment platform on Azure, where every line of code touched customer money. I led batch interest calculation engines for 95-Day Notice Accounts and Cash Lifetime ISAs, handling edge cases like early withdrawals and ISA allowance boundaries. Built on Azure Event Hub and Azure SQL with detailed error logging and recoverable failure handling, deployed through TeamCity and Octopus.",
    takeawayLabel: "What I took forward",
    takeaway:
      "large-volume batch processing, detailed error logging, recoverable failure handling, and a healthy respect for regulated environments where silent failures aren't an option.",
    icon: React.createElement(TbCurrencyPound),
    date: "2018",
  },
  {
    title: "Senior Software Engineer",
    location: "Adserve (Homebased, UK)",
    chapter: "The product engineering chapter",
    description:
      "Full-stack delivery for Adserve Studio, a global supply-side advertising platform. The team's deliberate policy of avoiding third-party component libraries was an unusual constraint — every React component (sortable/filterable data grids, foldable accordions, heatmap grids) had to be built from scratch with hooks, context, and reducers. Backend on ASP.NET Core with Clean Architecture and CQRS, deployed on AWS via Jenkins.",
    takeawayLabel: "What I took forward",
    takeaway:
      "deep practical experience in component design, state management with Context API and reducers, and an appreciation for the trade-offs in choosing build-vs-buy at the component level.",
    icon: React.createElement(PiRadio),
    date: "2020",
  },
  {
    title: "Lead Developer",
    location: "Barnett Waddingham (Amersham, UK)",
    chapter: "The leadership and modernisation chapter",
    description:
      "On the Hyperion team I lead the modernisation of legacy pension administration systems on .NET, React, and Azure — raising engineering standards, driving cloud-native adoption, and delivering business-impacting features end-to-end. I authored the REST API standards now adopted company-wide, drove the move to event-driven architecture via Azure Service Bus, and led adoption of App Configuration, Function Apps, Key Vault, and Feature Flags. Beyond technical work, I mentor the team on modern React patterns and Cypress testing.",
    takeawayLabel: "What this chapter is teaching me",
    takeaway:
      "the patience and precision needed to modernise legacy systems without breaking them — and how to build infrastructure (REST API standards, Feature Toggle Platform, CI/CD pipelines) that other teams across the company can build on.",
    icon: React.createElement(TbCurrencyPound),
    date: "2021",
  },
] as const

export const projectsData = [
  {
    title: "Feature Toggle Platform",
    description:
      "Sole developer. Rolled out feature toggles across the entire pension administration solution, enabling safe and targeted releases.",
    tags: [
      ".NET Framework 4.7.2 – .NET 8",
      "Azure App Configuration",
      "Feature Flags",
    ],
    imageUrl: featureFlagsImg,
  },
  {
    title: "Team Retrospective Board",
    description:
      "A custom retro board I built solo when our Trello hit licence limits. AI-assisted development with Claude Code, applied responsibly.",
    tags: ["Next.js", "Cosmos DB", "React", "Claude Code"],
    imageUrl: retroBoardImg,
  },
  {
    title: "Pension self-service",
    description:
      "A website for pension members to choose their preferred name and access all pension information. I provided the API and rebranded old webpages.",
    tags: ["ASP.NET Web API", "React", "Azure", "Terraform"],
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
  {
    title: "Pledge Service Integration",
    description:
      "Backend lead. Integrated a third-party 'plant a tree' pledge triggered when members opt out of paper communications. Azure Functions with persistent retry.",
    tags: ["Azure Functions", "ASP.NET Core"],
    imageUrl: pledgeServiceImg,
  },
] as const

export const backendSkillsData = [
  "C#",
  ".NET Core",
  ".NET 9 HybridCache",
  "RESTful API",
  "DDD",
  "TDD",
  "BDD / SpecFlow",
  "Clean Architecture",
  "CQRS",
  "MediatR",
  "MassTransit",
  "RabbitMQ",
  "OpenAPI Spec",
  "JsonPatch",
  "Entity Framework",
  "Dapper",
  "linq2db",
  "Fluent Validation",
  "Fluent Migrator",
  "SQL Server",
  "PostgreSQL",
  "RavenDB",
  "DynamoDB",
  "Azure Function",
  "Azure Service Bus",
  "Azure Data Factory",
  "Azure Key Vault",
  "Azure DevOps",
  "GitHub Actions",
  "Octopus Deploy",
  "Feature Flag",
  "Jira",
  "AWS",
  "Terraform",
  "Docker",
  "Git",
  "CI/CD",
  "xUnit",
  "Moq",
  "Serilog & Seq",
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
  "Jest",
  "Testing Library",
  "Cypress",
] as const

export const aiToolsData = [
  "Claude Code",
  "OpenAI Codex",
  "Google Gemini",
  "NotebookLM",
  "GitHub Copilot",
] as const

export const areasOfInterestData = [
  "Kubernetes",
  "Production microservices operations",
] as const

export const publicationsData = [
  {
    title: "Pro ASP.NET MVC 5 (Korean translation)",
    year: "2014",
    summary:
      "First Korean-language ASP.NET MVC 5 book, with the ASP.NET User Group in South Korea.",
  },
  {
    title: "ASP.NET REBOOT — ASP.NET Core series",
    year: "2015",
    summary:
      "Articles introducing ASP.NET Core to a leading South Korean software magazine.",
  },
] as const

export const certificationsData = [
  {
    title: "Award in Pension Essentials",
    year: "2024",
    summary: "UK pensions industry foundational certification.",
  },
  {
    title: "Microsoft Azure Developer Associate",
    year: "2022",
    summary: "Microsoft Azure cloud development certification.",
  },
  {
    title: "AWS Cloud Practitioner",
    year: "2021",
    summary: "Amazon Web Services foundational cloud certification.",
  },
] as const
