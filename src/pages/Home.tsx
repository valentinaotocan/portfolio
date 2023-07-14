import valentinaOtocan from '../assets/images/valentina-otocan.jpeg';
import pet from '../assets/images/icons/pet.png';
import work from '../assets/images/icons/work.png';
import ecology from '../assets/images/icons/ecology.png';

function Home() {
  return (
      <section className="home plr-small">
        <div className="home__circle linear-bg"></div>
        <div className="home__circle--smaller linear-bg"></div>
        <div className="home__picture">
          <img
            src={valentinaOtocan}
            className="home__picture__me img-contain border-img"
            alt="Valentina Otočan"
          />
          <img
            src={pet}
            className="home__picture__pet img-contain png-w"
            alt="Pet"
          />
          <img
            src={work}
            className="home__picture__work img-contain png-w"
            alt="Work"
          />
          <img
          src={ecology}
            className="home__picture__ecology img-contain png-w"
            alt="Ecology"
          />
        </div>
        <div className="home__text">
          <h1 className="fs-xxl pb-sm">Valentina Otočan</h1>
          <h2 className="fs-xl">Frontend developer</h2>
        </div>
      </section>
  );
}
export default Home