import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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

function ServiceCard({ service }: { service: Service }) {
  const { i18n } = useTranslation();

  const currentLang = i18n.language ? i18n.language.substring(0, 2) : "pt";

  const content = service.translations.find(tr => tr.language === currentLang)
    || service.translations.find(tr => tr.language === 'pt');

  if (!content) return null;

  return (
    <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group">
      <div className="relative w-full pt-[56.25%] bg-zinc-100 overflow-hidden">
        <img
          src={service.imageUrl}
          alt={content.title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/10 transition-colors duration-300 pointer-events-none" />
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-lg font-bold mb-3 text-zinc-800 leading-snug">
          {content.title}
        </h3>

        <div className="flex flex-col grow justify-between">
          <p className="text-zinc-600 text-sm leading-relaxed mb-6">
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );
}

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
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <section id="services" className="py-24 px-6 md:px-20 w-full bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-amber-600 font-bold tracking-wide uppercase text-sm mb-3">
            {t('services.subtitle', { defaultValue: 'What we do' })}
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-800 leading-tight mb-4">
            {t('services.title', { defaultValue: 'Strategic Solutions' })}
          </h3>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            {t('services.description', { defaultValue: 'From attraction to conversion. Integrated services to ensure every step of your business works like a sales machine.' })}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
