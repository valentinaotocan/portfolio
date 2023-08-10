import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoCloseSharp, IoReorderThreeSharp } from "react-icons/io5";

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const isActive = true; 

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <nav className="header ptb-xl txt-color-secondary fw-medium sans-serif">
      <div
        className={`header__nav ${isMenuOpened ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <NavLink to="/" className="mr-xl underline">
          Naslovna
        </NavLink>
        <NavLink to="/o-meni" className="mr-xl underline">
          O meni
        </NavLink>
        <NavLink to="/iskustvo" className="mr-xl underline">
          Iskustvo
        </NavLink>
        <NavLink to="/projekti" className="mr-xl underline">
          Projekti
        </NavLink>
        <NavLink to="/kontakt" className="mr-xl underline">
          Kontakt
        </NavLink>
      </div>
      <div className="header__hamburger" onClick={toggleMenu}>
        {isMenuOpened ? (
          <IoCloseSharp size={50} className="txt-color-secondary" />
        ) : (
          <IoReorderThreeSharp size={50} className="txt-color-secondary" />
        )}
      </div>
    </nav>
  );
}
export default Header