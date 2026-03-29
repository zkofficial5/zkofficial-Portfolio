import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "Full Stack Developer",
  "PHP & Laravel",
  "React & TypeScript",
  "Creative Writer",
  "Open to Collaborate",
];

const Hero = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Dark base only as fallback — Spline scene covers this */}
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: "#0A0A0A" }}
      />

      {/* Content — left-aligned like Naresh, generous padding */}
      <div
        className="relative z-10 w-full"
        style={{
          paddingLeft: "clamp(2rem, 8vw, 7rem)",
          paddingTop: "6rem",
          paddingBottom: "4rem",
        }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.25em] mb-4"
          style={{ color: "#C9517A" }}
        >
          ✦ Full Stack Developer
        </motion.p>

        {/* Name — large, blur-in */}
        <motion.h1
          initial={{ filter: "blur(14px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
          className="font-display font-bold leading-[0.95] mb-6"
          style={{ fontSize: "clamp(4.5rem, 11vw, 9rem)" }}
        >
          <span className="block text-white">Zoya</span>
          <span
            className="block"
            style={{
              color: "#C9517A",
              textShadow: "0 0 80px rgba(201,81,122,0.45)",
            }}
          >
            Khan
          </span>
        </motion.h1>

        {/* Two-line italic tagline */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mb-5"
        >
          <p
            className="font-display italic leading-snug"
            style={{
              fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
              color: "rgba(255,255,255,0.38)",
            }}
          >
            between syntax
          </p>
          <p
            className="font-display italic leading-snug"
            style={{
              fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
              color: "rgba(255,255,255,0.38)",
            }}
          >
            and storytelling —
          </p>
        </motion.div>

        {/* Rotating phrase */}
        <div className="h-8 flex items-center overflow-hidden mb-8">
          <motion.p
            key={phraseIndex}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35 }}
            className="text-base font-mono"
            style={{ color: "#C9517A" }}
          >
            {phrases[phraseIndex]}
          </motion.p>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="flex items-center gap-4 flex-wrap"
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 rounded-full font-body font-medium text-sm text-white transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "#C9517A" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 30px rgba(201,81,122,0.6)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            View Projects
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 rounded-full font-body font-medium text-sm transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid #C9517A",
              color: "#C9517A",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#C9517A";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#C9517A";
            }}
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
      >
        <div
          className="w-px h-8 animate-gentle-bounce"
          style={{
            background:
              "linear-gradient(to bottom, rgba(201,81,122,0.6), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
