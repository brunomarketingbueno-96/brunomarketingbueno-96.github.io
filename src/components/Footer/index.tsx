import { useTranslation } from 'react-i18next';
import Logo from '@/components/Logo';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 pt-16 pb-8 px-6 md:px-20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div className="flex flex-col items-center md:items-start">
            <Logo isWhite />
            <p className="mt-4 text-zinc-400 text-sm text-center md:text-left max-w-xs leading-relaxed">
              {t('footer.description', { defaultValue: 'Strategy, integration and scaling for businesses seeking predictable growth through validated methodologies.' })}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              {t('footer.nav_title', { defaultValue: 'Navigation' })}
            </h4>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-center md:text-left">
              <a href="#hero" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">
                {t('footer.nav_home', { defaultValue: 'Home' })}
              </a>
              <a href="#introduction" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">
                {t('footer.nav_introduction', { defaultValue: 'Introduction' })}
              </a>
              <a href="#methodology" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">
                {t('footer.nav_methodology', { defaultValue: 'Methodology' })}
              </a>
              <a href="#cases" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">
                {t('footer.nav_results', { defaultValue: 'Results' })}
              </a>
              <a href="#services" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">
                {t('footer.nav_services', { defaultValue: 'Services' })}
              </a>
              <a href="#depoimentos" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">
                {t('footer.nav_testimonials', { defaultValue: 'Testimonials' })}
              </a>
              <a href="#recomendacoes-linkedin" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">
                {t('footer.nav_reviews', { defaultValue: 'Recommendations' })}
              </a>
              <a href="#about" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">
                {t('footer.nav_about', { defaultValue: 'About me' })}
              </a>
              <a href="#educations" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">
                {t('footer.nav_educations', { defaultValue: 'Educations' })}
              </a>
              <a href="#contact" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">
                {t('footer.nav_contact', { defaultValue: 'Contact' })}
              </a>
              <a href="#FAQ" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">
                {t('footer.nav_faq', { defaultValue: 'FAQ' })}
              </a>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              {t('footer.connect_title', { defaultValue: 'Connect' })}
            </h4>

            <a
              href="https://www.linkedin.com/in/bruno-mendes-bueno-944834217/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-zinc-400 hover:text-amber-500 transition-colors text-sm mb-4 group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              {t('footer.linkedin_text', { defaultValue: 'Professional LinkedIn' })}
            </a>

            <a
              href="mailto:bruno.online.bueno@gmail.com"
              className="flex items-center text-zinc-400 hover:text-amber-500 transition-colors text-sm group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              bruno.online.bueno@gmail.com
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-xs text-center md:text-left mb-2 md:mb-0">
            © {currentYear} {t('footer.rights', { defaultValue: 'Bruno Bueno. All rights reserved.' })}
          </p>
          <p className="text-zinc-600 text-xs text-center md:text-right">
            {t('footer.developed_by', { defaultValue: 'Developed with a focus on conversion and performance.' })}
          </p>
        </div>

      </div>
    </footer>
  );
}
