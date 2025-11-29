import { forwardRef } from "react";
import { Code2, BarChart3, Briefcase } from "lucide-react";

type AboutProps = {};

export const About = forwardRef<HTMLDivElement, AboutProps>((_props, ref) => {
  const features = [
    {
      Icon: Code2,
      title: "Desenvolvimento Fullstack",
      desc: "React, Django & Python. Criação de aplicações completas, do banco de dados à interface.",
    },
    {
      Icon: BarChart3,
      title: "Engenharia de Dados",
      desc: "BI & Analytics. Dashboards, estudos de tráfego com IA e automação com Apps Script.",
    },
    {
      Icon: Briefcase,
      title: "Atuação Multissetorial",
      desc: "Experiência prática em Governo, Energia, Saúde, Logística e Educação.",
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="w-full bg-neutral-950 text-gray-100 py-16 px-6 lg:px-24 rounded-md"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left column - narrative */}
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
              <span className="block text-white">Soluções Web e</span>
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-500 to-indigo-500">
                Análise de Dados
              </span>
            </h2>

            <p className="text-gray-400 mb-6">
              Com atuação profissional desde 2019 e contato com código desde 2015, desenvolvo sistemas que
              unem interfaces funcionais a dados estratégicos.
            </p>

            <div className="prose max-w-none text-gray-300 leading-relaxed">
              <p>
                Minha caminhada no desenvolvimento começou com foco em interfaces (Frontend React) na
                Secretaria de Segurança Pública e evoluiu para desafios maiores, como a Plataforma Energética
                de Pernambuco e sistemas de logística farmacêutica.
              </p>

              <p>
                Ao longo dessa jornada, percebi que o software precisa gerar inteligência. Por isso, expandi
                minha atuação para o ecossistema de dados. Hoje, na SEDUC e em projetos de engenharia, utilizo
                Python, Django e Looker BI não apenas para criar sites, mas para automatizar processos e gerar
                relatórios que apoiam decisões importantes.
              </p>
            </div>
          </div>

          {/* Right column - feature cards */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white/5 rounded-xl p-5 border border-white/6 hover:bg-white/6 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-linear-to-br from-blue-600/10 to-blue-400/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>

                    <div>
                      <h3 className="font-serif text-lg text-white mb-1">{title}</h3>
                      <p className="text-sm text-gray-300">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer metrics */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-start sm:items-center gap-4">
                <span className="font-serif text-2xl text-blue-400">6+</span>
                <div>
                  <div className="text-sm text-gray-300">Anos de</div>
                  <div className="text-sm text-gray-400">Experiência</div>
                </div>
              </div>

              <div className="flex items-start sm:items-center gap-4">
                <span className="font-serif text-2xl text-blue-400">10+</span>
                <div>
                  <div className="text-sm text-gray-300">Projetos</div>
                  <div className="text-sm text-gray-400">Entregues</div>
                </div>
              </div>

              <div className="flex items-start sm:items-center gap-4">
                <span className="font-serif text-2xl text-blue-400">4</span>
                <div>
                  <div className="text-sm text-gray-300">Setores de</div>
                  <div className="text-sm text-gray-400">Atuação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
