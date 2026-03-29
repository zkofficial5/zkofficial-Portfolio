import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface TagItem {
  name: string;
  color: string;
}

interface OtherProject {
  name: string;
  badge: "personal" | "freelance";
  tags: TagItem[];
  description: string;
}

const otherProjects: OtherProject[] = [
  {
    name: "Quillbase",
    badge: "personal",
    tags: [
      { name: "Laravel", color: "#FF2D20" },
      { name: "React", color: "#61DAFB" },
      { name: "MySQL", color: "#4479A1" },
      { name: "TypeScript", color: "#3178C6" },
    ],
    description: "A REST API for a blog platform with a live interactive documentation explorer built in React.",
  },
  {
    name: "VamPortfolio",
    badge: "freelance",
    tags: [
      { name: "React", color: "#61DAFB" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Tailwind CSS", color: "#06B6D4" },
    ],
    description: "A custom portfolio website designed and developed for a client as a freelance project.",
  },
  {
    name: "AllSocIt",
    badge: "personal",
    tags: [
      { name: "PHP", color: "#777BB4" },
      { name: "MySQL", color: "#4479A1" },
      { name: "JavaScript", color: "#F7DF1E" },
    ],
    description: "[ description coming soon ]",
  },
  {
    name: "Fluxcie",
    badge: "personal",
    tags: [
      { name: "React", color: "#61DAFB" },
      { name: "JavaScript", color: "#F7DF1E" },
    ],
    description: "[ description coming soon ]",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<OtherProject | null>(null);

  return (
    <section
      id="projects"
      className="py-24 px-4 md:px-8 max-w-6xl mx-auto"
      style={{ background: "linear-gradient(to bottom, #0A0A0A, #0D0D14)" }}
    >
      {/* FEATURED WORK */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">featured work</p>
        <h2
          className="font-display text-3xl md:text-4xl font-semibold text-foreground"
          style={{ textShadow: "0 0 40px rgba(201,81,122,0.2)" }}
        >
          things I've built
        </h2>
      </motion.div>

      <div className="space-y-8 mb-20">
        {/* Shieldnet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border transition-all duration-300 grid lg:grid-cols-2"
          style={{ backgroundColor: "#111118", borderColor: "#2a2a36" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(201,81,122,0.4)";
            e.currentTarget.style.boxShadow = "0 0 30px rgba(201,81,122,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#2a2a36";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Text */}
          <div className="p-8 md:p-10 flex flex-col justify-center gap-4">
            <span className="font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full border self-start" style={{ borderColor: "#C9517A33", color: "#C9517A" }}>
              Personal Project
            </span>
            <div className="border-l-4 pl-4" style={{ borderColor: "#C9517A" }}>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">Shieldnet</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-bold mb-1" style={{ color: "#C9517A" }}>Problem</p>
                <p className="font-body text-sm text-muted-foreground">Users have little awareness of what cybersecurity threats actually look like in practice.</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{ color: "#06B6D4" }}>Approach</p>
                <p className="font-body text-sm text-muted-foreground">Built with React and JavaScript, the tool presents real threat scenarios in an interactive, digestible format.</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{ color: "#7C3AED" }}>Impact</p>
                <p className="font-body text-sm text-muted-foreground">Helps non-technical users recognize common attack vectors and practice safer digital habits.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {[{ name: "React", color: "#61DAFB" }, { name: "JavaScript", color: "#F7DF1E" }].map((tag) => (
                <span key={tag.name} className="text-xs font-mono px-2.5 py-1 rounded-md" style={{ color: tag.color, backgroundColor: `${tag.color}15` }}>
                  {tag.name}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/zkofficial5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-mono transition-colors duration-300 mt-2 self-start px-4 py-2 rounded-full border"
              style={{ borderColor: "#C9517A", color: "#C9517A" }}
            >
              view on GitHub <ExternalLink size={14} />
            </a>
          </div>
          {/* Visual */}
          <div className="flex items-center justify-center p-8 min-h-[260px]" style={{ backgroundColor: "#0D0D14" }}>
            <svg viewBox="0 0 120 120" className="w-32 h-32 animate-float" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="50" stroke="#C9517A" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
              <circle cx="60" cy="60" r="30" stroke="#7C3AED" strokeWidth="2" opacity="0.7" />
              <path d="M60 30 L60 90 M30 60 L90 60" stroke="#C9517A" strokeWidth="1.5" opacity="0.4" />
              <circle cx="60" cy="60" r="6" fill="#C9517A" opacity="0.8" />
            </svg>
          </div>
        </motion.div>

        {/* Emwrap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border transition-all duration-300 grid lg:grid-cols-2"
          style={{ backgroundColor: "#111118", borderColor: "#2a2a36" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(201,81,122,0.4)";
            e.currentTarget.style.boxShadow = "0 0 30px rgba(201,81,122,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#2a2a36";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Visual (left for Emwrap) */}
          <div className="flex items-center justify-center p-8 min-h-[260px] order-2 lg:order-1" style={{ backgroundColor: "#0D0D14" }}>
            <svg viewBox="0 0 160 80" className="w-40 h-20 animate-float" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="35" fill="#C9517A" fontFamily="monospace" fontSize="18" opacity="0.8">{"{"}</text>
              <text x="30" y="55" fill="#7C3AED" fontFamily="monospace" fontSize="14">{'"wrap"'}</text>
              <text x="130" y="35" fill="#C9517A" fontFamily="monospace" fontSize="18" opacity="0.8">{"}"}</text>
              <rect x="25" y="15" width="110" height="50" rx="8" stroke="#C9517A" strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />
            </svg>
          </div>
          {/* Text */}
          <div className="p-8 md:p-10 flex flex-col justify-center gap-4 order-1 lg:order-2">
            <span className="font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full border self-start" style={{ borderColor: "#C9517A33", color: "#C9517A" }}>
              Personal Project
            </span>
            <div className="border-l-4 pl-4" style={{ borderColor: "#C9517A" }}>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">Emwrap</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-bold mb-1" style={{ color: "#C9517A" }}>Problem</p>
                <p className="font-body text-sm text-muted-foreground">Writing and testing HTML email templates is tedious without a reliable formatting utility.</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{ color: "#06B6D4" }}>Approach</p>
                <p className="font-body text-sm text-muted-foreground">Developed a React and TypeScript utility that wraps raw content into clean, production-ready email markup.</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{ color: "#7C3AED" }}>Impact</p>
                <p className="font-body text-sm text-muted-foreground">Speeds up email template development and reduces formatting errors for developers.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {[{ name: "React", color: "#61DAFB" }, { name: "TypeScript", color: "#3178C6" }].map((tag) => (
                <span key={tag.name} className="text-xs font-mono px-2.5 py-1 rounded-md" style={{ color: tag.color, backgroundColor: `${tag.color}15` }}>
                  {tag.name}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/zkofficial5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-mono transition-colors duration-300 mt-2 self-start px-4 py-2 rounded-full border"
              style={{ borderColor: "#C9517A", color: "#C9517A" }}
            >
              view on GitHub <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* OTHER PROJECTS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-20 mb-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">other noteworthy projects</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {otherProjects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            style={{ backgroundColor: "#111118", borderColor: "#2a2a36" }}
            onClick={() => setSelectedProject(project)}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(201,81,122,0.4)";
              e.currentTarget.style.boxShadow = "0 0 25px rgba(201,81,122,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#2a2a36";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: "linear-gradient(135deg, rgba(201,81,122,0.08), rgba(124,58,237,0.08))" }}
            />
            <div className="flex justify-between items-start mb-4 relative z-10">
              <h3 className="font-display text-xl font-semibold text-foreground">{project.name}</h3>
              <span
                className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border"
                style={{
                  borderColor: project.badge === "freelance" ? "#7C3AED80" : "#C9517A80",
                  color: project.badge === "freelance" ? "#7C3AED" : "#C9517A",
                }}
              >
                {project.badge}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3 relative z-10">
              {project.tags.map((tag) => (
                <span key={tag.name} className="text-[11px] font-mono px-2 py-0.5 rounded-md" style={{ color: tag.color, backgroundColor: `${tag.color}15` }}>
                  {tag.name}
                </span>
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground mb-5 relative z-10 leading-relaxed">
              {project.description}
            </p>
            <a
              href="https://github.com/zkofficial5"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1.5 text-sm font-mono transition-colors duration-300"
              style={{ color: "#C9517A" }}
              onClick={(e) => e.stopPropagation()}
            >
              view on GitHub <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="border" style={{ backgroundColor: "#111118", borderColor: "#2a2a36" }}>
          {selectedProject && (
            <>
              <DialogTitle className="font-display text-2xl font-bold text-foreground">
                {selectedProject.name}
              </DialogTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProject.tags.map((tag) => (
                  <span key={tag.name} className="text-xs font-mono px-2.5 py-1 rounded-md" style={{ color: tag.color, backgroundColor: `${tag.color}15` }}>
                    {tag.name}
                  </span>
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground mt-4 leading-relaxed">
                {selectedProject.description}
              </p>
              <a
                href="https://github.com/zkofficial5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-mono mt-4 px-4 py-2 rounded-full border self-start"
                style={{ borderColor: "#C9517A", color: "#C9517A" }}
              >
                view on GitHub <ExternalLink size={14} />
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
