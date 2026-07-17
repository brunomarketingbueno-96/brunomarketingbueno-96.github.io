import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import CallToAction from '@/components/CallToAction';

const pillars = [
  {
    id: 0,
    title: "1. Diagnóstico e Alinhamento",
    subtitle: "Entender antes de agir.",
    content: "Utilizo as metodologias SMART e OKR para alinhar metas. Aplico o Princípio de Pareto (focando nos 20% de esforços que geram 80% dos resultados) e o modelo MVP para testes rápidos, sempre com base em Neurociência e na profunda Experiência do Usuário (UX).",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 1,
    title: "2. Integração de Áreas",
    subtitle: "O marketing não joga sozinho.",
    content: "Trabalho conectando o marketing ao seu time comercial. Otimizamos CRM, criamos funis de vendas, roteiros de atendimento e implementamos ferramentas de multiatendimento para garantir que o lead gerado seja realmente convertido em cliente e não se perca no processo.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  },
  {
    id: 2,
    title: "3. Metodologia Ágil",
    subtitle: "Organização que gera velocidade.",
    content: "Gerenciamento completo das tarefas e da equipe utilizando metodologias ágeis e ferramentas de ponta como Trello e Notion. Tudo estruturado com cronogramas claros e transparentes para que você saiba exatamente o que está sendo executado e quando será entregue.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "4. Automações, IA e Escala",
    subtitle: "Crescimento sem perder a essência.",
    content: "Implementação estratégica de Chatbots, disparos em massa e recuperação de carrinhos abandonados para ganhar escala e agilidade. O objetivo é automatizar processos repetitivos, mantendo um atendimento altamente persuasivo e uma experiência de usuário impecável.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export default function Methodology() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="metodologia" className="py-20 px-6 md:px-20 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          subtitle="O Método"
          title="Marketing não é achismo, é método."
          description="Os 4 pilares estratégicos por trás de negócios que escalam com previsibilidade, organização e lucro."
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          <div className="w-full lg:w-5/12 flex flex-col gap-3">
            {pillars.map((pillar, index) => (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(index)}
                className={`text-left px-5 py-4 rounded-2xl transition-all duration-300 border-2 ${activePillar === index
                  ? "bg-white border-amber-600 shadow-sm"
                  : "bg-transparent border-transparent hover:bg-white/60 hover:border-zinc-200"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className={`font-bold text-lg mb-1 ${activePillar === index ? "text-amber-700" : "text-zinc-800"}`}>
                      {pillar.title}
                    </h4>
                    <p className={`text-sm ${activePillar === index ? "text-zinc-600" : "text-zinc-500"}`}>
                      {pillar.subtitle}
                    </p>
                  </div>

                  <div className={`hidden lg:block transition-transform duration-300 ${activePillar === index ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}>
                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="w-full lg:w-7/12 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-zinc-200 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -top-12 -right-12 text-zinc-50 opacity-50 transform scale-150 pointer-events-none">
              {pillars[activePillar].icon}
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                {pillars[activePillar].icon}
              </div>
              <h4 className="text-2xl font-bold text-zinc-800 mb-4">
                {pillars[activePillar].title}
              </h4>
              <p className="text-zinc-600 text-lg leading-relaxed">
                {pillars[activePillar].content}
              </p>
            </div>
          </div>
        </div>

        <CallToAction
          buttonText="Quero aplicar esse método no meu negócio"
          helperText="Fale diretamente com Bruno pelo WhatsApp."
          whatsappMessage="Olá Bruno, estava vendo o seu site e gostaria de aplicar o seu método de 4 pilares no meu negócio!"
        />

      </div>
    </section>
  );
}
