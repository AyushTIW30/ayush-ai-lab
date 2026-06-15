import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    title: "Backend",
    color: "from-neon-purple to-fuchsia-500",
    items: ["Python", "FastAPI", "Django", "Node.js", "REST APIs", "Authentication", "System Design"],
  },
  {
    title: "AI & LLMs",
    color: "from-fuchsia-500 to-neon-purple",
    items: ["RAG Pipelines", "Gemini API", "LLM Integrations", "Prompt Engineering", "RAG", "Vector Search", "AI Agents", "AI Automation"],
  },
  {
    title: "Databases",
    color: "from-neon-blue to-cyan-400",
    items: ["SQL", "MySQL", "SQLite", "PostgreSQL basics", "Schema Design"],
  },
  {
    title: "Data",
    color: "from-cyan-400 to-neon-blue",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Excel", "ETL", "Data Processing"],
  },
  {
    title: "Tools & DevOps",
    color: "from-neon-purple to-neon-blue",
    items: ["Git", "GitHub", "Postman", "VS Code", "n8n", "Streamlit"],
  },
  {
    title: "Frontend (Basics)",
    color: "from-neon-cyan to-neon-blue",
    items: ["React", "HTML/CSS", "JavaScript"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="// stack"
          title="The tools I reach for."
          subtitle="Sharpened over years of building APIs, data pipelines, and AI systems end-to-end."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${g.color} opacity-10 blur-2xl group-hover:opacity-30 transition`} />
              <h3 className="font-mono text-xs uppercase tracking-wider text-neon-cyan mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-neon-purple/40 hover:bg-neon-purple/10 hover:text-neon-purple transition cursor-default"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}