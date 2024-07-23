import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import { IoCloseSharp, IoReorderThreeSharp } from "react-icons/io5";
import getRoutes from "../locales/routes";

// Header component that handles navigation and language change
function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Memoize routes to avoid recalculating them on every render
  const routes = useMemo(() => getRoutes(i18n.language), [i18n.language]);

  // Function to change the language
  const onChangeLang = useCallback(
    (lng: "en" | "hr") => {
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  // Handle language change from the select element
  const handleLangChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value as "en" | "hr";
    onChangeLang(selectedLang);

    // Update the URL to the corresponding path in the new language
    const currentPath = window.location.pathname;
    const newRoutes = getRoutes(selectedLang);
    const routeKeys = Object.keys(newRoutes) as Array<keyof typeof newRoutes>;
    for (const key of routeKeys) {
      if (routes[key] === currentPath) {
        navigate(newRoutes[key], { replace: true });
        break;
      }
    }
  };

  useEffect(() => {
    // This effect ensures that the URL is updated if the language changes externally
    const currentPath = window.location.pathname;
    const newPath = Object.values(routes).find(
      (route) => route === currentPath
    );
    if (!newPath) {
      const routeKeys = Object.keys(routes) as Array<keyof typeof routes>;
      for (const key of routeKeys) {
        if (routes[key] === currentPath) {
          navigate(routes[key], { replace: true });
          break;
        }
      }
    }
  }, [i18n.language, navigate, routes]);

  // Toggle the menu open/close state and manage body class
  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
    document.body.classList.toggle("menu-open", !isMenuOpened);
  };

  // Close the menu and remove the body class
  const closeMenu = () => {
    setIsMenuOpened(false);
    document.body.classList.remove("menu-open");
  };

  // Prevent click event propagation for the select element
  const handleSelectClick = (
    e: React.MouseEvent<HTMLSelectElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return (
    <nav className="header flex flex-jc--fe flex-ai--c txt-color-secondary fw-semiBold sans-serif">
      <div className="circle circle--top-left"></div>
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
