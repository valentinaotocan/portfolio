import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';
import { IoCloseSharp, IoReorderThreeSharp } from "react-icons/io5";

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { t, i18n } = useTranslation("global");

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
    if (!isMenuOpened) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
    document.body.classList.remove("menu-open");
  };

  const handleSelectClick = (
    e: React.MouseEvent<HTMLSelectElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };


  return (
    <nav className="header flex flex-jc--fe flex-ai--c ptb-xl txt-color-secondary fw-semiBold sans-serif">
      <div
        className={`header__nav ${isMenuOpened ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <NavLink to="/" className="mr-xl underline" onClick={closeMenu}>
          {t("header.home")}
        </NavLink>
        <NavLink to="/o-meni" className="mr-xl underline" onClick={closeMenu}>
          {t("header.about")}
        </NavLink>
        <NavLink to="/projekti" className="mr-xl underline" onClick={closeMenu}>
          {t("header.projects")}
        </NavLink>
        <NavLink to="/kontakt" className="mr-xl underline" onClick={closeMenu}>
          {t("header.contact")}
        </NavLink>
        <select onChange={onChangeLang} onClick={handleSelectClick}>
          <option value="en">EN</option>
          <option value="hr">HR</option>
        </select>
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