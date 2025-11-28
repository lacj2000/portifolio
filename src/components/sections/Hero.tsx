import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";


// Props opcionais, caso queira passar dados dinâmicos no futuro
interface HeroProps { }

export const Hero = forwardRef<HTMLDivElement, HeroProps>((props, ref) => {
  return (
    <section
      ref={ref}
      id="hero"
      className="flex min-h-screen flex-col justify-center px-12 lg:px-24 pt-20"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">

        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#3b82f612_1px,transparent_1px),linear-gradient(to_bottom,#3b82f612_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="absolute inset-0 bg-background/20" />
      </div>

      <div className="z-10">
        <span className="mb-6 font-mono text-sm uppercase tracking-widest text-blue-500">
          Desenvolvedor Full Stack & Criador de Soluções

        </span>
        <div>



          <h1 className="max-w-4xl font-serif text-6xl font-medium leading-[1.1] md:text-8xl">
            Transfomo ideias em <br />
            <span className="text-blue-500 italic">experiências digitais.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-gray-400 leading-relaxed">
            Transformo ideias em experiências prontas para o mundo real. <br />
            Cada linha de código é uma oportunidade de criar algo extraordinário.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <button className="group flex cursor-pointer items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-medium text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              Ver Projetos
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </button>

            <button className="cursor-pointer text-sm text-gray-400 hover:text-white transition-colors">
              Sobre mim &gt;
            </button>
          </div>

          {/* Indicador de Scroll */}
          <div className="absolute bottom-[50%] right-24 hidden flex-col items-center gap-2 md:flex">
            <span className="rotate-90 text-xs tracking-widest text-gray-500"> Luiz Junior {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero"; // Boa prática para debugging