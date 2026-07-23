import SectionHeader from '@/components/SectionHeader';

const linkedinReviews = [
  {
    id: 1,
    src: "/recomendacao-iuna.png",
    name: "Iuna Aikeuara",
    role: "Analista de Processos",
  },
  {
    id: 2,
    src: "/recomendacao-taiana.png",
    name: "Taiana Santana",
    role: "Proprietária no Consciência Café",
  },
  {
    id: 3,
    src: "/recomendacao-fabio.png",
    name: "Fabio Carneiro",
    role: "Co-fundador e Chief AI Officer",
  },
  {
    id: 4,
    src: "/recomendacao-emanuel.png",
    name: "Emanuel Maia",
    role: "Videomaker, Fotógrafo e Designer Gráfico",
  },
  {
    id: 5,
    src: "/recomendacao-simone.png",
    name: "Simone Zolet",
    role: "Líder em RH e Desenvolvimento de Líderes",
  },
  {
    id: 6,
    src: "/recomendacao-jonathan.png",
    name: "Jonathan Bretas",
    role: "Especialista em Mídia Paga e Performance",
  },
  {
    id: 7,
    src: "/recomendacao-bruna.png",
    name: "Bruna Sibilio",
    role: "Empreendedora / Parceira",
  },
];

export default function LinkedinReviews() {
  return (
    <section id="recomendacoes-linkedin" className="py-20 bg-white px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          subtitle="Recomendações no LinkedIn"
          title="Reconhecimento profissional"
          description="Avaliações escritas por colegas, parceiros e clientes que acompanharam de perto o impacto do meu trabalho."
          icon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          }
        />

        <div className="columns-1 lg:columns-2 gap-8 space-y-8">
          {linkedinReviews.map((review) => (
            <div
              key={review.id}
              className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-sm border border-zinc-200 bg-zinc-50 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <img
                src={review.src}
                alt={`Recomendação de ${review.name}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center px-4">
          <p className="text-zinc-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Todas as recomendações acima são relatos de clientes e parceiros reais. Você pode conferir estas e outras avaliações{' '}
            <a
              href="https://www.linkedin.com/in/bruno-mendes-bueno-944834217/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 font-semibold hover:text-amber-700 hover:underline underline-offset-4 transition-colors"
            >
              diretamente no meu perfil do LinkedIn
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
