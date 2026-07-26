import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '@/components/SectionHeader';
import CallToAction from '@/components/CallToAction';

type Translation = {
  language: string;
  name: string;
  institution: string;
  description: string;
};

type Education = {
  id: string;
  type: 'college' | 'course';
  imageUrl: string;
  certificateUrl: string | null;
  translations: Translation[];
};

export default function Educations() {
  const [educations, setEducations] = useState<Education[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language ? i18n.language.substring(0, 2) : "pt";

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/educations`)
      .then((res) => res.json())
      .then((data: Education[]) => {
        setEducations(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setIsLoading(false);
      });
  }, []);

  const total = educations.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  const getCardStyleAndClasses = (index: number) => {
    if (index === currentIndex) {
      return "translate-x-0 scale-100 opacity-100 z-30 shadow-xl border-amber-600/20";
    }

    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    if (index === prevIndex) {
      return "-translate-x-[30%] md:-translate-x-[65%] scale-[0.80] opacity-40 z-20 cursor-pointer hover:opacity-70 blur-[1px] hover:blur-none";
    }

    if (index === nextIndex) {
      return "translate-x-[30%] md:translate-x-[65%] scale-[0.80] opacity-40 z-20 cursor-pointer hover:opacity-70 blur-[1px] hover:blur-none";
    }

    return "translate-x-0 scale-50 opacity-0 z-10 pointer-events-none";
  };

  if (isLoading) {
    return (
      <section className="flex flex-col items-center justify-center py-20 min-h-125 w-full bg-zinc-50">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-zinc-800"></div>
      </section>
    );
  }

  if (total === 0) return null;

  return (
    <section id="educations" className="py-24 px-6 md:px-16 w-full bg-zinc-50 text-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          subtitle={t('educations.subtitle', { defaultValue: 'Constant evolution and continuous learning' })}
          title={t('educations.title', { defaultValue: 'Degrees & Specializations' })}
        />

        <div className="relative w-full h-125 md:h-112.5 flex items-center justify-center perspective-1000">

          {total > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 md:left-4 z-40 p-3 md:p-4 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-amber-600 transition-all shadow-md focus:outline-none"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {educations.map((edu, index) => {
            const content = edu.translations.find(tr => tr.language === currentLang) || edu.translations.find(tr => tr.language === 'pt');
            if (!content) return null;

            const isCenter = index === currentIndex;

            return (
              <div
                key={edu.id}
                onClick={() => !isCenter && handleSelect(index)}
                className={`absolute w-full max-w-[320px] md:max-w-md h-full max-h-105 bg-white rounded-2xl border border-zinc-200 flex flex-col overflow-hidden transition-all duration-700 ease-out ${getCardStyleAndClasses(index)}`}
              >
                <div className="relative w-full h-40 md:h-48 shrink-0 bg-zinc-100 border-b border-zinc-50 overflow-hidden">
                  <img
                    src={edu.imageUrl}
                    alt={content.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">
                      {edu.type === 'college' ? t('educations.type_college', { defaultValue: 'College' }) : t('educations.type_course', { defaultValue: 'Course/Specialization' })}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-800 leading-tight mb-1 truncate">
                    {content.name}
                  </h3>
                  <p className="text-sm font-medium text-amber-600 mb-4 truncate">
                    {content.institution}
                  </p>

                  <p className="text-zinc-600 text-xs leading-relaxed line-clamp-4 mb-4">
                    {content.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-end">
                    {edu.certificateUrl && (
                      <a
                        href={edu.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 text-[11px] font-bold transition-colors flex items-center gap-1"
                      >
                        {t('educations.view_certificate', { defaultValue: 'View Certificate' })}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {total > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-0 md:right-4 z-40 p-3 md:p-4 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-amber-600 transition-all shadow-md focus:outline-none"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

        </div>

        <CallToAction
          buttonText={t('educations.cta_button_text', { defaultValue: 'Talk about my project' })}
          whatsappMessage={t('educations.cta_whatsapp_message', { defaultValue: 'Hello Bruno, I saw your qualifications on the website and would like to talk about my business.' })}
        />

      </div>
    </section>
  );
}
