import React from 'react';

export default function About() {
  const whatsappNumber = "5545991566359";
  const whatsappMessage = encodeURIComponent("Olá Bruno, conheci um pouco da sua história no site e gostaria de bater um papo sobre o meu negócio.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="sobre" className="py-24 bg-zinc-50 px-6 md:px-20 border-t border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Coluna da Imagem (Assimétrica com blocos de cor) */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            {/* Bloco de fundo decorativo em Amber */}
            <div className="absolute top-6 -left-6 w-full h-full bg-amber-600 rounded-2xl transform -rotate-3 opacity-20 hidden md:block"></div>
            {/* Bloco de fundo decorativo pontilhado (opcional, feito com CSS) */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[radial-gradient(#d4d4d8_2px,transparent_2px)] [background-size:16px_16px] hidden md:block"></div>

            <div className="relative z-10 w-full max-w-md rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-zinc-200 aspect-[4/5]">
              {/* Substitua o src pela foto do Bruno na mesa do portfólio */}
              <img
                src="/bruno-mesa.jpg"
                alt="Bruno Bueno trabalhando"
                className="w-full h-full object-cover saturate-[0.85] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-amber-900/10 mix-blend-soft-light pointer-events-none"></div>
            </div>
          </div>

          {/* Coluna de Texto e Narrativa */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="text-amber-600 font-bold tracking-wide uppercase text-sm mb-3 flex items-center">
              <span className="w-8 h-[2px] bg-amber-600 mr-3"></span>
              Muito prazer, Bruno Bueno
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-800 leading-tight mb-6">
              Estratégia guiada por <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-500">resultados</span> e propósito.
            </h3>

            <div className="text-zinc-600 text-base md:text-lg leading-relaxed space-y-4 mb-8">
              <p>
                Natural de Caxias do Sul e residente em Blumenau, dediquei mais de uma década da minha vida para simplificar o complexo no marketing e nas vendas. Minha missão é integrar estratégia, operação e gestão com agilidade.
              </p>
              <p>
                Minha jornada é baseada na filosofia japonesa do <strong>Ikigai</strong>: a busca constante por evolução profissional, emocional e espiritual. Para mim, o sucesso de um negócio vai além do faturamento; trata-se de retribuir para a sociedade e construir bases sólidas.
              </p>
            </div>

            {/* Marcos (Milestones) Escaneáveis */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-zinc-800 font-bold">10+ Anos de Mercado</h4>
                  <p className="text-sm text-zinc-500 mt-1">De pequenas a grandes corporações e startups.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-zinc-800 font-bold">Premiação Internacional</h4>
                  <p className="text-sm text-zinc-500 mt-1">Homenageado em Cancún por recorde em vendas diretas.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-zinc-800 font-bold">Inovação e Startups</h4>
                  <p className="text-sm text-zinc-500 mt-1">Projeto finalista e destaque no Shark Tank Brasil.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-zinc-800 font-bold">Foco no Ikigai</h4>
                  <p className="text-sm text-zinc-500 mt-1">Valores sólidos: honestidade, família e crescimento.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-zinc-800 hover:bg-zinc-900 rounded-xl shadow-md transition-colors duration-200"
              >
                Agendar um bate-papo
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}