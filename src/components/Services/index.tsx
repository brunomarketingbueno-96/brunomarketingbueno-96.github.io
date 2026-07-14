import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// --- TIPAGENS ---
type Translation = {
  language: string;
  title: string;
  description: string;
};

type Service = {
  id: string;
  link: string | null;
  imageUrl: string;
  translations: Translation[];
};

// --- COMPONENTE DE CARREGAMENTO (SKELETON) ---
function SkeletonService() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col overflow-hidden animate-pulse">
      <div className="w-full pt-[56.25%] bg-gray-200"></div>
      <div className="p-5 flex flex-col grow gap-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-1.5">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          <div className="h-3 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}

// --- COMPONENTE DO CARD DE SERVIÇO ---
function ServiceCard({ service }: { service: Service }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language ? i18n.language.substring(0, 2) : "pt";

  // Busca tradução correspondente ou usa o português como fallback
  const content = service.translations.find(tr => tr.language === currentLang)
    || service.translations.find(tr => tr.language === 'pt');

  if (!content) return null;

  // Verifica se o texto é longo o suficiente para precisar do botão "Ler mais"
  // 140 caracteres é uma boa média para 3 linhas em fontes pequenas
  const isLongText = content.description.length > 140;

  // Valida se há link ativo para exibição do botão
  const hasValidLink = service.link && service.link.trim() !== "";

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group">

      {/* Imagem com proporção 16:9 preservada */}
      <div className="relative w-full pt-[56.25%] bg-gray-50 overflow-hidden border-b border-gray-50">
        <img
          src={service.imageUrl}
          alt={content.title}
          className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300" />
      </div>

      {/* Conteúdo interno do Card */}
      <div className="p-5 flex flex-col grow">
        <h3 className="text-base lg:text-[14px] font-bold mb-2 text-slate-900 leading-snug">
          {content.title}
        </h3>

        <div className="flex flex-col grow justify-between">
          <p className={`text-slate-600 text-xs lg:text-[12px] leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
            {content.description}
          </p>

          {isLongText && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors text-xs lg:text-[11px] mt-2 self-start"
            >
              {isExpanded ? t("services.showLess", "Ver menos") : t("services.readMore", "Ler mais")}
            </button>
          )}
        </div>

        {/* Botão de Ação (Renderizado estritamente se houver link válido) */}
        {hasValidLink && (
          <div className="mt-4 pt-2 border-t border-gray-50">
            <a
              href={service.link!}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-white text-xs lg:text-[11px] font-semibold py-2 px-3 rounded-lg transition-colors shadow-sm"
            >
              {t("services.accessLink", "Acessar Projeto")}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// --- SEÇÃO PRINCIPAL DE SERVIÇOS ---
export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/services`)
      .then((res) => res.json())
      .then((data: Service[]) => {
        setServices(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar serviços:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <section id="services" className="py-20 px-6 md:px-16 w-full bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho da Seção */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-1.5">
            {t("services.subtitle", "O que fazemos")}
          </span>
          <h2 className="text-3xl lg:text-2xl font-extrabold tracking-tight text-slate-900 mb-3">
            {t("services.title", "Nossos Serviços")}
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
        </div>

        {/* Grid perfeitamente alinhado com 4 colunas no Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            <>
              {Array.from({ length: 8 }).map((_, i) => (
                <SkeletonService key={i} />
              ))}
            </>
          ) : (
            services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))
          )}
        </div>

      </div>
    </section>
  );
}