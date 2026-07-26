import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-white px-6 md:px-20 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:max-w-none rounded-3xl overflow-hidden shadow-xl border-4 border-zinc-50">
            <img
              src="bre.png"
              alt={t('about.image_alt', { defaultValue: 'Bruno Bueno holding an award' })}
              width={1232}
              height={1493}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-amber-600 font-bold tracking-wide uppercase text-sm mb-3">
              {t('about.title', { defaultValue: 'About Me (Bruno Bueno).' })}
            </h2>

            <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-800 leading-tight mb-8">
              {t('about.subtitle', { defaultValue: 'Strategy driven by results and purpose.' })}
            </h3>

            <div className="text-zinc-600 text-lg leading-relaxed space-y-6 bg-zinc-50 p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-sm text-left">
              <p>
                {t('about.paragraph_1', { defaultValue: 'With over 10 years in the market, I work integrating strategy, operations, and management. I, along with a specialized team in art direction and technology, deliver high-quality projects.' })}
              </p>
              <p>
                {t('about.paragraph_2', { defaultValue: 'I was born out of frustration with the traditional model: agencies that promise a lot, deliver little, and trap clients in abusive contracts. For me, the only loyalty that matters is to your results.' })}
              </p>
              <p>
                {t('about.paragraph_3', { defaultValue: 'I was born in Caxias do Sul-RS, and currently live in SC, but we serve throughout Brazil and abroad. Credibility is my most valuable asset.' })}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
