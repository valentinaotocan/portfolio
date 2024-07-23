import { motion } from "framer-motion";
import { fromOpacity, fromTop } from "../Animation";
import useTitle from "../hooks/useTitle";
import skills from "../assets/images/icons/skills.png";
import profile from "../assets/images/profile.jpeg";
// import coding from "../assets/images/icons/coding.png";
import puzzle from "../assets/images/icons/puzzle.png";
import book from '../assets/images/icons/book.png';
import sunset from '../assets/images/icons/sunset.png';
import succulent from '../assets/images/icons/succulent.png';
import Slider from "../components/Slider";

function About() {
  useTitle("O meni");
  return (
    <>
      <section className="pos-r about-me flex ptb-custom ptb-custom--first plr-custom">
        <div className="circle circle--semicircle-left"></div>
        <div className="about-me__text pr-5">
          <h1 className="fs-xl pb-sm">Kratko o meni</h1>
          <div className="about-me__text__virtues flex mw-550 fs-base">
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
        <div className="about-me__img pos-r pl-5">
          <motion.img
            src={profile}
            loading="lazy"
            className="about-me__img__profile img-contain"
            alt="Profile"
            variants={fromOpacity}
            initial="hidden"
            animate="visible"
          />
          <motion.img
            src={skills}
            className="about-me__img__icon-skills pos-a png-w"
            alt="Skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fromTop}
          />
        </div>
      </section>

      <section className="pos-r frontend flex text-center flex-fd--c flex-ai--c ptb-custom linear-bg plr-custom txt-color-primary">
        {/* <motion.img
          src={coding}
          loading="lazy"
          className="frontend__icon-coding png-w"
          alt="Coding"
          variants={fromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        /> */}
        <motion.img
          src={puzzle}
          loading="lazy"
          className="frontend__icon-puzzle pos-a png-w"
          alt="Puzzle"
          variants={fromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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

      <section className="pos-r hobby ptb-custom plr-custom">
        <div className="circle circle--semicircle-right"></div>
        <div className="mw-550">
          <h2 className="fs-xl pb-sm">Hobi</h2>
          <div className="pos-r">
            <h3 className="fs-lg">Čitanje knjiga</h3>
            <p className="pb-lg fs-base">
              Najviše volim čitati knjige o psihologiji jer me osvješćuju i
              otvaraju neki novi pogled na stvari.
            </p>
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
            <h3 className="fs-lg">Priroda</h3>
            <p className="pb-lg fs-base">
              Od šetnje prirodom koja je dnevni odmor za dušu i tijelo do
              istraživanja sakrivenih mjesta.
            </p>
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
            <h3 className="fs-lg">Biljke</h3>
            <p className="pb-lg fs-base">
              Uzgoj sukulenata. Što su neobičniji to su zanimljiviji.
            </p>
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
          <h3 className="fs-lg">Fotografija</h3>
          <p className="pb-xl fs-base">Galerija mojih fotografija.</p>
        </div>

        <Slider />

        <div className="circle circle--small"></div>
      </section>
    </>
  );
}
export default About;
