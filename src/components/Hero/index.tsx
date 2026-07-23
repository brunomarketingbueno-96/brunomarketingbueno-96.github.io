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
            Estratégia, tecnologia e performance para escalar o seu negócio.
          </h1>

          <p className="text-zinc-600 text-base leading-relaxed mb-6">
            Trabalho com projetos focados em vendas de produtos físicos, serviços, infoprodutos, cursos e mentorias. Com minha equipe de direção de arte e tecnologia, entregamos soluções integradas. Os valores variam conforme cada projeto. Marcamos uma reunião para entender seu caso e propor a solução certa.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#servicos"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm transition-colors duration-200"
          >
            Solicitar Diagnóstico Gratuito
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
        <div className="relative rounded-sm overflow-hidden shadow-md">
          <img
            src="bru.png"
            alt="Bruno Bueno"
            className="w-72 sm:w-80 lg:w-92 h-auto object-cover"
          />


        </div>
      </div>
    </section>
  );
}
