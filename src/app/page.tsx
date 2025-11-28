"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation"; 
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const totalSections = 5;

  const scrollToSection = (index: number) => {
    setActiveSection(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveSection((prev) => Math.min(prev + 1, totalSections - 1));
      } else if (e.key === "ArrowLeft") {
        setActiveSection((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background text-foreground selection:bg-primary/30 pl-20">

      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-[0.05]" />
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
      </div>

      <motion.main
        className="relative z-10 flex h-full"
        animate={{ x: `-${activeSection * 100}vw` }}
        transition={{ type: "spring", stiffness: 50, damping: 20, mass: 0.8 }}
        style={{ width: `${totalSections * 100}vw` }}
      >
        <SectionWrapper><Hero /></SectionWrapper>
        <SectionWrapper><About /></SectionWrapper>
        <SectionWrapper><Projects /></SectionWrapper>
        <SectionWrapper><Skills /></SectionWrapper>
        <SectionWrapper><Contact /></SectionWrapper>
      </motion.main>
    </div>
  );
}

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <section className="h-screen w-screen shrink-0 overflow-hidden flex items-center justify-baseline relative">
    {children}
  </section>
);