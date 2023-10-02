import { useActiveSectionContext } from "@/context/active-section-context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TSectionName } from "./types";

export default function useSectionInView(sectionName: TSectionName) {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection]);

  return ref;
}
