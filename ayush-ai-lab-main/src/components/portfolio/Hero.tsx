import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Sparkles, Cpu, Database, Network, Zap } from "lucide-react";

const phrases = [
  "RAG Pipelines",
  "FastAPI Services",
  "LLM Integrations",
  "Scalable Backends",
  "AI Automation",
];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = phrases[i];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(current.slice(0, text.length + 1));
          if (text === current) setTimeout(() => setDel(true), 1200);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text === "") {
            setDel(false);
            setI((p) => (p + 1) % phrases.length);
          }
        }
      },
      del ? 40 : 70,
    );
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="neon-text">
      {text}
      <span className="animate-blink text-neon-purple">▍</span>
    </span>
  );
}

const stats = [
  { label: "Projects Built", value: "10+", icon: Cpu },
  { label: "APIs Developed", value: "20+", icon: Network },
  { label: "AI Systems", value: "3", icon: Sparkles },
  { label: "Technologies", value: "20+", icon: Database },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-neon-purple/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-neon-blue/20 blur-[120px] animate-pulse-glow" />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities · Open to relocate
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-5xl"
        >
          Building intelligent systems
          <br />
          that solve <span className="neon-text">real problems</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground"
        >
          AI + backend developer specializing in Python, FastAPI, Django, SQL, RAG pipelines,
          Gemini integrations, data processing, and automation. Building practical AI tools and deployable backend products —{" "}
          <Typer />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-primary-foreground font-medium text-sm hover:opacity-90 transition glow-purple"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </a>
          <a
            href="#resume"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass text-sm font-medium hover:bg-white/10 transition"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
          <a
            href="#chat"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass text-sm font-medium hover:bg-white/10 transition border border-neon-purple/30"
          >
            <Zap className="w-4 h-4 text-neon-purple" />
            Ask Ayush AI
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5 group hover:border-neon-purple/40 transition">
              <s.icon className="w-5 h-5 text-neon-cyan mb-3 group-hover:text-neon-purple transition" />
              <div className="text-3xl font-bold neon-text">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}