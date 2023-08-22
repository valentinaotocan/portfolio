import useTitle from "../hooks/useTitle";
import html from "../assets/images/icons/html.png";
import programming from "../assets/images/programming.jpeg";
import nextLevel from "../assets/images/icons/next-level.png";
import brainProcess from "../assets/images/icons/brain-process.png";
import brain from "../assets/images/icons/brain.png";
import screen from "../assets/images/screen.jpg";
import { motion } from "framer-motion";
import { fromTop } from "../Animation";

function Experience() {
  useTitle("Iskustvo");
  return (
    <>
      <section className="pos-r knowledge flex ptb-custom ptb-custom--first plr-custom">
        <motion.img
          src={html}
          className="knowledge__icon-html pos-a img-contain png-w"
          alt="Html"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fromTop}
        />
        <div className="circle circle--top-left"></div>
        <div className="circle circle--semicircle-left"></div>
        <div className="knowledge__text pr-5">
          <h2 className="fs-xl pb-sm">Znanje</h2>
          <div className="knowledge__text__items flex mw-550 fs-base">
            <ul className="ml-lg">
              <li>Git</li>
              <li>HTML &amp; CSS</li>
              <li>Sass</li>
              <li>BEM metoda</li>
            </ul>
            <ul className="ml-6xl">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Osnove Nuxt.js-a</li>
              <li>React.js &amp; Next.js</li>
            </ul>
          </div>
        </div>
        <div className="knowledge__image pl-5">
          <motion.img
            src={programming}
            className="img-contain w-rsp"
            alt="Programming"
          />
        </div>
      </section>

      <section className="pos-r learning flex flex-fd--c flex-ai--c text-center ptb-custom plr-custom linear-bg txt-color-primary">
        <motion.img
          src={brainProcess}
          loading="lazy"
          className="learning__icon-process img-contain png-w"
          alt="Learning process"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fromTop}
        />
        <motion.img
          src={brain}
          loading="lazy"
          className="learning__icon-brain pos-a img-contain png-w"
          alt="Brain"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fromTop}
        />
        <h2 className="fs-xl pb-sm pt-md">Učenje</h2>
        <div className="learning__text fs-base">
          <p className="pb-sm">
            Učenje je za mene putovanje koje ne završava. Težim dubljem
            razumijevanju kako bih mogla postati što bolja.
          </p>
          <p className="pb-sm">
            S oduševljenjem prihvaćam izazove koje budućnost nosi i strastveno
            radim na izgradnji temelja za svoju karijeru u svijetu frontend
            razvoja.
          </p>
        </div>
      </section>

      <section className="pos-r experience ptb-custom plr-custom">
        <div className="circle circle--bottom-left"></div>
        <div className="circle circle--top-right"></div>
        <div className="experience__wrap flex flex-jc--sb pos-r">
          <div className="experience__wrap__text mw-550">
            <h1 className="fs-xl pb-sm">Iskustvo</h1>
            <p className="fs-base pb-md">
              Kao frontend developer imam 6 mj. radnog iskustva. Za to vrijeme
              radila sam na sveukupno 10 projekata u koje spada i održavanje web
              stranica.
            </p>
            <p className="fs-base">
              To su: A1 (Vještine budućnosti - timski rad), Archmedia (coming
              soon page), Benvenuti, Camp Dvor (održavanje), Chiavalon (zadnja
              faza), ICT-Istra (početak developmenta), Kabola (timski rad,
              održavanje), Kutjevo (održavanje), Plus Hosting (timski rad) i
              Stanzia Vinella (održavanje).
            </p>
            <div className="icon-flex">
              <motion.img
                src={nextLevel}
                loading="lazy"
                className="img-contain png-w"
                alt="Next level"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fromTop}
              />
            </div>
          </div>
          <div className="experience__wrap__image pl-5">
            <img
              src={screen}
              loading="lazy"
              className="img-contain blur w-rsp"
              alt="Screen"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default Experience;
