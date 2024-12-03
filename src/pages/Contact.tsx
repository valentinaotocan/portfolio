import useTitle from "../hooks/useTitle";
import bottle from "../assets/images/icons/black/message-in-a-bottle.png";
import pigeon from "../assets/images/icons/black/pigeon.png";
import { useTranslation } from "react-i18next";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaMobileScreen } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fromOpacity, fromTop } from "../animations";

function Contact() {
  const { t } = useTranslation();
  useTitle(t("header.contact"));

  return (
    <section className="pos-r contact flex flex-jc--c flex-ai--c plr-custom">
      <div className="circle"></div>
      <div className="circle circle--top-left"></div>
      <motion.img
        src={pigeon}
        className="contact__image-pigeon png-w pos-a"
        alt="Pigeon"
        variants={fromTop}
        initial="hidden"
        animate="visible"
      />
      <motion.img
        src={bottle}
        className="contact__image-bottle png-w pos-a"
        alt="Message in a bottle"
        variants={fromTop}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="contact__box flex flex-fd--c flex-ai--c text-center linear-bg fs-base sans-serif2 txt-color-primary"
        variants={fromOpacity}
        initial="hidden"
        animate="visible"
      >
        <div className="contact__box__row flex flex-ai--c">
          <FiMail className="mr-xs icon-mail" size={20} />
          <a
            href="mailto:valentinaotocan@gmail.com"
            className="underline underline--primary-clr"
          >
            valentinaotocan@gmail.com
          </a>
        </div>
        <div className="contact__box__row">
          <FaMobileScreen className="icon-mobile mr-xs" size={18} />
          <a
            href="telto:0919539093"
            className="underline underline--primary-clr"
          >
            0919539093
          </a>
        </div>
        <div className="pt-md">
          <p className="pb-xs">{t("contact.platforms")}</p>
          <a
            href="https://www.facebook.com/valentinaotocan"
            rel="external"
            target="_blank"
            className="mr-sm social"
          >
            <BsFacebook size={19} />
          </a>
          <a
            href="https://www.instagram.com/valenia93"
            rel="external"
            target="_blank"
            className="mr-sm social"
          >
            <BsInstagram size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/valentina-otocan/"
            rel="external"
            target="_blank"
            className="social"
          >
            <BsLinkedin size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
export default Contact;
