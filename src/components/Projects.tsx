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
  github: string;
}

const otherProjects: OtherProject[] = [
  {
    name: "Quillbase",
    badge: "personal",
    tags: [
      { name: "Laravel 11", color: "#FF2D20" },
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "MySQL", color: "#4479A1" },
      { name: "Sanctum", color: "#FF2D20" },
    ],
    description:
      "RESTful blog API with token-based auth, full CRUD for posts with tags and nested comments — paired with a custom React explorer UI for testing every endpoint directly in the browser.",
    github: "https://github.com/zkofficial5/Quillbase",
  },
  {
    name: "VamPortfolio",
    badge: "freelance",
    tags: [
      { name: "React 18", color: "#61DAFB" },
      { name: "Vite", color: "#646CFF" },
      { name: "CSS", color: "#1572B6" },
    ],
    description:
      "Dark, intimate single-page portfolio built for a client — card-based layout with section navigation, smooth fade transitions, and a deep crimson aesthetic. Features hash-based routing and inline SVG icons.",
    github: "https://github.com/zkofficial5/VamPortfolio",
  },
  {
    name: "AllSocIt",
    badge: "personal",
    tags: [
      { name: "TypeScript", color: "#3178C6" },
      { name: "Python", color: "#3776AB" },
    ],
    description:
      "A Digital Storyteller's Toolkit — platform for content creators to craft, compose, and share digital stories with rich narrative capabilities.",
    github: "https://github.com/zkofficial5/AllSocIt",
  },
  {
    name: "Fluxcie",
    badge: "personal",
    tags: [
      { name: "Laravel 11", color: "#FF2D20" },
      { name: "React 18", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
    ],
    description:
      "Sophisticated real-time communication platform with messaging, file sharing, voice messages, friend requests, and social networking. Glassmorphism UI with Framer Motion animations and token-based auth.",
    github: "https://github.com/zkofficial5/Fluxcie",
  },
];

const shieldnetTags = [
  { name: "Python", color: "#3776AB" },
  { name: "FastAPI", color: "#009688" },
  { name: "React 18", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "scikit-learn", color: "#F97316" },
  { name: "SQLite", color: "#003B57" },
];

const emwrapTags = [
  { name: "Laravel 11", color: "#FF2D20" },
  { name: "React 18", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "OpenAI API", color: "#10A37F" },
  { name: "MySQL", color: "#4479A1" },
  { name: "Tailwind CSS", color: "#06B6D4" },
];

const TagList = ({ tags }: { tags: TagItem[] }) => (
  <div className="flex flex-wrap gap-2 mt-2">
    {tags.map((tag) => (
      <span
        key={tag.name}
        className="text-xs font-mono px-2.5 py-1 rounded-md"
        style={{ color: tag.color, backgroundColor: `${tag.color}15` }}
      >
        {tag.name}
      </span>
    ))}
  </div>
);

const GithubLink = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 text-sm font-mono transition-all duration-300 mt-2 self-start px-4 py-2 rounded-full border hover:scale-105"
    style={{ borderColor: "#C9517A", color: "#C9517A" }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.boxShadow = "0 0 16px rgba(201,81,122,0.4)")
    }
    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
  >
    view on GitHub <ExternalLink size={14} />
  </a>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<OtherProject | null>(
    null,
  );

  return (
    <section
      id="projects"
      className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative z-[2]"
      style={{ background: "linear-gradient(to bottom, #0A0A0A, #0D0D14)" }}
    >
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
          featured work
        </p>
        <h2
          className="font-display text-3xl md:text-4xl font-semibold text-foreground"
          style={{ textShadow: "0 0 40px rgba(201,81,122,0.2)" }}
        >
          things I've built
        </h2>
      </motion.div>

      {/* Featured cards */}
      <div className="space-y-8 mb-20">
        {/* ShieldNet — info left, image right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col lg:flex-row"
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
          {/* Info div */}
          <div className="p-8 md:p-10 flex flex-col justify-center gap-4 lg:w-1/2">
            <span
              className="font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full border self-start"
              style={{ borderColor: "#C9517A33", color: "#C9517A" }}
            >
              Personal Project
            </span>
            <div className="border-l-4 pl-4" style={{ borderColor: "#C9517A" }}>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                ShieldNet
              </h3>
            </div>
            <div className="space-y-3">
              <div>
                <p
                  className="text-sm font-bold mb-1"
                  style={{ color: "#C9517A" }}
                >
                  Problem
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Users need real-time protection against malicious URLs — with
                  a unified dashboard for monitoring threats and historical
                  analysis of scanned links.
                </p>
              </div>
              <div>
                <p
                  className="text-sm font-bold mb-1"
                  style={{ color: "#06B6D4" }}
                >
                  Approach
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Custom-trained Random Forest classifier on 650k+ URLs deployed
                  via FastAPI, integrated with a React dashboard and Chrome
                  extension for seamless threat detection.
                </p>
              </div>
              <div>
                <p
                  className="text-sm font-bold mb-1"
                  style={{ color: "#7C3AED" }}
                >
                  Impact
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  94% accuracy malware and phishing detection across web,
                  dashboard, and Chrome extension — with instant threat alerts
                  and comprehensive scan history.
                </p>
              </div>
            </div>
            <TagList tags={shieldnetTags} />
            <GithubLink href="https://github.com/zkofficial5/ShieldNet-c" />
          </div>

          {/* Image div — same bg, image fully visible as rectangle */}
          <div
            className="lg:w-1/2 flex items-center justify-center p-6"
            style={{ backgroundColor: "#111118" }}
          >
            <img
              src="/assets/shieldnet.png"
              alt="ShieldNet screenshot"
              className="w-full h-auto rounded-xl"
              style={{
                border: "1px solid rgba(201,81,122,0.15)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        </motion.div>

        {/* Emwrap — image left, info right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col lg:flex-row"
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
          {/* Image div — left side */}
          <div
            className="lg:w-1/2 flex items-center justify-center p-6 order-2 lg:order-1"
            style={{ backgroundColor: "#111118" }}
          >
            <img
              src="/assets/emwrap.png"
              alt="Emwrap screenshot"
              className="w-full h-auto rounded-xl"
              style={{
                border: "1px solid rgba(201,81,122,0.15)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              }}
            />
          </div>

          {/* Info div — right side */}
          <div className="p-8 md:p-10 flex flex-col justify-center gap-4 lg:w-1/2 order-1 lg:order-2">
            <span
              className="font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full border self-start"
              style={{ borderColor: "#C9517A33", color: "#C9517A" }}
            >
              Personal Project
            </span>
            <div className="border-l-4 pl-4" style={{ borderColor: "#C9517A" }}>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Emwrap
              </h3>
            </div>
            <div className="space-y-3">
              <div>
                <p
                  className="text-sm font-bold mb-1"
                  style={{ color: "#C9517A" }}
                >
                  Problem
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Teams lack an intelligent, collaborative expense management
                  system that enforces spending controls while delivering
                  natural-language financial intelligence.
                </p>
              </div>
              <div>
                <p
                  className="text-sm font-bold mb-1"
                  style={{ color: "#06B6D4" }}
                >
                  Approach
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  AI-first architecture integrating GPT-4o-mini across four
                  workflows: conversational financial assistant, semantic
                  categorization, proactive spending insights, and AI-augmented
                  report summaries.
                </p>
              </div>
              <div>
                <p
                  className="text-sm font-bold mb-1"
                  style={{ color: "#7C3AED" }}
                >
                  Impact
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Isolated multi-tenant workspaces with role-based access,
                  category-level budget tracking, and CSV export — all surfaced
                  through a natural-language financial interface.
                </p>
              </div>
            </div>
            <TagList tags={emwrapTags} />
            <GithubLink href="https://github.com/zkofficial5/Emwrap" />
          </div>
        </motion.div>
      </div>

      {/* Other projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-20 mb-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          other noteworthy projects
        </p>
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
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(201,81,122,0.08), rgba(124,58,237,0.08))",
              }}
            />
            <div className="flex justify-between items-start mb-4 relative z-10">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {project.name}
              </h3>
              <span
                className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border"
                style={{
                  borderColor:
                    project.badge === "freelance" ? "#7C3AED80" : "#C9517A80",
                  color: project.badge === "freelance" ? "#7C3AED" : "#C9517A",
                }}
              >
                {project.badge}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3 relative z-10">
              {project.tags.map((tag) => (
                <span
                  key={tag.name}
                  className="text-[11px] font-mono px-2 py-0.5 rounded-md"
                  style={{
                    color: tag.color,
                    backgroundColor: `${tag.color}15`,
                  }}
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground mb-5 relative z-10 leading-relaxed">
              {project.description}
            </p>
            <a
              href={project.github}
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
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent
          className="border"
          style={{ backgroundColor: "#111118", borderColor: "#2a2a36" }}
        >
          {selectedProject && (
            <>
              <DialogTitle className="font-display text-2xl font-bold text-foreground">
                {selectedProject.name}
              </DialogTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="text-xs font-mono px-2.5 py-1 rounded-md"
                    style={{
                      color: tag.color,
                      backgroundColor: `${tag.color}15`,
                    }}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground mt-4 leading-relaxed">
                {selectedProject.description}
              </p>
              <a
                href={selectedProject.github}
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
