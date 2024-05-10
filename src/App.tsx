import './App.css'
import { motion, useScroll } from "framer-motion";
import DrawerAppBar from './components/navibar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
    <DrawerAppBar/>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
