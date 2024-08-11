import { useTranslation } from "react-i18next";
import exclamation from "../assets/images/icons/exclamation-mark.png";

function ProjectErrorMessage() {
  const { t } = useTranslation();

  return (
    <div className="error">
      <img src={exclamation} alt="Error" />
      <p className="fs-xl">{t("error.general")}</p>
      <p>{t("error.fetch")}</p>
    </div>
  );
}
export default ProjectErrorMessage;
