import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Award, Download, FileText, Eye } from "lucide-react";

const certs = [
  { name: "IBM Prompt Engineering for Everyone", org: "IBM / Coursera" },
  { name: "Microsoft AI-900: Azure AI Fundamentals", org: "Microsoft" },
  { name: "Python for Data Science, AI & Development", org: "IBM / Coursera" },
];

const highlights = [
  "B.Tech Information Technology graduate from RGPV — 2026, CGPA 7.68",
  "Built practical AI/backend projects using Python, FastAPI, Django, Streamlit, SQL, and Gemini API",
  "Hands-on with RAG pipelines, LLM integrations, prompt engineering, n8n automation, and API workflows",
  "Built AI Data Analytics App — NL → Pandas → Plotly charts, live on Streamlit Cloud",
  "Built backend/web projects with contact forms, database models, API design, and deployment practice",
  "Open to AI Backend Developer, Python Developer, and Backend Developer fresher roles",
];

export function Resume() {
  return (
    <section id="resume" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="// resume"
          title="Interactive resume."
          subtitle="Preview, download, and certifications — all in one place."
        />
        <div className="grid lg:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-5">
              <FileText className="w-5 h-5 text-neon-purple" />
              <h3 className="font-semibold">Highlights</h3>
            </div>
            <ul className="space-y-3 text-sm">
              {highlights.map((h) => (
                <li key={h} className="flex gap-3 text-muted-foreground">
                  <span className="text-neon-cyan font-mono mt-0.5">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue text-primary-foreground text-sm font-medium hover:opacity-90 transition">
                <Download className="w-4 h-4" /> Download PDF
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium hover:bg-white/10 transition">
                <Eye className="w-4 h-4" /> Preview
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <Award className="w-5 h-5 text-neon-cyan" />
              <h3 className="font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certs.map((c) => (
                <li key={c.name} className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-sm font-medium">{c.name}</div>
                  <div className="text-[11px] text-muted-foreground font-mono">{c.org}</div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}