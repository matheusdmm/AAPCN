import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import Projetos from './pages/Projetos';
import Apoiar from './pages/Apoiar';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Footer from './components/Footer';

import './App.css';
import './animate.min.css';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pt-16"></div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/como-apoiar" element={<Apoiar />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
