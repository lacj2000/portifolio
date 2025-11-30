import { forwardRef } from "react";

export const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="Skills"
      className="flex min-h-screen flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-24 pt-16 md:pt-20"
    >
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8">Skills</h2>
      <p className="text-sm sm:text-base text-gray-400">Aqui vai entrar o scroll horizontal...</p>
    </section>
  );
});

Skills.displayName = "Skills";