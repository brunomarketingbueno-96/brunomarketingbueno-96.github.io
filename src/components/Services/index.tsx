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
    <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm flex flex-col overflow-hidden animate-pulse">
      <div className="w-full pt-[56.25%] bg-zinc-200"></div>
      <div className="p-6 flex flex-col grow gap-4">
        <div className="h-5 bg-zinc-200 rounded-md w-3/4"></div>
        <div className="space-y-2.5 mt-2">
          <div className="h-4 bg-zinc-200 rounded-md w-full"></div>
          <div className="h-4 bg-zinc-200 rounded-md w-5/6"></div>
          <div className="h-4 bg-zinc-200 rounded-md w-4/6"></div>
        </div>
      </div>
    </div>
  );
}

// --- COMPONENTE DO CARD DE SERVIÇO ---
function ServiceCard({ service }: { service: Service }) {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language ? i18n.language.substring(0, 2) : "pt";

  // Busca tradução correspondente ou usa o português como fallback
  const content = service.translations.find(tr => tr.language === currentLang)
    || service.translations.find(tr => tr.language === 'pt');

  if (!content) return null;

  // Valida se há link ativo para exibição do botão
  const hasValidLink = service.link && service.link.trim() !== "";

  return (
    <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group">

      {/* Imagem com proporção 16:9 preservada */}
      <div className="relative w-full pt-[56.25%] bg-zinc-100 overflow-hidden">
        <img
          src={service.imageUrl}
          alt={content.title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        {/* Overlay sutil em tom de âmbar ao passar o mouse */}
        <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/10 transition-colors duration-300 pointer-events-none" />
      </div>

      {/* Conteúdo interno do Card */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-lg font-bold mb-3 text-zinc-800 leading-snug">
          {content.title}
        </h3>

        <div className="flex flex-col grow justify-between">
          <p className="text-zinc-600 text-sm leading-relaxed mb-6">
            {content.description}
          </p>
        </div>

        {/* Botão de Ação (Renderizado estritamente se houver link válido) */}
        {hasValidLink && (
          <div className="mt-auto pt-4 border-t border-zinc-100">
            <a
              href={service.link!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center bg-zinc-800 hover:bg-zinc-900 text-white text-sm font-semibold py-3 px-4 rounded-xl transition-colors duration-200 shadow-sm"
            >
              {t("services.accessLink", "Acessar Projeto")}
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
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
    <section id="servicos" className="py-24 px-6 md:px-20 w-full bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho da Seção */}
        <div className="mb-16 text-center">
          <h2 className="text-amber-600 font-bold tracking-wide uppercase text-sm mb-3">
            {t("services.subtitle", "O que fazemos")}
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-800 leading-tight mb-4">
            {t("services.title", "Soluções Estratégicas")}
          </h3>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Da atração à conversão. Serviços integrados para garantir que cada etapa do seu negócio funcione como uma máquina de vendas.
          </p>
        </div>

        {/* Grid perfeitamente alinhado com 4 colunas no Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            <>
              {Array.from({ length: 4 }).map((_, i) => (
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
