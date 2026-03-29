import { motion } from "framer-motion";
import { Server, Monitor, Wrench, Code2, Palette, Users } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface SkillItem {
  name: string;
  color?: string;
}

interface SkillCard {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: SkillItem[];
}

const skillCards: SkillCard[] = [
  {
    title: "Backend",
    icon: Server,
    color: "#C9517A",
    skills: [
      { name: "PHP", color: "#777BB4" },
      { name: "Laravel", color: "#FF2D20" },
      { name: "Python", color: "#3776AB" },
      { name: "MySQL", color: "#4479A1" },
      { name: "REST API Design", color: "#C9517A" },
      { name: "MVC Architecture", color: "#C9517A" },
      { name: "Blade Templates", color: "#FF2D20" },
      { name: "Composer", color: "#777BB4" },
    ],
  },
  {
    title: "Frontend",
    icon: Monitor,
    color: "#3B82F6",
    skills: [
      { name: "React", color: "#61DAFB" },
      { name: "React Native", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "HTML", color: "#E34F26" },
      { name: "CSS", color: "#1572B6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Framer Motion", color: "#3B82F6" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "#06B6D4",
    skills: [
      { name: "Git", color: "#F05032" },
      { name: "GitHub", color: "#888888" },
      { name: "Vercel", color: "#888888" },
      { name: "n8n", color: "#EA4B71" },
      { name: "Postman", color: "#FF6C37" },
      { name: "XAMPP", color: "#06B6D4" },
      { name: "EmailJS", color: "#06B6D4" },
    ],
  },
  {
    title: "Other Languages",
    icon: Code2,
    color: "#F97316",
    skills: [
      { name: "C++", color: "#00599C" },
      { name: "Java", color: "#ED8B00" },
    ],
  },
  {
    title: "Design & Creative",
    icon: Palette,
    color: "#7C3AED",
    skills: [
      { name: "Canva", color: "#00C4CC" },
      { name: "Content Writing", color: "#C9517A" },
      { name: "Video Editing", color: "#7C3AED" },
      { name: "CapCut", color: "#7C3AED" },
      { name: "Graphic Design", color: "#f9a8d4" },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "#10B981",
    skills: [
      { name: "Leadership" },
      { name: "Communication" },
      { name: "Critical Thinking" },
      { name: "Teamwork" },
      { name: "Creative Writing" },
      { name: "Event Management" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative z-[2]" style={{ backgroundColor: "#0A0A0A" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">tech stack</p>
        <h2
          className="font-display text-3xl md:text-4xl font-semibold text-foreground"
          style={{ textShadow: "0 0 40px rgba(201,81,122,0.2)" }}
        >
          what I build with
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCards.map((card, i) => {
          const IconComp = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border transition-all duration-300"
              style={{ backgroundColor: "#111118", borderColor: "#2a2a36" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = card.color + "66";
                e.currentTarget.style.boxShadow = `0 0 25px ${card.color}20`;
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2a2a36";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-4">
                <IconComp size={20} style={{ color: card.color }} />
                <h3 className="font-display text-lg font-semibold" style={{ color: card.color }}>
                  {card.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {card.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-muted-foreground border transition-colors duration-200 hover:text-foreground"
                    style={{ borderColor: "#2a2a36", backgroundColor: "#0D0D14" }}
                  >
                    {skill.color && card.title !== "Soft Skills" && (
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: skill.color }}
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
