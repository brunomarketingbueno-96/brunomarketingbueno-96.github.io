export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-stretch mt-6 mb-6 px-6 lg:px-20 gap-8 lg:gap-12"
    >
      {/* Coluna do Texto */}
      <div className="flex flex-col justify-center py-4 max-w-2xl w-full text-center lg:text-left">
        <div>
          <h2 className="text-amber-600 font-bold tracking-wide uppercase text-sm mb-2">
            Gestor de Marketing
          </h2>

          <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-800 leading-tight mb-4">
            Estratégia e integração para o crescimento do seu negócio
          </h1>

          <p className="text-zinc-600 text-base leading-relaxed mb-6">
            Direto de Blumenau para o mundo. Sou apaixonado por ajudar empresas
            a crescer de maneira estratégica e integrada, atuando com foco em
            Marketing Enterprise, ABM, E-commerce e Consultoria Estratégica.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#servicos"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm transition-colors duration-200"
          >
            Solicitar serviços
          </a>

          <a
            href="#sobre"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-zinc-800 bg-transparent border border-zinc-300 hover:bg-zinc-100 rounded-lg transition-colors duration-200"
          >
            Ver portfólio
          </a>
        </div>
      </div>

      {/* Coluna da Imagem */}
      <div className="flex-shrink-0 flex justify-center items-center">
        <div className="relative bg-amber-50/90 rounded-2xl overflow-hidden shadow-md">
          <img
            src="bruno-bueno-profile.png"
            alt="Bruno Bueno"
            className="w-72 sm:w-80 lg:w-92 -ml-1 h-auto object-cover saturate-75 contrast-90 brightness-105"
          />

          <div className="absolute inset-0 bg-blue-600/20 mix-blend-soft-light pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
