import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative z-[2]" style={{ backgroundColor: "#0A0A0A" }}>
      {/* Rose gradient line */}
      <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, #C9517A, #7C3AED, transparent)" }} />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <motion.p
              className="font-display text-xl font-semibold"
              style={{ color: "#C9517A" }}
            >
              ✦ Zoya Khan
            </motion.p>
            <p className="font-body text-sm text-muted-foreground italic">
              between syntax and storytelling
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/zkofficial5" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/zoya-khan" },
                { icon: Mail, href: "mailto:zkofficial108@gmail.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300"
                  style={{ borderColor: "#2a2a36" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(201,81,122,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#2a2a36";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Quick Links</p>
            <div className="space-y-2">
              {["about", "skills", "projects", "contact"].map((id) => (
                <div key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm capitalize font-body"
                    style={{ color: undefined }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#C9517A"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = ""; }}
                  >
                    {id}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Services</p>
            <div className="space-y-2">
              {["Web Development", "Laravel & PHP", "Frontend Dev", "Freelance Projects"].map((s) => (
                <p key={s} className="font-body text-sm text-muted-foreground">{s}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t text-center" style={{ borderColor: "#2a2a36" }}>
          <p className="font-mono text-xs text-muted-foreground">
            © 2025 Zoya Khan · Built with React · ✦
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
