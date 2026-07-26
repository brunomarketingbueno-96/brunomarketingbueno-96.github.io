import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '@/components/SectionHeader';
import CallToAction from '@/components/CallToAction';

const AnimatedCounter = ({ end, prefix = "", suffix = "", decimals = 0 }: { end: number, prefix?: string, suffix?: string, decimals?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = 0;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(easeProgress * end);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, end]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals).replace(".", ",")}
      {suffix}
    </span>
  );
};

const caseStudies = [
  {
    id: 1,
    niche_key: 'results.case_1_niche',
    niche_default: 'Niche: Evergreen Product',
    title_key: 'results.case_1_title',
    title_default: 'Rapid Sales Scaling',
    description_key: 'results.case_1_description',
    description_default: 'We transformed a fashion suppliers e-book into a highly profitable 100% online product.',
    end: 150,
    prefix_key: 'results.case_1_prefix',
    prefix_default: '+R$ ',
    suffix_key: 'results.case_1_suffix',
    suffix_default: 'k',
    decimals: 0,
    time_key: 'results.case_1_time',
    time_default: 'in just 3 months',
  },
  {
    id: 2,
    niche_key: 'results.case_2_niche',
    niche_default: 'Niche: Integrative Medicine',
    title_key: 'results.case_2_title',
    title_default: 'Return on Investment',
    description_key: 'results.case_2_description',
    description_default: 'Launch focused on a warm audience, generating a gross revenue of almost R$ 64k with high profit.',
    end: 35.6,
    prefix_key: 'results.case_2_prefix',
    prefix_default: 'ROAS ',
    suffix_key: 'results.case_2_suffix',
    suffix_default: 'x',
    decimals: 1,
    time_key: 'results.case_2_time',
    time_default: 'Return per real invested',
  },
  {
    id: 3,
    niche_key: 'results.case_3_niche',
    niche_default: 'Niche: Health Technology',
    title_key: 'results.case_3_title',
    title_default: 'International Award',
    description_key: 'results.case_3_description',
    description_default: 'Awarded 4th place in Brazil by an American multinational, with direct honors in Cancun, Mexico.',
    end: 75,
    prefix_key: 'results.case_3_prefix',
    prefix_default: 'U$ ',
    suffix_key: 'results.case_3_suffix',
    suffix_default: 'k',
    decimals: 0,
    time_key: 'results.case_3_time',
    time_default: 'in direct sales',
  },
  {
    id: 4,
    niche_key: 'results.case_4_niche',
    niche_default: 'Niche: Naturopathy',
    title_key: 'results.case_4_title',
    title_default: 'Digital Launch',
    description_key: 'results.case_4_description',
    description_default: 'Strategic conversion with a highly engaged target audience, generating over R$ 60k in gross revenue.',
    end: 27.5,
    prefix_key: 'results.case_4_prefix',
    prefix_default: 'ROAS ',
    suffix_key: 'results.case_4_suffix',
    suffix_default: 'x',
    decimals: 1,
    time_key: 'results.case_4_time',
    time_default: 'Return per real invested',
  }
];

export default function Results() {
  const { t } = useTranslation();

  return (
    <section id="cases" className="py-24 bg-white px-6 md:px-20 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          subtitle={t('results.subtitle', { defaultValue: 'Case Studies' })}
          title={t('results.title', { defaultValue: 'Results that speak louder than promises.' })}
          description={t('results.description', { defaultValue: 'Real numbers from those who live on the digital front lines, generating profit across multiple niches and business models.' })}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full z-0 transform translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-500"></div>

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-white border border-zinc-200 text-zinc-500 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                  {t(item.niche_key, { defaultValue: item.niche_default })}
                </span>

                <div className="text-5xl lg:text-6xl font-extrabold text-amber-600 mb-2 tracking-tighter">
                  <AnimatedCounter
                    end={item.end}
                    prefix={t(item.prefix_key, { defaultValue: item.prefix_default })}
                    suffix={t(item.suffix_key, { defaultValue: item.suffix_default })}
                    decimals={item.decimals}
                  />
                </div>

                <span className="block text-zinc-800 font-semibold mb-4 bg-amber-100/50 w-max px-2 py-0.5 rounded text-sm">
                  {t(item.time_key, { defaultValue: item.time_default })}
                </span>

                <h4 className="text-xl font-bold text-zinc-800 mb-2">
                  {t(item.title_key, { defaultValue: item.title_default })}
                </h4>
                <p className="text-zinc-600 leading-relaxed">
                  {t(item.description_key, { defaultValue: item.description_default })}
                </p>
              </div>
            </div>
          ))}
        </div>

        <CallToAction
          buttonText={t('results.cta_button_text', { defaultValue: 'I want this level of result in my business' })}
          whatsappMessage={t('results.cta_whatsapp_message', { defaultValue: 'Hello Bruno, I saw the results in your portfolio and would like to understand how to apply these strategies to my company.' })}
        />

      </div>
    </section>
  );
}
