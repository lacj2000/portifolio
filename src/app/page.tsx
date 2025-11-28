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

  // Array ordenado de refs (deve bater com a ordem do menu)
  const sections = [heroRef, aboutRef, projectsRef, skillsRef, contactRef];

  // 2. Estado numérico
  const [activeSection, setActiveSection] = useState(0);

  // 3. Função de Scroll baseada em Index
  const scrollToSection = (index: number) => {
    setActiveSection(index);
    const targetRef = sections[index];

    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 pl-20">

      {/* Nova Navigation */}
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Background Patterns */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-[0.05]" />
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
      </div>

      <main className="relative z-10">
        {/* Index 0: Hero */}
        <Hero ref={heroRef} />

        {/* Index 1: About (Placeholder) */}
        <About ref={aboutRef} />
        
        {/* Index 2: Projects */}
        <Projects ref={projectsRef} />

        {/* Index 3: Skills (Placeholder) */}
        <Skills ref={skillsRef} />

        {/* Index 4: Contact (Placeholder) */}
        <Contact ref={contactRef} />
      </main>
    </div>
  );
}