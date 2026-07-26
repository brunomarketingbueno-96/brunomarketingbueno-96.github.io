import { useTranslation } from 'react-i18next';

import CallToAction from '@/components/CallToAction';
import Features from '@/components/Features';

const features = [
  {
    id: 1,
    title_key: 'introduction.feature_1_title',
    title_default: '10+ Years in the Market',
    desc_key: 'introduction.feature_1_desc',
    desc_default: 'From small to large corporations and startups.',
    icon_path: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    id: 2,
    title_key: 'introduction.feature_2_title',
    title_default: 'Initial test',
    desc_key: 'introduction.feature_2_desc',
    desc_default: 'Short projects to validate the strategy without long commitments.',
    icon_path: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    id: 3,
    title_key: 'introduction.feature_3_title',
    title_default: 'No lock-in contracts',
    desc_key: 'introduction.feature_3_desc',
    desc_default: "No long-term demands. If there are no results, you are free to leave.",
    icon_path: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    id: 4,
    title_key: 'introduction.feature_4_title',
    title_default: 'Natural retention',
    desc_key: 'introduction.feature_4_desc',
    desc_default: 'Clients stay for the results. Specialist in e-commerce, digital products, and services.',
    icon_path: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
  }
];

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <section id="introduction" className="py-24 bg-zinc-50 px-6 md:px-20 border-t border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="absolute top-6 -left-6 w-full h-full bg-amber-600 rounded-2xl transform -rotate-3 opacity-20 hidden md:block"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[radial-gradient(#d4d4d8_2px,transparent_2px)] bg-size-[16px_16px] hidden md:block"></div>

            <div className="relative z-10 w-full max-w-md rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-zinc-200 aspect-4/5">
              <img
                src="br.jpg"
                alt={t('introduction.image_alt', { defaultValue: 'Bruno Bueno working' })}
                className="w-full h-full object-cover saturate-[0.85] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-amber-900/10 mix-blend-soft-light pointer-events-none"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col justify-center">

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-zinc-800 leading-tight mb-6">
              {t('introduction.title_start', { defaultValue: 'My biggest differential: I work for ' })}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-700 to-amber-500">
                {t('introduction.title_highlight', { defaultValue: 'results' })}
              </span>
              {t('introduction.title_end', { defaultValue: ', not just for a contract.' })}
            </h3>

            <div className="text-zinc-600 text-base md:text-md leading-relaxed space-y-4 mb-8">
              <p>
                {t('introduction.paragraph_1', { defaultValue: "You should only pay for what brings results. That's why I start with short projects and short contracts. I don't demand 12-month contracts. If it doesn't generate results, you are free to leave." })}
              </p>
              <p>
                {t('introduction.paragraph_3', { defaultValue: 'And the best part: the vast majority of my projects can be handled online, where you can follow the entire construction journey.' })}
              </p>
            </div>

            <Features features={features} />

            <div className="-mt-8 w-full lg:self-center lg:-ml-4">
              <CallToAction
                buttonText={t('introduction.cta_button_text', { defaultValue: 'I want a profit-focused partnership' })}
                whatsappMessage={t('introduction.cta_whatsapp_message', { defaultValue: 'Hello Bruno, I read a bit of your story on the website and would like to chat about my business.' })}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
