import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, GraduationCap, Briefcase, ScrollText } from "lucide-react";

const codePhases = ["< Zoya />", "{ developer }", "// writer", "[ builder ]", "~ creator"];

const techTicker = [
  "PHP", "Laravel", "React", "TypeScript", "MySQL", "Python",
  "Tailwind", "Git", "n8n", "Canva", "REST API", "Blade",
  "Composer", "Postman", "JavaScript", "HTML", "CSS",
];

const achievements = [
  { icon: Award, title: "Vice President, TECHNOVA 2k25", desc: "Co-led 1000+ attendees, 30+ colleges — as VP under the President" },
  { icon: GraduationCap, title: "Class Representative", desc: "Elected all years of undergraduate program" },
  { icon: Briefcase, title: "Internship, Infotech Prodigy", desc: "Multiple project submissions" },
  { icon: ScrollText, title: "Certifications", desc: "Python, AI, and emerging technologies" },
];

const About = () => {
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPhraseIdx((i) => (i + 1) % codePhases.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="about"
      className="py-28 px-6 md:px-16 relative z-[2]"
      style={{ background: "linear-gradient(to bottom, #0A0A0A, #0D0D14)" }}
    >
      {/* Blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,81,122,0.12), transparent 70%)", filter: "blur(80px)" }} />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1), transparent 70%)", filter: "blur(80px)" }} />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">

        {/* LEFT: Animated code box — natural height, not square */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {/* Cycling phrase card */}
          <div
            className="w-full rounded-2xl p-8 relative overflow-hidden"
            style={{
              backgroundColor: "rgba(10,10,20,0.7)",
              border: "1px solid rgba(201,81,122,0.2)",
              boxShadow: "0 0 40px rgba(201,81,122,0.07), inset 0 0 40px rgba(201,81,122,0.02)",
              minHeight: "160px",
            }}
          >
            {/* Inner top-right decorative dot */}
            <div className="absolute top-4 right-4 flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#C9517A", opacity: 0.5 }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#7C3AED", opacity: 0.4 }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#06B6D4", opacity: 0.3 }} />
            </div>

            <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "rgba(201,81,122,0.5)" }}>
              identity.ts
            </p>

            <div className="flex items-end gap-1 min-h-[56px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIdx}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="font-mono font-bold"
                  style={{
                    fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                    color: "#C9517A",
                    textShadow: "0 0 30px rgba(201,81,122,0.4)",
                  }}
                >
                  {codePhases[phraseIdx]}
                </motion.span>
              </AnimatePresence>
              <span
                className="inline-block w-[3px] h-7 mb-0.5 flex-shrink-0"
                style={{ backgroundColor: "#C9517A", animation: "blink-caret 1s step-end infinite" }}
              />
            </div>

            {/* Bottom gradient line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(201,81,122,0.4), transparent)" }}
            />
          </div>

          {/* Tech ticker strip */}
          <div
            className="w-full rounded-xl overflow-hidden py-3 relative"
            style={{
              backgroundColor: "rgba(10,10,20,0.7)",
              border: "1px solid rgba(201,81,122,0.12)",
            }}
          >
            <div className="animate-ticker flex whitespace-nowrap gap-0" style={{ width: "200%" }}>
              {[...techTicker, ...techTicker].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="mx-2 font-mono text-xs px-2.5 py-0.5 rounded-full flex-shrink-0"
                  style={{
                    color: "rgba(201,81,122,0.75)",
                    backgroundColor: "rgba(201,81,122,0.08)",
                    border: "1px solid rgba(201,81,122,0.15)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Text content — unchanged */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
            about me
          </p>
          <p className="font-body leading-relaxed mb-6 text-base md:text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
            I'm a full stack developer who builds on both ends of the stack — and I build the same way I approach writing, with intention, structure, and an eye for what someone actually needs. I care about the details, in code and in craft. Clean architecture, thoughtful design, and work that actually means something. So to sum it up — I write code, prose, and the occasional argument that semicolons are an art form.
          </p>

          <div className="h-px mb-6" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />

          {/* Achievement cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-3.5 rounded-xl border transition-all duration-300 cursor-default"
                style={{ backgroundColor: "rgba(10,10,20,0.7)", borderColor: "#2a2a36" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,81,122,0.4)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(201,81,122,0.12)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#2a2a36";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <a.icon size={17} style={{ color: "#C9517A" }} className="mb-2" />
                <p className="font-body text-sm font-medium text-foreground leading-snug">{a.title}</p>
                <p className="font-body text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Language badges */}
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-mono border" style={{ borderColor: "#2a2a36", color: "rgba(255,255,255,0.45)" }}>
              English (C1 Advanced)
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono border" style={{ borderColor: "#2a2a36", color: "rgba(255,255,255,0.45)" }}>
              Hindi
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
