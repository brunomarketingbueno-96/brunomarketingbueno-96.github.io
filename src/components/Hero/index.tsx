import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero"
      className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-stretch mt-6 mb-6 px-6 lg:px-20 gap-8 lg:gap-12"
    >
      <div className="flex flex-col justify-center py-4 max-w-2xl w-full text-center lg:text-left">
        <div>
          <h2 className="text-amber-600 font-bold tracking-wide uppercase text-sm mb-2">
            {t('hero.role', { defaultValue: 'Marketing Manager' })}
          </h2>

          <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-800 leading-tight mb-4">
            {t('hero.title', { defaultValue: 'Strategy, technology and performance to scale your business.' })}
          </h1>

          <p className="text-zinc-600 text-base leading-relaxed mb-6">
            {t('hero.description', { defaultValue: 'I work with projects focused on sales of physical products, services, digital products, courses, and mentorships. With my art direction and technology team, we deliver integrated solutions. Prices vary according to each project. We schedule a meeting to understand your case and propose the right solution.' })}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a href="#servicos"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm transition-colors duration-200"
          >
            {t('hero.cta_primary', { defaultValue: 'Request Free Diagnosis' })}
          </a>

          <a href="#sobre"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-zinc-800 bg-transparent border border-zinc-300 hover:bg-zinc-100 rounded-lg transition-colors duration-200"
          >
            {t('hero.cta_secondary', { defaultValue: 'View portfolio' })}
          </a>
        </div>
      </div>

      <div className="shrink-0 flex justify-center items-center">
        <div className="relative rounded-sm overflow-hidden shadow-md">
          <img src="bru.png" alt={t('hero.image_alt', { defaultValue: 'Bruno Bueno' })}
            className="w-72 sm:w-80 lg:w-92 h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
