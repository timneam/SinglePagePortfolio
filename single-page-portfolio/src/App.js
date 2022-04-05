import React from "react";
import About from './components/About';
import Contact from './components/Contact';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <main className="App-container">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}