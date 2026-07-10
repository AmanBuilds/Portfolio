import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import WhatIBring from "./components/WhatIBring/WhatIBring";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Cursor from "./components/Cursor/Cursor";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import SectionReveal from "./components/Common/SectionReveal/SectionReveal";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ScrollProgress />
          <Cursor />
          <Navbar />
          <Hero />
          <SectionReveal>
            <About />
          </SectionReveal>
          <SectionReveal>
            <Skills />
          </SectionReveal>
          <SectionReveal>
            <Projects />
          </SectionReveal>
          <SectionReveal>
            <WhatIBring />
          </SectionReveal>
          <SectionReveal>
            <Contact />
          </SectionReveal>
            <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;