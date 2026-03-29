import React, { Suspense, useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@/hooks/use-media-query";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

gsap.registerPlugin(ScrollTrigger);

const SCENE_URL =
  "https://prod.spline.design/W8N2oe2walGq3Zm5/scene.splinecode";

const SplineBackground = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const containerRef = useRef<HTMLDivElement>(null);

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

      {/* Watermark cover — paints over bottom-right corner with matching bg color */}
      <div
        style={{
          position: "absolute",
          backgroundColor: "#913162",
          bottom: 0,
          right: 0,
          width: "160px",
          height: "60px",
          background: "#0e0a14",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* Left edge fade — blends robot scene into hero text side */}
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
