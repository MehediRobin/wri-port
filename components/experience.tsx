import { experiencesData } from "@/lib/data";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import React from "react";

function Experience() {
  const { ref } = useSectionInView("Experience", 0.25);
  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-28 mb-20 flex flex-col justify-center items-center"
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, i) => (
          <React.Fragment key={i}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "2rem",
                borderRadius: "20px",
              }}
              contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
              date={item.date}
              icon={item.icon}
              iconStyle={{ background: "white", fontSize: "1.5rem" }}
            >
              <h3 className="text-lg font-bold mb-2">{item.name}</h3>
              <h3> {item.title}</h3>
              <p>{item.location}</p>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
