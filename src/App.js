import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About/About";
import Menu from "./components/Pages/Menu/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recommend from "./components/Pages/Recommend/Recommend";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/recommend" element={<Recommend />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
