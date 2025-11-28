import { forwardRef } from "react";

export const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="projects"
      className="flex min-h-screen flex-col justify-center px-12 lg:px-24 pt-20"
    >
      <h2 className="font-serif text-5xl mb-8">Meus Projetos</h2>
      <p className="text-gray-400">Aqui vai entrar o scroll horizontal...</p>
    </section>
  );
});

Projects.displayName = "Projects";