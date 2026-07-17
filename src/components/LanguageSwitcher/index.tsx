import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  mobile?: boolean;
}

export default function LanguageSwitcher({ mobile = false }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  const currentLanguage = i18n.language || "pt-BR";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDisplayLanguage = () => {
    if (currentLanguage.includes("en")) return "EN";
    if (currentLanguage.includes("es")) return "ES";
    return "PT";
  };

  return (
    <div className="relative flex justify-center" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-bold text-zinc-700 hover:bg-zinc-100 hover:text-blue-600 transition-all duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>

        <span className={`${mobile ? "text-base" : ""} tracking-wide`}>{getDisplayLanguage()}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180 text-blue-600" : "text-zinc-400"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={`
          absolute mt-12 w-36 bg-white rounded-xl shadow-lg border border-zinc-100
          z-50 py-1.5 overflow-hidden animate-in fade-in slide-in-from-top-2
          ${mobile ? "left-1/2 -translate-x-1/2 origin-top" : "right-0 origin-top-right"}
        `}>
          {["pt-BR", "en-US", "es-ES"].map((lang) => {
            const labels: Record<string, string> = { "pt-BR": "Português", "en-US": "English", "es-ES": "Español" };
            const isActive = currentLanguage.includes(lang.split('-')[0]);

            return (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`
                  w-full text-left px-4 py-2 text-sm transition-colors duration-150
                  ${isActive
                    ? "bg-blue-50/50 text-blue-700 font-semibold"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 font-medium"}
                `}
              >
                {labels[lang]}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
