import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageSquare, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Valid email required";
    if (!formData.subject.trim()) e.subject = "Subject is required";
    if (formData.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    toast("Message sent! I'll get back to you soon. ✦");
  };

  const contactCards = [
    { icon: Github, label: "GitHub", value: "zkofficial5", href: "https://github.com/zkofficial5" },
    { icon: Linkedin, label: "LinkedIn", value: "Zoya Khan", href: "https://www.linkedin.com/in/zoya-khan" },
    { icon: Mail, label: "Email", value: "zkofficial108@gmail.com", href: "mailto:zkofficial108@gmail.com" },
  ];

  const inputBase: React.CSSProperties = {
    backgroundColor: "#111118",
    border: "1px solid #2a2a36",
    outline: "none",
    color: "white",
    width: "100%",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    transition: "border-color 0.2s",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#C9517A";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#2a2a36";
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-16 relative z-[2]"
      style={{ background: "linear-gradient(to bottom, #0D0D14, #0A0A0A)" }}
    >
      {/* Blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,81,122,0.1), transparent 70%)", filter: "blur(80px)" }} />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08), transparent 70%)", filter: "blur(80px)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
            get in touch
          </p>
          <h2 className="font-display font-semibold text-foreground" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
            Let's Work
          </h2>
          <h2
            className="font-display font-semibold"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#C9517A", textShadow: "0 0 40px rgba(201,81,122,0.3)" }}
          >
            Together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="font-display text-2xl font-bold text-foreground">Get In Touch</h3>
            <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              I'm open to freelance projects, collaborations, and internship opportunities. Reach out and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-3 pt-2">
              {contactCards.map((card, i) => (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300"
                  style={{ backgroundColor: "#111118", borderColor: "#2a2a36" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(201,81,122,0.35)";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(201,81,122,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#2a2a36";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(201,81,122,0.12)" }}>
                    <card.icon size={17} style={{ color: "#C9517A" }} />
                  </div>
                  <div>
                    <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{card.label}</p>
                    <p className="font-mono text-sm text-foreground">{card.value}</p>
                  </div>
                </motion.a>
              ))}

              <div className="flex items-center gap-4 p-4 rounded-xl border"
                style={{ backgroundColor: "#111118", borderColor: "#2a2a36" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(201,81,122,0.12)" }}>
                  <MessageSquare size={17} style={{ color: "#C9517A" }} />
                </div>
                <div>
                  <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Response Time</p>
                  <p className="font-mono text-sm text-foreground">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Form — using div not form tag */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={inputBase}
                />
                {errors.name && <p className="text-xs mt-1.5" style={{ color: "#ef4444" }}>{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={inputBase}
                />
                {errors.email && <p className="text-xs mt-1.5" style={{ color: "#ef4444" }}>{errors.email}</p>}
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={inputBase}
              />
              {errors.subject && <p className="text-xs mt-1.5" style={{ color: "#ef4444" }}>{errors.subject}</p>}
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={handleFocus as React.FocusEventHandler<HTMLTextAreaElement>}
                onBlur={handleBlur as React.FocusEventHandler<HTMLTextAreaElement>}
                style={{ ...inputBase, resize: "none" }}
              />
              {errors.message && <p className="text-xs mt-1.5" style={{ color: "#ef4444" }}>{errors.message}</p>}
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl font-body font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 hover:brightness-110 disabled:opacity-60"
              style={{ backgroundColor: "#C9517A" }}
              onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.boxShadow = "0 0 25px rgba(201,81,122,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={17} className="animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
