
export default function CTA() {
  const whatsappNumber = "5545991566359";
  const whatsappMessage = encodeURIComponent("Olá Bruno, estou pronto para parar de perder vendas. Gostaria de agendar um diagnóstico estratégico para a minha empresa.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contato" className="relative py-24 bg-zinc-900 px-6 md:px-20 overflow-hidden">

      {/* Efeitos de iluminação de fundo para dar um tom premium */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">

        <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">
          O próximo passo
        </h2>

        <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Pronto para parar de perder vendas e <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">começar a escalar?</span>
        </h3>

        <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
          Como atuo de forma aprofundada por projetos focados em resultados reais, minha disponibilidade de agenda é restrita. Vamos agendar um diagnóstico estratégico da sua empresa. Clique abaixo e me chame no WhatsApp.
        </p>

        {/* Botão Gigante de CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          // O text-zinc-900 no botão ambar gera o melhor contraste possível no dark mode
          className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-lg font-bold text-zinc-900 bg-amber-500 hover:bg-amber-400 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all duration-300 hover:-translate-y-1"
        >
          {/* Ícone do WhatsApp com animate-pulse */}
          <svg
            className="w-7 h-7 mr-3 animate-pulse text-zinc-900"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Agendar Diagnóstico Estratégico
        </a>

        {/* Info extra de segurança */}
        <div className="mt-8 flex items-center justify-center space-x-2 text-zinc-500 text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>Suas informações estão seguras. O contato é direto comigo.</span>
        </div>

      </div>
    </section>
  );
}