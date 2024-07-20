import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import HomeLayout from "./components/HomeLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import PageTransition from "./components/PageTransition";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomeLayout />}>
            <Route
              index
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route
              path="/o-meni"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/iskustvo"
              element={
                <PageTransition>
                  <Experience />
                </PageTransition>
              }
            />
            <Route
              path="/projekti"
              element={
                <PageTransition>
                  <Project />
                </PageTransition>
              }
            />
            <Route
              path="/kontakt"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
          </Route>
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
    </div>
  );
}

export default App;
