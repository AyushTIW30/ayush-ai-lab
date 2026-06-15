import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Brain, Code2, Layers, Workflow } from "lucide-react";

const pillars = [
  { icon: Code2, title: "Backend Systems", desc: "Production-grade APIs with Python and FastAPI. Auth, caching, rate-limits, clean service boundaries." },
  { icon: Brain, title: "AI & RAG", desc: "Retrieval pipelines, embeddings, vector search, prompt orchestration, and LLM integrations that ship to users." },
  { icon: Workflow, title: "Automation", desc: "Resilient scrapers, ETL flows, scheduled jobs, and intelligent agents that replace manual work." },
  { icon: Layers, title: "Data Engineering", desc: "Schema design, query tuning, Pandas/NumPy pipelines, and analytics surfaces backed by SQL." },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="// about" title="An engineer who ships intelligent systems." />
        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm <span className="text-foreground font-medium">Ayush Tiwari</span> — a B.Tech IT graduate from RGPV (CGPA: 7.68), focused on practical AI/backend products, automation workflows, and production-style systems.
            </p>
            <p>
              My work spans Python, FastAPI, Django, Node.js, SQL, and the backend stack: clean APIs,
              well-modeled databases, and pragmatic system design. On top of that I build AI surfaces —
              RAG pipelines, semantic search, LLM orchestration, and intelligent agents.
            </p>
            <p>
              I care about <span className="text-neon-cyan">clean APIs</span>,{" "}
              <span className="text-neon-purple">real-world reliability</span>, and shipping code that survives
              real users — not demos.
            </p>
          </motion.div>
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 hover:border-neon-purple/40 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center mb-4 group-hover:glow-purple transition">
                  <p.icon className="w-5 h-5 text-neon-purple" />
                </div>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}