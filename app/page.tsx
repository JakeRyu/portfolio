import About from "@/components/about"
import Certifications from "@/components/certifications"
import Experience from "@/components/experience"
import Intro from "@/components/intro"
import Projects from "@/components/projects"
import Publications from "@/components/publications"
import SectionDivider from "@/components/section-divider"
import Skills from "@/components/skills"
import SocialLinks from "@/components/social-links"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Publications />
      <Certifications />

      <section className="mb-20 text-center px-4">
        <p className="mb-6 italic text-gray-700 dark:text-white/75">
          Thanks for reading — let&apos;s connect.
        </p>
        <SocialLinks variant="outro" />
      </section>
    </main>
  )
}
