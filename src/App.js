import './App.css';
import Home from './components/Home';
import Headeratas from './components/Headeratas';
import Footer from './components/Footer';
// import Navbarcompo from './components/Navbarcompo';
import { Route, Routes } from "react-router-dom";
import Survey from './components/Survey';
import Pertanyaanpuas from './components/Pertanyaanpuas';
import Alasan from './components/Alasan';
import Terimakasih from './components/Terimakasih';


function App() {

  return (
    <div className="App">
      {/* <Navbarcompo /> */}
      <Headeratas />
      {/* KONTEN MULAI */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/perpuas" element={<Pertanyaanpuas />} />
        <Route path="/alasan" element={<Alasan />} />
        <Route path="/trims" element={<Terimakasih />} />
      </Routes>
      {/* KONTEN END */}

      <Footer />
    </div>
  );
}

export default App;
