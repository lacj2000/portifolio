"use client";

import { useRef, useState } from "react";
import { Navigation } from "@/components/layout/Navigation"; // Novo componente
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <main className="relative z-10">
        {/* Index 0: Hero */}
        <Hero ref={heroRef} />

        {/* Index 1: About (Placeholder) */}
        <section ref={aboutRef} className="min-h-screen flex items-center justify-center border-t border-border/10">
          <h2 className="text-4xl font-serif text-muted-foreground">Sobre Mim</h2>
        </section>

        {/* Index 2: Projects */}
        <Projects ref={projectsRef} />

        {/* Index 3: Skills (Placeholder) */}
        <section ref={skillsRef} className="min-h-screen flex items-center justify-center border-t border-border/10">
          <h2 className="text-4xl font-serif text-muted-foreground">Skills</h2>
        </section>

        {/* Index 4: Contact (Placeholder) */}
        <section ref={contactRef} className="min-h-screen flex items-center justify-center border-t border-border/10">
          <h2 className="text-4xl font-serif text-muted-foreground">Contato</h2>
        </section>
      </main>
    </div>
  );
}