import { motion } from 'framer-motion';
import { fromOpacity, fromTop } from '../Animation';
import useTitle from "../hooks/useTitle";
import skills from '../assets/images/icons/skills.png';
import handshake from "../assets/images/icons/handshake.png";
import profile from "../assets/images/profile.jpeg";
import coding from "../assets/images/icons/coding.png";
import puzzle from "../assets/images/icons/puzzle.png";

function About() {
  useTitle("O meni");
  return (
    <>
      <section className="section section--first about-me ptb-custom plr-custom">
        <div className="about-me__circle linear-bg"></div>
        <motion.img
          src={skills}
          className="about-me__icon-skills png-w"
          variants={fromTop}
          initial="hidden"
          animate="visible"
          alt="Skills"
        />
        <motion.img
          src={handshake}
          loading="lazy"
          className="about-me__icon-handshake png-w"
          alt="Handshake"
          variants={fromTop}
          initial="hidden"
          animate="visible"
        />
        <div className="about-me__text">
          <h1 className="fs-xl pb-sm">Kratko o meni</h1>
          <div className="about-me__text__virtues mw-550 fs-base">
            <ul className="ml-lg">
              <li>Društvena</li>
              <li>Komunikativna</li>
              <li>Pristupačna</li>
              <li>Odgovorna</li>
              <li>Organizirana</li>
            </ul>
            <ul className="ml-6xl">
              <li>Marljiva</li>
              <li>Kreativna</li>
              <li>Otvorena za učenje novih stvari</li>
              <li>Stalo mi je do međuljudskih odnosa</li>
              <li>Uvijek spremna na pomoć</li>
            </ul>
          </div>
        </div>
        <div className="about-me__img pl-5">
          <motion.img
            src={profile}
            loading="lazy"
            className="about-me__img__profile img-contain border-img"
            alt="Profile"
            variants={fromOpacity}
            initial="hidden"
            animate="visible"
          />
        </div>
      </section>

      <section className="section frontend ptb-custom linear-bg plr-custom txt-color-primary">
        <motion.img
          src={coding}
          loading="lazy"
          className="frontend__icon-coding png-w"
          alt="Coding"
          variants={fromTop}
          initial="hidden"
          animate="visible"
        />
        <motion.img
          src={puzzle}
          loading="lazy"
          className="frontend__icon-puzzle png-w"
          alt="Puzzle"
          variants={fromTop}
          initial="hidden"
          animate="visible"
        />
        <h2 className="fs-xl pt-md pb-sm">Zašto baš frontend?</h2>
        <div className="frontend__text mw-550">
          <p className="pb-md fs-base">
            Frontend programiranje mi je poput slaganje puzli koje budi u meni
            dječju stranu. Daje mi razmišljati kako posložiti segmente web
            stranice.
          </p>
          <p className="pb-md fs-base">
            Svaki frontend projekt je drugačiji, što izgledom, što
            funkcionalnostima, stoga je svakog puta novi izazov i iskustvo.
            Nikad monoton.
          </p>
          <p className="fs-base">Idealan je za vizualne tipove poput mene.</p>
        </div>
      </section>
    </>
  );
}
export default About;
