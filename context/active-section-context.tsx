"use client";
import { sectionName } from "@/lib/type";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ActiveSectionContextType = {
  active: sectionName;
  setActive: Dispatch<SetStateAction<sectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState<sectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{ active, setActive, timeOfLastClick, setTimeOfLastClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default ActiveSectionContextProvider;

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}
