import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    const addHoverListeners = () => {
      document
        .querySelectorAll("a, button, [role='button'], input, textarea")
        .forEach((el) => {
          el.addEventListener("mouseenter", () => setHovering(true));
          el.addEventListener("mouseleave", () => setHovering(false));
        });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      observer.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[99999]"
      animate={{
        x: pos.x,
        y: pos.y,
        scale: clicking ? 0.8 : hovering ? 1.3 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 35,
        mass: 0.3,
      }}
      style={{ top: 0, left: 0 }}
    >
      {/* Arrow SVG */}
      <svg
        width="22"
        height="26"
        viewBox="0 0 22 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: "translate(-2px, -2px)",
          filter: hovering
            ? "drop-shadow(0 0 8px rgba(201,81,122,1)) drop-shadow(0 0 16px rgba(201,81,122,0.7))"
            : "drop-shadow(0 0 4px rgba(201,81,122,0.7)) drop-shadow(0 0 8px rgba(201,81,122,0.4))",
          transition: "filter 0.2s ease",
        }}
      >
        {/* Arrow body filled with rose */}
        <path
          d="M3 2L3 20L8.5 15L12 22L14.5 21L11 14L18 14L3 2Z"
          fill="#C9517A"
          stroke="#0A0A0A"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
};

export default CustomCursor;
