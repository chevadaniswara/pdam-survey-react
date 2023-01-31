import './App.css';
import Home from './components/Home';
import Headeratas from './components/Headeratas';
import Footer from './components/Footer';
import Navbarcompo from './components/Navbarcompo';
import { Row, Col } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Survey from './components/Survey';
import Pertanyaanpuas from './components/Pertanyaanpuas';
import Alasan from './components/Alasan';


function App() {

  return (
    <div className="App">
      <Navbarcompo />
      <Headeratas />
      {/* KONTEN MULAI */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/perpuas" element={<Pertanyaanpuas />} />
        <Route path="/alasan" element={<Alasan />} />
      </Routes>
      {/* KONTEN END */}

      <Footer />
    </div>
  );
}

export default App;
