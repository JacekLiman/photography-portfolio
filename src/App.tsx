import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import { useContext } from "react";
import { CursorContext } from "./components/context/CursorContext";

function App() {
  const { cursorVariant } = useContext(CursorContext);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>{" "}
        <div
          style={{
            top: `${cursorVariant.y}px`,
            left: `${cursorVariant.x}px`,
            backgroundColor:
              cursorVariant.variant === "small" ? "#0e1112" : "white",
            mixBlendMode:
              cursorVariant.variant === "small" ? "normal" : "difference",
          }}
          className={`${
            cursorVariant.variant === "small"
              ? "w-[12px] h-[12px]"
              : "w-[120px] h-[120px]"
          } fixed z-50 rounded-full pointer-events-none`}
        ></div>
      </Router>
    </div>
  );
}

export default App;
