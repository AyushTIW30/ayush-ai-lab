import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Monitor, Server, GitBranch, Database, Brain, Activity } from "lucide-react";

const layers = [
  { id: "frontend", icon: Monitor, name: "Frontend", desc: "Type-safe UI built with React + TanStack, talking to APIs over typed contracts." },
  { id: "api", icon: Server, name: "API Layer", desc: "FastAPI services with validation, auth, rate-limits, and OpenAPI-first contracts." },
  { id: "logic", icon: GitBranch, name: "Business Logic", desc: "Pure, testable services with clear boundaries and explicit failure modes." },
  { id: "db", icon: Database, name: "Database", desc: "Well-modeled SQL schemas, careful indexing, and migrations baked into CI." },
  { id: "ai", icon: Brain, name: "AI Layer", desc: "RAG pipelines, embeddings, vector search, and LLM orchestration with guardrails." },
  { id: "obs", icon: Activity, name: "Monitoring", desc: "Structured logs, metrics, and traces so failures surface before users do." },
];

export function Architecture() {
  const [active, setActive] = useState(layers[0].id);
  const current = layers.find((l) => l.id === active)!;

  return (
    <section id="architecture" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="// systems"
          title="How I build systems."
          subtitle="Click any layer to see how I approach it in production."
        />
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-2">
            {layers.map((l, i) => (
              <motion.button
                key={l.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActive(l.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border transition text-left ${
                  active === l.id
                    ? "glass border-neon-purple/50 glow-purple"
                    : "border-white/5 hover:border-white/20 hover:bg-white/5"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${active === l.id ? "bg-neon-purple/20" : "bg-white/5"}`}>
                  <l.icon className={`w-5 h-5 ${active === l.id ? "text-neon-purple" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <div className="font-medium text-sm">{l.name}</div>
                  <div className="text-[10px] font-mono text-muted-foreground">layer.{l.id}</div>
                </div>
              </motion.button>
            ))}
          </div>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-3 glass rounded-2xl p-8 relative overflow-hidden min-h-[300px]"
          >
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono text-neon-cyan mb-4">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                {current.id}.layer
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <current.icon className="w-6 h-6 text-neon-purple" />
                {current.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{current.desc}</p>

              <pre className="mt-6 text-xs font-mono text-muted-foreground bg-black/30 rounded-lg p-4 border border-white/5 overflow-x-auto">
{`> system.inspect("${current.id}")
  status:  operational
  uptime:  99.97%
  owned:   ayush.tiwari`}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}