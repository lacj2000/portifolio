import { forwardRef } from "react";
import { Contact } from "./Contact";

export const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section 
      ref={ref}
      id="About" 
      className="min-h-screen flex flex-col items-center justify-center border-t border-white/5 bg-black/20"
    >
      <h2 className="font-serif text-5xl mb-8">Sobre</h2>
      <p className="text-gray-400">Aqui vai entrar o scroll horizontal...</p>
    </section>
  );
});

About.displayName = "About";