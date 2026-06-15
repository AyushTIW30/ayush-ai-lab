import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const timeline = [
  {
    year: "2025 — 2026",
    title: "AI Systems & RAG Engineering",
    body: "Built hands-on RAG/LLM tools, Gemini-integrated assistants, semantic search experiments, automation workflows, and AI-powered data utilities.",
  },
  {
    year: "2024 — 2025",
    title: "Backend & APIs",
    body: "Built FastAPI/Django backend projects, REST APIs, contact/database flows, authentication practice, and SQL-backed applications.",
  },
  {
    year: "Dec 2024",
    title: "MERN Stack Teaching Intern — CRISP VITS Satna",
    body: "15-day teaching internship covering MERN stack fundamentals for students.",
  },
  {
    year: "2023 — 2024",
    title: "Foundations",
    body: "Deep dive into Python, SQL, web development, and ML fundamentals. First serious projects shipped: AI data analytics app, Django portfolio, and ML models.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader tag="// journey" title="Engineering journey." />
        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-neon-purple via-neon-blue to-transparent" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-background border-2 border-neon-purple flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-neon-cyan mb-1">{t.year}</div>
                <h3 className="font-semibold text-lg mb-1">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}