import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About/About";
import Menu from "./components/Pages/Menu/Menu";
import Contact from "./components/Pages/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
