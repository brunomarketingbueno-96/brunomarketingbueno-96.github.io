import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const EXCLUDED_IDS = [
  "a22f7c09-d7be-4c98-89f2-d3101e82a0bf",
  "bea8f01d-4bda-45aa-b27e-a10954f910ca",
  "87567793-5dd0-41ef-af3c-66cc88e56ad7",
];

type Translation = {
  language: string;
  name: string;
  institution: string;
  description: string;
};

type Education = {
  id: string;
  startDate: string;
  endDate: string;
  type: 'college' | 'course';
  imageUrl: string;
  certificateUrl: string | null;
  status: 'completed' | 'paused' | 'in_progress';
  translations: Translation[];
};

const formatDate = (dateString: string, locale: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(date);
};

// --- COMPONENTE PRINCIPAL ---
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
        // Filtra os itens removendo os que estão no array EXCLUDED_IDS
        const filteredData = data.filter(edu => !EXCLUDED_IDS.includes(edu.id));
        setEducations(filteredData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar formações:", err);
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

  // --- LÓGICA DE POSICIONAMENTO DO CARROSSEL 3D ---
  const getCardStyleAndClasses = (index: number) => {
    if (index === currentIndex) {
      return "translate-x-0 scale-100 opacity-100 z-30 shadow-2xl";
    }

    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    if (index === prevIndex) {
      return "-translate-x-[30%] md:-translate-x-[65%] scale-[0.80] opacity-40 z-20 cursor-pointer hover:opacity-70 blur-[1px] hover:blur-none";
    }

    if (index === nextIndex) {
      return "translate-x-[30%] md:translate-x-[65%] scale-[0.80] opacity-40 z-20 cursor-pointer hover:opacity-70 blur-[1px] hover:blur-none";
    }

    // Itens ocultos no fundo
    return "translate-x-0 scale-50 opacity-0 z-10 pointer-events-none";
  };

  if (isLoading) {
    return (
      <section className="flex flex-col items-center justify-center py-20 min-h-[600px] w-full bg-slate-50">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-slate-900"></div>
      </section>
    );
  }

  if (total === 0) return null;

  return (
    <section id="educations" className="py-24 px-6 md:px-16 w-full bg-slate-50 text-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Cabeçalho SEO - Restrito a uma linha (truncate) */}
        <div className="mb-16 flex flex-col items-center text-center w-full">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-1.5 w-full truncate px-4">
            {t("educations.seoText", "Constante evolução e aprendizado contínuo")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-4 w-full truncate px-4">
            {t("educations.title", "Formações & Especializações")}
          </h2>
          <div className="w-16 h-1.5 bg-blue-600 rounded-full"></div>
        </div>

        {/* Container do Carrossel */}
        <div className="relative w-full h-[550px] md:h-[500px] flex items-center justify-center perspective-1000">

          {educations.map((edu, index) => {
            const content = edu.translations.find(tr => tr.language === currentLang) || edu.translations.find(tr => tr.language === 'pt');
            if (!content) return null;

            const isCenter = index === currentIndex;

            return (
              <div
                key={edu.id}
                onClick={() => !isCenter && handleSelect(index)}
                className={`absolute w-full max-w-[320px] md:max-w-md h-full max-h-[480px] bg-white rounded-2xl border border-gray-100 flex flex-col overflow-hidden transition-all duration-700 ease-out ${getCardStyleAndClasses(index)}`}
              >
                {/* Imagem do Curso */}
                <div className="relative w-full h-40 md:h-48 shrink-0 bg-slate-100 border-b border-gray-50 overflow-hidden">
                  <img
                    src={edu.imageUrl}
                    alt={content.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Badge de Status */}
                  <div className="absolute top-4 right-4">
                    {edu.status === 'completed' ? (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border border-green-200">
                        {t("educations.status.completed", "Concluído")}
                      </span>
                    ) : edu.status === 'paused' ? (
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border border-yellow-200">
                        {t("educations.status.paused", "Pausado")}
                      </span>
                    ) : (
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border border-blue-200">
                        {t("educations.status.inProgress", "Em Andamento")}
                      </span>
                    )}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      {edu.type === 'college' ? t("educations.type.college", "Faculdade") : t("educations.type.course", "Curso/Especialização")}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1 truncate">
                    {content.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 mb-4 truncate">
                    {content.institution}
                  </p>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-4 mb-4">
                    {content.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="text-slate-500 text-[11px] font-medium flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(edu.startDate, currentLang)} - {edu.endDate ? formatDate(edu.endDate, currentLang) : t("educations.present", "Atual")}
                    </div>

                    {edu.certificateUrl && (
                      <a
                        href={edu.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-[11px] font-bold transition-colors flex items-center gap-1"
                      >
                        {t("educations.viewCertificate", "Certificado")}
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
        </div>

        {/* Controles de Navegação (Setas) */}
        {total > 1 && (
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all shadow-sm focus:outline-none"
              aria-label="Anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicadores (Dots) */}
            <div className="flex gap-2">
              {educations.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                  aria-label={`Ir para o slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-gray-200 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all shadow-sm focus:outline-none"
              aria-label="Próximo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}