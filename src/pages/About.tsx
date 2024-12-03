import { motion } from "framer-motion";
import { fromOpacity, fromTop } from "../animations";
import { useTranslation } from "react-i18next";
import useTitle from "../hooks/useTitle";
import codeGif from "../assets/images/code-gif.webp";
import html from "../assets/images/icons/black/html.png";
import book from "../assets/images/icons/black/book.png";
import sunset from "../assets/images/icons/black/sunset.png";
import succulent from "../assets/images/icons/black/succulent.png";
import work from "../assets/images/icons/white/work.png";
import puzzle from "../assets/images/icons/white/puzzle.png";
import mindset from "../assets/images/icons/white/mindset.png";
import goingUp from "../assets/images/icons/white/going-up.png";
import Slider from "../components/Slider";
import softSkillS from "../assets/images/soft-skill__small.jpg";
import softSkillM from "../assets/images/soft-skill__medium.jpg";
import softSkillL from "../assets/images/soft-skill__large.jpg";

function About() {
  const { t } = useTranslation();
  useTitle(t("header.about"));

  const skills = t("about.softSkills.skills", {
    returnObjects: true,
  }) as string[];
  const frontendReasons = t("about.frontend.reasons", {
    returnObjects: true,
  }) as string[];
  const learningReasons = t("about.learning.reasons", {
    returnObjects: true,
  }) as string[];

  return (
    <main className="about mt-10xl">
      <section className="pos-r about__skills flex">
        <div className="circle circle--semicircle-left"></div>
        <div className="about__skills__text pr-5 ptb-custom pos-r">
          <motion.img
            src={html}
            className="html-icon png-w"
            alt="HTML Icon"
            variants={fromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <h1 className="fs-xl pb-sm">{t("about.hardSkills.heading")}</h1>
          <ul className="fs-base ml-lg">
            <li>Git & Github</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>(S)CSS</li>
            <li>BEM</li>
          </ul>
        </div>
        <div className="about__skills__img hardSkillsImage">
          <motion.img
            src={codeGif}
            className="code-gif img-contain"
            alt="Code Gif"
            variants={fromOpacity}
            initial="hidden"
            animate="visible"
          />
        </div>
      </section>

      <section className="pos-r about__frontend flex text-center flex-fd--c flex-ai--c ptb-custom linear-bg plr-custom txt-color-primary">
        <motion.img
          src={work}
          loading="lazy"
          className="png-w"
          alt="Icon"
          variants={fromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.img
          src={puzzle}
          loading="lazy"
          className="icon-down pos-a png-w"
          alt="Puzzle"
          variants={fromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <h2 className="fs-xl pt-md pb-lg">{t("about.frontend.heading")}</h2>
        <div className="about__frontend__text">
          {frontendReasons.map((reason: string, index: number) => (
            <p className="pb-lg fs-base" key={index}>
              {reason}
            </p>
          ))}
        </div>
      </section>

      <section className="pos-r about__skills flex">
        <div className="circle circle--semicircle-left"></div>
        <div className="circle circle--semicircle-right"></div>
        <div className="about__skills__text pr-5 ptb-custom pt-res">
          <h1 className="fs-xl pb-sm">{t("about.softSkills.heading")}</h1>
          <div className="fs-base">
            <ul className="ml-lg">
              {skills.map((skill: string, index: number) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="about__skills__img softSkillsWrap">
          <motion.img
            srcSet={`
    ${softSkillS} 640w,
    ${softSkillM} 1280w,
    ${softSkillL} 1920w
  `}
            sizes="
    (max-width: 640px) 100vw,
    (min-width: 641px) and (max-width: 1024px) 80vw,
    (min-width: 1025px) 1920px
  "
            src={softSkillL}
            alt="Soft Skill Image"
            loading="lazy"
            className="soft-img "
            variants={fromOpacity}
            initial="hidden"
            animate="visible"
          />
        </div>
      </section>

      <section className="pos-r learning flex flex-fd--c flex-ai--c text-center ptb-custom plr-custom linear-bg txt-color-primary">
        <motion.img
          src={mindset}
          loading="lazy"
          className="img-contain png-w"
          alt="Mindset"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fromTop}
        />
        <motion.img
          src={goingUp}
          loading="lazy"
          className="icon-down pos-a img-contain png-w"
          alt="Brain"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fromTop}
        />
        <h2 className="fs-xl pb-sm pt-md">{t("about.learning.heading")}</h2>
        <div className="learning__text fs-base">
          {learningReasons.map((reason: string, index: number) => (
            <p className="pb-lg fs-base" key={index}>
              {reason}
            </p>
          ))}
        </div>
      </section>

      <section className="about__hobby pos-r ptb-custom plr-custom">
        <div className="circle circle--semicircle-right"></div>
        <div className="about__hobby__wrap">
          <h2 className="fs-xl pb-sm">{t("about.hobby.heading")}</h2>
          <div className="pos-r">
            <h3 className="fs-lg">{t("about.hobby.book.title")}</h3>
            <p className="pb-lg fs-base">{t("about.hobby.book.paragraph")}</p>
            <motion.img
              src={book}
              loading="lazy"
              className="icon-book pos-a png-w fromTop"
              alt="Book"
              variants={fromTop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </div>
          <div className="pos-r">
            <h3 className="fs-lg">{t("about.hobby.nature.title")}</h3>
            <p className="pb-lg fs-base">{t("about.hobby.nature.paragraph")}</p>
            <motion.img
              src={sunset}
              loading="lazy"
              className="icon-nature pos-a png-w fromTop"
              alt="Sunset"
              variants={fromTop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </div>
          <div className="pos-r">
            <h3 className="fs-lg">{t("about.hobby.plants.title")}</h3>
            <p className="pb-lg fs-base">{t("about.hobby.plants.paragraph")}</p>
            <motion.img
              src={succulent}
              loading="lazy"
              className="icon-succulent pos-a png-w fromTop"
              alt="Succulent"
              variants={fromTop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </div>
          <h3 className="fs-lg">{t("about.hobby.photography.title")}</h3>
          <p className="pb-xl fs-base">
            {t("about.hobby.photography.paragraph")}
          </p>
        </div>

        <Slider />

        <div className="circle circle--small"></div>
      </section>
    </main>
  );
}
export default About;
