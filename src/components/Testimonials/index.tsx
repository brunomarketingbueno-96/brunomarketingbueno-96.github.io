// Array com os dados dos depoimentos, contendo os novos vídeos e nomes (usados apenas no title)
const testimonials = [
  {
    id: 1,
    videoId: "SPsZ6tmrjYo",
    name: "Victor e Raquel",
  },
  {
    id: 2,
    videoId: "YTAGG-KUqKE",
    name: "Sarah",
  },
  {
    id: 3,
    videoId: "_l8_pi3qO60",
    name: "Samia",
  },
  {
    id: 4,
    videoId: "6SQwbxMCagQ",
    name: "Manoela",
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-zinc-50 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-wide uppercase text-sm mb-2">
            Depoimentos
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-800">
            Relatos de clientes que falam mais alto que promessas.
          </h3>
          <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
            Resultados reais de quem vive o front de batalha do digital.
          </p>
        </div>

        {/* Grid de Vídeos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col bg-white rounded-2xl p-4 shadow-sm border border-zinc-100 transition-shadow hover:shadow-md"
            >
              {/* Container do Vídeo Responsivo (16:9) */}
              <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden bg-zinc-200">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${testimonial.videoId}?rel=0&modestbranding=1`}
                  title={`Depoimento - ${testimonial.name}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
