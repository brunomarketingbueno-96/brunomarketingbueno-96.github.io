
import Logo from '../Logo'; // Importe o componente Logo que criamos anteriormente

export default function Footer() {
  // Pega o ano atual automaticamente para o copyright não ficar defasado
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 pt-16 pb-8 px-6 md:px-20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Coluna 1: Logo e Descrição */}
          <div className="flex flex-col items-center md:items-start">
            {/* Reutilizando o Logo com a prop isWhite para o fundo escuro */}
            <Logo isWhite />
            <p className="mt-4 text-zinc-400 text-sm text-center md:text-left max-w-xs leading-relaxed">
              Estratégia, integração e escala para negócios que buscam crescimento previsível através de metodologias validadas.
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Navegação</h4>
            <nav className="flex flex-col space-y-3 text-center md:text-left">
              <a href="#hero" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">Início</a>
              <a href="#servicos" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">Serviços</a>
              <a href="#metodologia" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">A Metodologia</a>
              <a href="#resultados" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">Resultados</a>
              <a href="#sobre" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">Sobre mim</a>
              <a href="#faq" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">Dúvidas (FAQ)</a>
            </nav>
          </div>

          {/* Coluna 3: Redes e Contato */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Conecte-se</h4>

            <a
              href="https://www.linkedin.com/in/bruno-mendes-bueno-944834217/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-zinc-400 hover:text-amber-500 transition-colors text-sm mb-4 group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn Profissional
            </a>

            <a
              href="mailto:bruno.online.bueno@gmail.com"
              className="flex items-center text-zinc-400 hover:text-amber-500 transition-colors text-sm group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              bruno.online.bueno@gmail.com
            </a>
          </div>

        </div>

        {/* Linha de Copyright */}
        <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-xs text-center md:text-left mb-2 md:mb-0">
            © {currentYear} Bruno Bueno. Todos os direitos reservados.
          </p>
          <p className="text-zinc-600 text-xs text-center md:text-right">
            Desenvolvido com foco em conversão e performance.
          </p>
        </div>

      </div>
    </footer>
  );
}