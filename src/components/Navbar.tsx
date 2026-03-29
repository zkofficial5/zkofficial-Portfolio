import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import GooeyNav from "./GooeyNav";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].toLowerCase());
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(navItems[i].toLowerCase());
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const gooeyItems = navItems.map((item) => ({
    label: item,
    href: `#${item.toLowerCase()}`,
  }));

  const activeGooeyIndex = Math.max(
    0,
    navItems.findIndex((item) => item.toLowerCase() === activeSection),
  );

  return (
    <>
      {/* Top-left name logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-6 left-6 z-50 pointer-events-none"
      >
        <span
          className="font-mono text-sm tracking-wider"
          style={{
            color: "#C9517A",
            textShadow: "0 0 20px rgba(201,81,122,0.6)",
          }}
        >
          ✦ Zoya Khan
        </span>
      </motion.div>

      {/* Desktop: GooeyNav — precisely centered */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden md:block fixed z-50"
        style={{
          top: "16px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            background: "rgba(10,10,10,0.88)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "9999px",
            border: "1px solid rgba(255,255,255,0.07)",
            padding: "3px 6px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
            isolation: "isolate",
            overflow: "clip",
          }}
        >
          <GooeyNav
            items={gooeyItems}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            initialActiveIndex={activeGooeyIndex}
          />
        </div>
      </motion.div>

      {/* Mobile nav */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:hidden fixed z-50"
        style={{ top: "16px", left: "50%", transform: "translateX(-50%)" }}
      >
        <div
          className="flex items-center gap-3 px-4 py-2 rounded-full"
          style={{
            background: "rgba(10,10,10,0.88)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white/80 hover:text-white transition-colors p-1"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <span className="font-mono text-sm" style={{ color: "#C9517A" }}>
            ZK
          </span>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.18 }}
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2 flex flex-col gap-1 py-3 px-2 rounded-2xl min-w-[160px]"
              style={{
                background: "rgba(10,10,10,0.95)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="w-full text-center py-2 px-4 rounded-xl text-sm font-body transition-all duration-200"
                  style={
                    activeSection === item.toLowerCase()
                      ? { backgroundColor: "#C9517A", color: "white" }
                      : { color: "rgba(255,255,255,0.55)" }
                  }
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Navbar;
