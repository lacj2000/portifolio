import { forwardRef } from "react";
import { Contact } from "./Contact";
import { About } from "./About";

export const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section 
      ref={ref}
      id="Skills" 
      className="min-h-screen flex flex-col items-center justify-center border-t border-white/5 bg-black/20"
    >
      <h2 className="font-serif text-5xl mb-8">Skills</h2>
      <p className="text-gray-400">Aqui vai entrar o scroll horizontal...</p>
    </section>
  );
});

Skills.displayName = "Skills";