import React from "react";
import About from './components/About';
import Contact from './components/Contact';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}