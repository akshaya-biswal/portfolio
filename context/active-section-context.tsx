import React, { createContext, useState } from "react";
import { TActiveSection, TSectionName } from "@/lib/types";

export const ActiveSectionContext = createContext<TActiveSection | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<TSectionName>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
