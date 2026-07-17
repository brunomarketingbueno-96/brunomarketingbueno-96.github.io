
// Array com os dados dos depoimentos, contendo os IDs dos vídeos que você enviou
const testimonials = [
  {
    id: 1,
    name: "Nome do Cliente 1",
    role: "Cargo / Empresa",
    videoId: "CRuz5TiyL9s",
  },
  {
    id: 2,
    name: "Nome do Cliente 2",
    role: "Cargo / Empresa",
    videoId: "_URG4LDzQ1k",
  },
  {
    id: 3,
    name: "Nome do Cliente 3",
    role: "Cargo / Empresa",
    videoId: "UNUmuNt-7po",
  },
  {
    id: 4,
    name: "Nome do Cliente 4",
    role: "Cargo / Empresa",
    videoId: "Ddt0A1tIZwo",
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
            O que dizem os parceiros
          </h3>
          <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
            Resultados reais e estratégias que transformam negócios. Confira a experiência de quem já confiou na minha gestão de marketing.
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
                  title={`Depoimento de ${testimonial.name}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Informações do Cliente */}
              <div className="mt-5 mb-2 px-2">
                <h4 className="text-lg font-bold text-zinc-800">{testimonial.name}</h4>
                <p className="text-sm text-amber-600 font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}