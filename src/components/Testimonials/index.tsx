import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    id: 1,
    video_id: "SPsZ6tmrjYo",
    name_key: "testimonials.name_1",
    name_default: "Victor and Raquel",
  },
  {
    id: 2,
    video_id: "YTAGG-KUqKE",
    name_key: "testimonials.name_2",
    name_default: "Sarah",
  },
  {
    id: 3,
    video_id: "_l8_pi3qO60",
    name_key: "testimonials.name_3",
    name_default: "Samia",
  },
  {
    id: 4,
    video_id: "6SQwbxMCagQ",
    name_key: "testimonials.name_4",
    name_default: "Manoela",
  }
];

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section id="depoimentos" className="py-20 bg-zinc-50 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-wide uppercase text-sm mb-2">
            {t('testimonials.subtitle', { defaultValue: 'Testimonials' })}
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-800">
            {t('testimonials.title', { defaultValue: 'Customer stories that speak louder than promises.' })}
          </h3>
          <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
            {t('testimonials.description', { defaultValue: 'Real results from those who live on the digital front lines.' })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col bg-white rounded-2xl p-4 shadow-sm border border-zinc-100 transition-shadow hover:shadow-md"
            >
              <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden bg-zinc-200">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${testimonial.video_id}?rel=0&modestbranding=1`}
                  title={`${t('testimonials.video_title_prefix', { defaultValue: 'Testimonial - ' })}${t(testimonial.name_key, { defaultValue: testimonial.name_default })}`}
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
