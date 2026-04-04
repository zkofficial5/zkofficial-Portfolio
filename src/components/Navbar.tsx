import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ShinyText from "./ShinyText";

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
      {/* Top-left shiny name logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-6 left-6 z-50 pointer-events-none"
      >
        <ShinyText
          text="✦ Zoya Khan"
          speed={3}
          color="#C9517A"
          shineColor="#ffb3cc"
          spread={110}
          direction="left"
          className="font-mono text-sm tracking-wider"
        />
      </motion.div>

      {/* Desktop: centered spring-pill nav */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden md:flex fixed z-50 justify-center"
        style={{ top: "16px", left: 0, right: 0, pointerEvents: "none" }}
      >
        <div
          style={{
            pointerEvents: "all",
            background:
              "linear-gradient(135deg, rgba(20,8,28,0.92), rgba(15,5,20,0.92))",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "9999px",
            border: "1px solid rgba(201,81,122,0.2)",
            padding: "5px 6px",
            boxShadow:
              "0 4px 24px rgba(0,0,0,0.5), 0 0 20px rgba(201,81,122,0.08)",
            display: "flex",
            alignItems: "center",
            gap: "2px",
            position: "relative",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="relative px-4 py-1.5 text-sm font-body transition-colors duration-300 rounded-full"
              style={{
                color:
                  activeSection === item.toLowerCase()
                    ? "white"
                    : "rgba(201,81,122,0.7)",
                zIndex: 1,
              }}
            >
              {/* Spring-animated rose pill */}
              {activeSection === item.toLowerCase() && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "#C9517A" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item}</span>
            </button>
          ))}
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
            background:
              "linear-gradient(135deg, rgba(20,8,28,0.92), rgba(15,5,20,0.92))",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(201,81,122,0.2)",
          }}
        >
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="transition-colors p-1"
            style={{ color: "rgba(201,81,122,0.8)" }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <ShinyText
            text="ZK"
            speed={3}
            color="#C9517A"
            shineColor="#ffb3cc"
            spread={110}
            className="font-mono text-sm"
          />
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
                background:
                  "linear-gradient(135deg, rgba(20,8,28,0.95), rgba(15,5,20,0.95))",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(201,81,122,0.2)",
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
                      : { color: "rgba(201,81,122,0.6)" }
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
