import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// pages
import { Home } from "./pages/Home/Home";
import { Artigos } from "./pages/Artigos/Artigos";
import { Resultados } from "./pages/Resultados/Resultados";
import { Artigo } from "./pages/Artigo/Artigo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container min-vh-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artigos" element={<Artigos />} />
            <Route path="/artigo/:id" element={<Artigo />} />
            <Route path="/resultados" element={<Resultados />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
