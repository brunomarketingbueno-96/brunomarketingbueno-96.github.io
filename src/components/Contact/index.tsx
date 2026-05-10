import { useTranslation } from "react-i18next";

import Form from "@/components/Form";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="flex flex-col items-center py-20 px-6 md:px-16 w-full text-zinc-900 dark:text-zinc-100 transition-colors duration-300">

      <div className="mb-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tight">{t("contact.title")}</h2>
        <div className="w-12 h-1 bg-zinc-900 dark:bg-zinc-100 mt-2 rounded-full transition-colors duration-300"></div>
      </div>

      <div className="w-full bg-white dark:bg-zinc-950 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-8 md:p-10 transition-colors duration-300">
        <Form />
      </div>
    </section>
  );
}
