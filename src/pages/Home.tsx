import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fromOpacity } from "../animations";
import { fromTop } from "../animations";
import useTitle from "../hooks/useTitle";
import girl from "../assets/images/girl.webp";
import laptop from "../assets/images/icons/laptop.png";
import ecology from "../assets/images/icons/ecology.png";

function Home() {
  const { t } = useTranslation();
  useTitle(t("header.home"));

  const introductionLines = [
    "home.introduction.overview",
    "home.introduction.achievements",
    "home.introduction.passion",
    "home.introduction.growth",
  ];

  return (
    <main className="home mt-10xl">
      <section className="home__greeting flex">
        <div className="home__greeting__picture flex flex-jc--c flex-ai--c">
          <div className="home__greeting__picture__wrap">
            <motion.img
              src={girl}
              className="girl-image img-contain"
              alt="Girl"
              variants={fromOpacity}
              initial="hidden"
              animate="visible"
            />
          </div>
        </div>
        <motion.div
          className="home__greeting__text plr-small ptb-4xl text-center flex flex-fd--c flex-ai--c flex-jc--c"
          variants={fromTop}
          initial="hidden"
          animate="visible"
        >
          <p className="fs-xl pb-sm sans-serif">
            {t("home.personal.greeting")}
          </p>
          <p className="fs-xl pb-sm sans-serif">{t("home.personal.name")}</p>
          <h1 className="fs-xxl">{t("home.personal.career")}</h1>
        </motion.div>
      </section>

      <section className="home__introduction pos-r fs-base linear-bg txt-color-primary flex flex-fd--c flex-ai--c flex-jc--c ptb-4xl">
        <motion.img
          src={laptop}
          className="home__introduction__laptop-icon img-contain png-w pos-a"
          alt="Laptop Icon"
          variants={fromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        />
        <motion.img
          src={ecology}
          className="home__introduction__ecology-icon img-contain png-w pos-a"
          alt="Ecology Icon"
          variants={fromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        />
        <div className="home__introduction__div flex flex-fd--c flex-jc--c flex-ai--c text-center plr-small">
          {introductionLines.map((line, index) => (
            <p key={index} className="pb-sm">
              {t(line)}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
export default Home;
