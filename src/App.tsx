import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomeLayout from "./components/HomeLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/o-meni" element={<About />} />
          <Route path="/iskustvo" element={<Experience />} />
          <Route path="/projekti" element={<Project />} />
          <Route path="/kontakt" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
