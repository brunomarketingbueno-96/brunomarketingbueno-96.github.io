import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '@/components/SectionHeader';
import CallToAction from '@/components/CallToAction';

const pillars = [
  {
    id: 0,
    title_key: 'methodology.pillar_1_title',
    title_default: '1. Diagnosis and Alignment',
    subtitle_key: 'methodology.pillar_1_subtitle',
    subtitle_default: '',
    content_key: 'methodology.pillar_1_content',
    content_default: 'I deeply understand your operation, your product, and your target audience before investing the first dime. Every penny of yours is important; I treat your money as if it were mine.',
    icon_path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 1,
    title_key: 'methodology.pillar_2_title',
    title_default: '2. Infrastructure and Technology',
    subtitle_key: 'methodology.pillar_2_subtitle',
    subtitle_default: '',
    content_key: 'methodology.pillar_2_content',
    content_default: 'My technology team and I develop the necessary foundation (AI, websites, features, landing pages, automations) to convert visitors into customers.',
    icon_path: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
  },
  {
    id: 2,
    title_key: 'methodology.pillar_3_title',
    title_default: '3. Ads and Positioning',
    subtitle_key: 'methodology.pillar_3_subtitle',
    subtitle_default: '',
    content_key: 'methodology.pillar_3_content',
    content_default: 'We create strategic content and structure sales funnels that work consistently in a personalized way for your business.',
    icon_path: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 3,
    title_key: 'methodology.pillar_4_title',
    title_default: '4. Analysis and Scaling',
    subtitle_key: 'methodology.pillar_4_subtitle',
    subtitle_default: '',
    content_key: 'methodology.pillar_4_content',
    content_default: 'I measure every metric, explain everything that is happening, and we optimize the business to achieve or increase scale.',
    icon_path: 'M13 10V3L4 14h7v7l9-11h-7z'
  }
];

export default function Methodology() {
  const [activePillar, setActivePillar] = useState(0);
  const { t } = useTranslation();

  return (
    <section id="methodology" className="py-20 px-6 md:px-20 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          subtitle={t('methodology.subtitle', { defaultValue: 'The Method' })}
          title={t('methodology.title', { defaultValue: 'Data-driven strategy, not guesswork.' })}
          description={t('methodology.description', { defaultValue: 'The 4 pillars that guide my work. Applicable to any type of business: physical, digital, services, digital products, courses, or mentorships.' })}
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          <div className="w-full lg:w-5/12 flex flex-col gap-3">
            {pillars.map((pillar, index) => (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(index)}
                className={`text-left px-5 py-4 rounded-2xl transition-all duration-300 border-2 ${activePillar === index
                  ? "bg-white border-amber-600 shadow-sm"
                  : "bg-transparent border-transparent hover:bg-white/60 hover:border-zinc-200"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className={`font-bold text-lg mb-1 ${activePillar === index ? "text-amber-700" : "text-zinc-800"}`}>
                      {t(pillar.title_key, { defaultValue: pillar.title_default })}
                    </h4>
                    <p className={`text-sm ${activePillar === index ? "text-zinc-600" : "text-zinc-500"}`}>
                      {t(pillar.subtitle_key, { defaultValue: pillar.subtitle_default })}
                    </p>
                  </div>

                  <div className={`hidden lg:block transition-transform duration-300 ${activePillar === index ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}>
                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="w-full lg:w-7/12 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-zinc-200 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -top-12 -right-12 text-zinc-50 opacity-50 transform scale-150 pointer-events-none">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d={pillars[activePillar].icon_path} />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d={pillars[activePillar].icon_path} />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-zinc-800 mb-4">
                {t(pillars[activePillar].title_key, { defaultValue: pillars[activePillar].title_default })}
              </h4>
              <p className="text-zinc-600 text-lg leading-relaxed">
                {t(pillars[activePillar].content_key, { defaultValue: pillars[activePillar].content_default })}
              </p>
            </div>
          </div>
        </div>

        <CallToAction
          buttonText={t('methodology.cta_button_text', { defaultValue: 'I want to apply this method to my business' })}
          helperText={t('methodology.cta_helper_text', { defaultValue: 'Speak directly with Bruno via WhatsApp.' })}
          whatsappMessage={t('methodology.cta_whatsapp_message', { defaultValue: 'Hello Bruno, I was looking at your website and would like to apply your 4-pillar method to my business!' })}
        />

      </div>
    </section>
  );
}
