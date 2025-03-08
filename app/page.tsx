"use client";
import About from "@/components/about";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main
      id="home"
      className="flex flex-col items-center justify-center scroll-mt-[100rem]"
    >
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </main>
  );
}
