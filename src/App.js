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
import Splash from './components/splash/splash';
import Social from './components/social/Social';
import links from './assets/data/links';
import projects from './assets/data/projects';
// import Pitch from './components/pitch/Pitch';

const App = () => {
  const [showSplash, setShowSplash] = React.useState(true);
  const [showPage, setShowPage] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setShowPage(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div initial="hide" animate="show">
      {showSplash && <Splash />}
      {showPage && <Navbar />}
      {showPage && <ScrollToTop />}
      {showPage && <Home />}
      {showPage && <Projects projects={projects} />}
      {showPage && <About />}
      {/* {showPage && <Pitch />} */}
      {showPage && <Contact />}
      {showPage && <Footer />}
      {showPage && <Social links={links} />}
    </motion.div>
  );
};

export default App;
