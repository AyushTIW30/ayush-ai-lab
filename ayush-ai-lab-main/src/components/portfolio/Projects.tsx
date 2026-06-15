import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight, Brain, Shield, Sparkles, ExternalLink } from "lucide-react";

const projects = [
  {
    flagship: true,
    icon: Brain,
    name: "AI Data Analytics App",
    tagline: "Talk to your data. Get answers, charts, and insight.",
    problem: "Analysts waste hours wrangling CSVs and writing one-off scripts to answer simple questions.",
    solution: "An AI-powered workbench where users upload CSV data and query it in natural language. The system generates Pandas operations, executes them safely, and returns interactive charts plus narrative insight.",
    architecture: ["File Upload", "NL → Pandas", "Safe Executor", "Auto-visualization (Plotly)", "Insight Summary"],
    stack: ["Python", "Streamlit", "Pandas", "Plotly", "LLMs"],
    impact: "Designed to turn ad-hoc CSV analysis into quick conversational answers and visual insights.",
    link: "https://share.streamlit.io/ayush-tiwaris-projects/ai-data-analytics-app",
  },
  {
    icon: Sparkles,
    name: "Autonomous AI Communication System",
    tagline: "Multi-channel AI agents with persistent memory.",
    problem: "Manual communication workflows are slow and don't scale.",
    solution: "A suite of AI agents: an Email AI Agent for auto-classification and replies, a Telegram Bot with conversation memory, and a Web Chat Interface — all powered by LLMs and n8n automation.",
    architecture: ["Email Classifier", "LLM Reply Generator", "Telegram Bot + Memory", "Web Chat UI", "n8n Orchestration"],
    stack: ["Python", "n8n", "LLMs", "Telegram API", "FastAPI"],
    impact: "A practical automation concept for faster multi-channel communication workflows.",
  },
  {
    icon: Shield,
    name: "Loan Approval Prediction",
    tagline: "ML model for credit risk classification.",
    problem: "Manual loan review is slow and inconsistent.",
    solution: "A machine learning pipeline that trains classification models on historical loan data, evaluates feature importance, and exposes predictions via a Streamlit interface.",
    architecture: ["Data Cleaning", "Feature Engineering", "Model Training", "Evaluation", "Streamlit UI"],
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    impact: "End-to-end ML workflow for binary classification practice with a usable Streamlit interface.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="// featured work"
          title="Systems I've built."
          subtitle="Projects that show how I think about backend, AI, data, and practical product building."
        />

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`glass rounded-3xl p-6 sm:p-10 relative overflow-hidden group ${p.flagship ? "border-neon-purple/40" : ""}`}
            >
              {p.flagship && (
                <div className="absolute top-6 right-6 text-[10px] font-mono px-2 py-1 rounded-md bg-neon-purple/15 text-neon-purple border border-neon-purple/30">
                  FLAGSHIP
                </div>
              )}
              <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-neon-purple/10 blur-3xl group-hover:bg-neon-purple/20 transition" />

              <div className="relative grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center mb-4 border border-neon-purple/30">
                    <p.icon className="w-6 h-6 text-neon-purple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.tagline}</p>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-xs text-neon-cyan hover:text-neon-purple transition"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Project
                    </a>
                  )}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {p.stack.map((s) => (
                      <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-5 text-sm">
                  <Row label="Problem" value={p.problem} />
                  <Row label="Solution" value={p.solution} />
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-neon-cyan mb-2">Architecture</div>
                    <div className="flex flex-wrap items-center gap-2">
                      {p.architecture.map((a, ai) => (
                        <span key={a} className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs">{a}</span>
                          {ai < p.architecture.length - 1 && <ArrowUpRight className="w-3 h-3 text-neon-purple rotate-45" />}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Row label="Impact" value={p.impact} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-mono uppercase tracking-wider text-neon-cyan mb-1">{label}</div>
      <p className="text-muted-foreground leading-relaxed">{value}</p>
    </div>
  );
}