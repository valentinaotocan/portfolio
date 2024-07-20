import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("global");
  
  return (
    <footer className="footer flex flex-jc--c flex-ai--c text-center linear-bg plr-custom txt-color-primary fs-base fw-normal ptb-xl">
      <p>
        <span>{t('footer.rightsReserved')}</span> &copy; Valentina Otočan {new Date().getFullYear()}.
      </p>
    </footer>
  );
}
