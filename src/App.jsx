// App.jsx
import { Routes, Route } from "react-router-dom"; // remove BrowserRouter import
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
    <>
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
    </>
  );
}

export default App;
