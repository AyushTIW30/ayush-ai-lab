import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Code2 as GH, GitCommit, GitFork, Star } from "lucide-react";

const USERNAME = "AyushTIW30";

const langs = [
  { name: "Python", pct: 65, color: "bg-neon-blue" },
  { name: "JavaScript / TS", pct: 20, color: "bg-neon-purple" },
  { name: "HTML/CSS", pct: 10, color: "bg-neon-cyan" },
  { name: "Other", pct: 5, color: "bg-muted-foreground" },
];

// Static contribution-graph stylization (visual only)
function ContribGrid() {
  const cells = Array.from({ length: 7 * 26 });
  return (
    <div className="grid grid-flow-col grid-rows-7 gap-1">
      {cells.map((_, i) => {
        const intensity = Math.random();
        const op =
          intensity > 0.85 ? "bg-neon-purple/90" :
          intensity > 0.65 ? "bg-neon-purple/60" :
          intensity > 0.4 ? "bg-neon-purple/30" :
          intensity > 0.2 ? "bg-neon-purple/15" :
          "bg-white/5";
        return <div key={i} className={`w-2.5 h-2.5 rounded-sm ${op}`} />;
      })}
    </div>
  );
}

export function Github() {
  return (
    <section id="github" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="// open source"
          title="Code in the open."
          subtitle={`Public work at github.com/${USERNAME}.`}
        />
        <div className="grid lg:grid-cols-3 gap-4">
          <motion.a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass rounded-2xl p-6 hover:border-neon-purple/40 transition group"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <GH className="w-5 h-5" />
                <div>
                  <div className="font-semibold">@{USERNAME}</div>
                  <div className="text-xs text-muted-foreground">Contribution activity</div>
                </div>
              </div>
              <span className="text-xs text-neon-cyan group-hover:translate-x-1 transition">Visit →</span>
            </div>
            <div className="overflow-x-auto">
              <ContribGrid />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <Stat icon={GitCommit} label="Commits" value="100+" />
              <Stat icon={Star} label="Stars" value="—" />
              <Stat icon={GitFork} label="Repos" value="15+" />
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-semibold mb-5">Languages</h3>
            <div className="space-y-4">
              {langs.map((l) => (
                <div key={l.name}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span>{l.name}</span>
                    <span className="text-muted-foreground font-mono">{l.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full ${l.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/5 p-3 border border-white/5">
      <Icon className="w-4 h-4 text-neon-cyan mx-auto mb-1" />
      <div className="font-bold text-sm">{value}</div>
      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}