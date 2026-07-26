import { useTranslation } from "react-i18next";

interface Feature {
  id: number;
  title_key: string;
  title_default: string;
  desc_key: string;
  desc_default: string;
  icon_path: string;
}

export default function Features({ features }: { features: Feature[] }) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {features.map((feature) => (
        <div key={feature.id} className="flex items-start">
          <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mt-1">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={feature.icon_path} />
            </svg>
          </div>
          <div className="ml-4">
            <h4 className="text-zinc-800 font-bold">
              {t(feature.title_key, { defaultValue: feature.title_default })}
            </h4>
            <p className="text-sm text-zinc-500 mt-1">
              {t(feature.desc_key, { defaultValue: feature.desc_default })}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}