import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About/About";
import Content from "./components/Pages/Content/Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/content" element={<Content />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
