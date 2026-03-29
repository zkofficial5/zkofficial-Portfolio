import { useState } from "react";
import { motion } from "framer-motion";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import SectionDivider from "@/components/SectionDivider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SplineBackground from "@/components/SplineBackground";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Preloader onComplete={() => setLoaded(true)} />

      {/* Spline is always mounted so it can track scroll — outside the fade wrapper */}
      {loaded && <SplineBackground />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <Navbar />
        <main>
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
