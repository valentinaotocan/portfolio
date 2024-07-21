import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import PageTransition from "./components/PageTransition";
import getRoutes from "./locales/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // Use the translation hook to access the current language
  const { i18n } = useTranslation();

  // Get the routes based on the current language
  const routes = getRoutes(i18n.language);

  // Get the current location to ensure routes animate on change
  const location = useLocation();

  return (
    <div className="App">
      <Header />

      {/* AnimatePresence enables animations when the route changes */}
      <AnimatePresence mode="wait" initial={false}>
        {/* Routes component handles rendering the correct page component based on the path */}
        <Routes location={location} key={location.pathname}>
          {/* Define individual routes with animations */}
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
                <Project />
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
    </div>
  );
}

export default App;
