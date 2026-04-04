import React, { Suspense, useEffect, useRef, useState } from "react";
import { Application } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, AnimatePresence } from "framer-motion";
import StarBorder from "./StarBorder";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

gsap.registerPlugin(ScrollTrigger);

const SCENE_URL =
  "https://prod.spline.design/W8N2oe2walGq3Zm5/scene.splinecode";

const phrases = [
  "Configuring...",
  "npm run dev",
  "git coomit",
  "git add .",
  "git push",
];

const SplineBackground = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const containerRef = useRef<HTMLDivElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Rotate phrases every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleLoad = (_app: Application) => {
    const kill = () => {
      document.querySelectorAll('a[href*="spline"]').forEach((el) => {
        (el as HTMLElement).style.cssText = "display:none!important";
      });
      document.querySelectorAll("a").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (
          r.bottom > window.innerHeight - 80 &&
          r.right > window.innerWidth - 220
        ) {
          (el as HTMLElement).style.cssText = "display:none!important";
        }
      });
    };
    [0, 500, 1000, 2000, 3000].forEach((t) => setTimeout(kill, t));
  };

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      opacity: 0,
      ease: "power1.in",
      scrollTrigger: {
        trigger: "#about",
        start: "top 75%",
        end: "top 25%",
        scrub: 1,
      },
    });

    ScrollTrigger.create({
      trigger: "#about",
      start: "top 80%",
      onLeaveBack: () => {
        gsap.to(containerRef.current, {
          opacity: 1,
          duration: 0.7,
          ease: "power1.out",
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  if (isMobile) return null;

  return (
    <div
      ref={containerRef}
      className="fixed pointer-events-none z-[1]"
      style={{ top: 0, right: 0, width: "55vw", height: "100vh" }}
    >
      {/* Spline canvas */}
      <div className="w-full h-full" style={{ pointerEvents: "all" }}>
        <Suspense fallback={null}>
          <Spline
            scene={SCENE_URL}
            onLoad={handleLoad as any}
            style={{ width: "100%", height: "100%", background: "transparent" }}
          />
        </Suspense>
      </div>

      {/* Rotating phrase card — sits above watermark, bottom-right */}
      <div
        className="absolute pointer-events-none"
        style={{ bottom: "12px", right: "12px", zIndex: 20 }}
      >
        <StarBorder
          color="#C9517A"
          speed="5s"
          thickness={1}
          style={{
            backgroundColor: "rgba(10,5,15,0.75)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div
            style={{
              padding: "10px 18px",
              minWidth: "190px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                height: "20px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-xs font-medium"
                  style={{
                    color: "#C9517A",
                    position: "absolute",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {phrases[phraseIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </StarBorder>
      </div>

      {/* Left edge fade */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "120px",
          height: "100%",
          background: "linear-gradient(to right, #0A0A0A, transparent)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default SplineBackground;
