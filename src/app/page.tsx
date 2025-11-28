import SectionWrapper from "@/components/SectionWrapper";
import Sidebar from "@/components/Sidebar";
import { ArrowRight } from "lucide-react";

const Home = () => {
    return (
        <main className="flex h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 bg-slate-900 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth">

                {/* home */}
                <SectionWrapper id="home">
                    <div className="flex flex-col justify-center h-[80vh]">
                        <span className="text-blue-500 font-medium tracking-widest mb-4">PORTFÓLIO 2025</span>

                        {/* Aqui entra a fonte Serifada (Playfair) */}
                        <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] text-white mb-8">
                            Criando <br />
                            <span className="text-slate-500 italic">experiências</span> <br />
                            digitais únicas.
                        </h1>

                        <p className="text-slate-400 max-w-xl text-lg mb-10">
                            Transformo ideias complexas em interfaces elegantes e funcionais.
                            Focado em React, Next.js e UI Design.
                        </p>

                        <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition flex items-center gap-2 w-fit">
                            Ver Projetos <ArrowRight size={20} />
                        </button>
                    </div>
                </SectionWrapper>

                <SectionWrapper id="sobre" className="bg-[#080808]">
                    <h2 className="font-serif text-5xl mb-10 text-white">Sobre Mim</h2>

                </SectionWrapper>

                <SectionWrapper id="projetos" className="bg-[#080808]">
                    <h2 className="font-serif text-5xl mb-10 text-white">Projetos Selecionados</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Cards de teste */}
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="aspect-video bg-slate-900 rounded-xl border border-white/5 p-6 hover:border-blue-500/50 transition duration-300">
                                <h3 className="text-xl font-bold mb-2">Projeto {item}</h3>
                                <p className="text-slate-400">Descrição curta do projeto incrível que você fez.</p>
                            </div>
                        ))}
                    </div>
                </SectionWrapper>

                <SectionWrapper id="skills" className="bg-[#080808]">
                    <h2 className="font-serif text-5xl mb-10 text-white">Sobre Mim</h2>

                </SectionWrapper>

                <SectionWrapper id="contato" className="bg-[#080808]">
                    <h2 className="font-serif text-5xl mb-10 text-white">Sobre Mim</h2>

                </SectionWrapper>
            </div>
        </main>
    )
}


export default Home;