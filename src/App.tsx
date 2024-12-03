import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import PageTransition from "./components/PageTransition";
import getRoutes from "./locales/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { i18n } = useTranslation();

  // If language is 'auto', default to 'en'
  const lang =
    i18n.language === "auto" ||
    !(i18n.language === "en" || i18n.language === "hr")
      ? "en"
      : i18n.language;

  // Fetch routes based on current language
  const routes = getRoutes(lang);

  const location = useLocation();

  return (
    <>
      <Header />
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path={routes.home}
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path={routes.about}
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path={routes.projects}
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />
          <Route
            path={routes.contact}
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
