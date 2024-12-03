import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import { IoCloseSharp, IoReorderThreeSharp } from "react-icons/io5";
import { getRoutes } from "../locales/routes";

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Ensure i18n.language is either "en" or "hr"
  const language: "en" | "hr" =
    i18n.language === "en" || i18n.language === "hr" ? i18n.language : "en";
  const routes = getRoutes(language); // Get the correct routes based on the language

  const handleLangChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value as "en" | "hr";
    i18n.changeLanguage(selectedLang); // Change language using i18n

    // Update the current URL to the corresponding path in the new language
    const currentPath = window.location.pathname;
    for (const [key, value] of Object.entries(routes)) {
      if (value === currentPath) {
        const newPath = getRoutes(selectedLang)[key];
        navigate(newPath, { replace: true }); // Navigate to the correct path
        break;
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
    document.body.classList.toggle("menu-open", !isMenuOpened);
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
    <nav className="header flex flex-jc--fe flex-ai--c txt-color-secondary fw-semiBold sans-serif">
      <div
        className={`header__nav ${isMenuOpened ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <NavLink
          to={routes.home}
          className="mr-xl underline"
          onClick={closeMenu}
        >
          {t("header.home")}
        </NavLink>
        <NavLink
          to={routes.about}
          className="mr-xl underline"
          onClick={closeMenu}
        >
          {t("header.about")}
        </NavLink>
        <NavLink
          to={routes.projects}
          className="mr-xl underline"
          onClick={closeMenu}
        >
          {t("header.projects")}
        </NavLink>
        <NavLink
          to={routes.contact}
          className="mr-xl underline"
          onClick={closeMenu}
        >
          {t("header.contact")}
        </NavLink>
        <select onChange={handleLangChange} onClick={handleSelectClick}>
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

export default React.memo(Header);
