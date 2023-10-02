"use client";

import useSectionInView from "@/lib/hooks";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  const ref = useSectionInView("Experience");

  return (
    <>
      <section
        className="scroll-mt-28 mb-28 sm:mb-40"
        id="experience"
        ref={ref}
      >
        <SectionHeading>My experience</SectionHeading>
        <VerticalTimeline>
          {experiencesData.map((experience, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
              >
                <h3 className="font-semibold capitalize">{experience.title}</h3>
                <p className="font-normal !mt-0">{experience.location}</p>
                <p className="!mt-1 !font-normal text-gray-700">
                  {experience.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </section>
    </>
  );
}
