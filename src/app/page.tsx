"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation"; // Novo componente
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";


export default function Home() {
  // 1. Refs para todas as seções
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState(0);

  const scrollToSection = (index: number) => {
    setActiveSection(index);
  };


  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 pl-20">

      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-[0.05]" />
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
      </div>

      <motion.main
        className="relative z-10 flex w-[500vw]" // 5 seções = 500vw
        animate={{ x: `-${activeSection * 100}vw` }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
      >
        <section className="w-screen h-screen shrink-0">
          <Hero />
        </section>

        <section className="w-screen h-screen shrink-0">
          <About />
        </section>

        <section className="w-screen h-screen shrink-0">
          <Projects />
        </section>

        <section className="w-screen h-screen shrink-0">
          <Skills />
        </section>

        <section className="w-screen h-screen shrink-0">
          <Contact />
        </section>
      </motion.main>

    </div>
  );
}