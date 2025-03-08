"use client";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { Project } from "./project";
import { useSectionInView } from "@/lib/hooks";
import React from "react";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25);
  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-8 max-w-50rem text-center"
    >
      <SectionHeading> My Projects </SectionHeading>
      <div className="flex flex-col gap-8 ">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
