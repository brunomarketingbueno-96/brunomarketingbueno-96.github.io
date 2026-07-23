import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";

interface MenuProps {
  mobile?: boolean;
  onClose?: () => void;
}

export default function Menu({ mobile = false, onClose }: MenuProps) {
  const { t } = useTranslation();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    onClose?.();
  };

  const handleClick = () => {
    onClose?.();
  };

  if (mobile) {
    return (
      <ul className="flex flex-col items-center justify-center h-full pb-20 gap-8 text-gray-800 font-medium text-2xl">
        <li>
          <a href="#hero" onClick={scrollToTop} className="hover:text-white transition-colors">
            {t("menu.home")}
          </a>
        </li>
        <li><a href="#about" onClick={handleClick} className="hover:text-white transition-colors">{t("menu.about")}</a></li>
        <li><a href="#methodology" onClick={handleClick} className="hover:text-white transition-colors">{t("menu.methodology", { defaultValue: "Metodologia" })}</a></li>
        <li><a href="#cases" onClick={handleClick} className="hover:text-white transition-colors">{t("menu.cases", { defaultValue: "Cases" })}</a></li>
        <li><a href="#educations" onClick={handleClick} className="hover:text-white transition-colors">{t("menu.educations")}</a></li>
        <li><a href="#FAQ" onClick={handleClick} className="hover:text-white transition-colors">{t("menu.FAQ", { defaultValue: "FAQ" })}</a></li>
        <li><a href="#contact" onClick={handleClick} className="hover:text-white transition-colors">{t("menu.contact")}</a></li>

        <li className="flex items-center gap-6 pt-8 mt-4 border-t border-zinc-800 w-3/4 justify-center">
          <LanguageSwitcher mobile={mobile} />
        </li>
      </ul>
    );
  }

  return (
    <ul className="flex items-center gap-6 text-gray-800 font-normal">
      <li>
        <a href="#hero" onClick={scrollToTop} className="hover:text-white transition-colors">
          {t("menu.home")}
        </a>
      </li>
      <li><a href="#about" className="hover:text-white transition-colors">{t("menu.about")}</a></li>
      <li><a href="#methodology" className="hover:text-white transition-colors">{t("menu.methodology", { defaultValue: "Metodologia" })}</a></li>
      <li><a href="#cases" className="hover:text-white transition-colors">{t("menu.cases", { defaultValue: "Cases" })}</a></li>
      <li><a href="#educations" className="hover:text-white transition-colors">{t("menu.educations")}</a></li>
      <li><a href="#FAQ" className="hover:text-white transition-colors">{t("menu.FAQ", { defaultValue: "FAQ" })}</a></li>
      <li><a href="#contact" className="hover:text-white transition-colors">{t("menu.contact")}</a></li>
      <li><LanguageSwitcher /></li>
    </ul>
  );
}
