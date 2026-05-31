import { useTranslation } from "react-i18next";

export default function Copy() {
  const { t } = useTranslation();

  return (
    <div className="z-10 flex-1 flex flex-col justify-center items-start text-left">
      <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
        {t("hero.availability")}
      </div>

      <span className="text-lg md:text-xl ml-0.5 text-zinc-600 dark:text-zinc-400 font-medium transition-colors duration-300">
        {t("hero.description")}
      </span>

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-zinc-900 dark:text-white transition-colors duration-300 mt-2">
        {t("hero.descriptionHighlight")}
      </h1>

      <p className="mt-4 md:mt-5 text-base md:text-lg text-zinc-500 dark:text-zinc-400 max-w-lg leading-relaxed transition-colors duration-300">
        {t("hero.subtext")}
      </p>

      <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-6 md:mt-8 w-full">
        {/* Botão de Download do Currículo Atualizado */}
        <a
          href="./Curriculum_Willian_Deiviti_Daniel.pdf"
          download="Curriculum_Willian_Deiviti_Daniel.pdf"
          className="
            font-medium cursor-pointer bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 px-6 py-2.5
            rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors duration-300
            shadow-sm flex items-center gap-2
          "
        >
          {t("hero.cta-button-cv")}
          <svg xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 8l-3-3m3 3l3-3"
            />
          </svg>
        </a>

        <a
          className="
            font-medium cursor-pointer bg-white dark:bg-transparent text-zinc-900 dark:text-zinc-100 px-6 py-2.5
            border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-300
            shadow-sm flex items-center gap-2
          "
          href="#projects"
        >
          {t("hero.cta-button-projects")}
        </a>
      </div>
    </div>
  )
}