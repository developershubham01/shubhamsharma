import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import LeetCodeStats from './components/LeetCodeStats';
import Contact1 from './components/Contact1';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

import './styles/App.css';
import { Contact } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <LeetCodeStats />
        <Contact1/>
      </main>
      <ScrollToTop/>
      <Footer />
    </div>
  );
}

export default App;