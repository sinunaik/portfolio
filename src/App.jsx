// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"; // import BrowserRouter
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Main single-page portfolio */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />
        {/* Resume separate page */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
