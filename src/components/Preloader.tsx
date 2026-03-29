import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FULL_TEXT = "< Zoya Khan />";
const TYPING_SPEED = 80;
const HOLD_AFTER = 600;

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(FULL_TEXT.slice(0, i));
      if (i === FULL_TEXT.length) {
        clearInterval(interval);
        setTimeout(() => setDone(true), HOLD_AFTER);
      }
    }, TYPING_SPEED);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (done) {
      const t = setTimeout(onComplete, 700);
      return () => clearTimeout(t);
    }
  }, [done, onComplete]);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: "#0A0A0A" }}
        >
          <div className="text-center">
            <span
              className="font-mono text-3xl md:text-5xl font-bold"
              style={{ color: "#C9517A" }}
            >
              {displayed}
              <span
                className="inline-block w-[3px] h-8 md:h-12 ml-1 align-middle"
                style={{
                  backgroundColor: "#C9517A",
                  animation: "blink-caret 0.8s step-end infinite",
                }}
              />
            </span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Preloader;
