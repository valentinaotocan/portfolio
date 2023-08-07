import useTitle from "../hooks/useTitle";
import bottle from '../assets/images/icons/message-in-a-bottle.png';
import pigeon from "../assets/images/icons/pigeon.png";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaMobileScreen } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fromOpacity, fromTop } from "../Animation";


function Contact() {
  useTitle("Kontakt");
  return (
    <section className="section contact plr-custom">
      <div className="circle linear-bg pos-a"></div>
      <div className="circle--xs-top linear-bg pos-a"></div>
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
        className="contact__box linear-bg fs-base sans-serif2 txt-color-primary"
        variants={fromOpacity}
        initial="hidden"
        animate="visible"
      >
        <div className="contact__box__row">
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
          <p className="pb-xs">Društvene mreže</p>
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
