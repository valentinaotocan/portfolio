import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Project from './pages/Project';

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-meni" element={<About />} />
        <Route path="/gh-projekti" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
