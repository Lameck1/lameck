import React from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import ScrollToTop from './components/scroll/ScrollToTop';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <motion.div initial="hide" animate="show">
      <Navbar />
      <ScrollToTop />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default App;
