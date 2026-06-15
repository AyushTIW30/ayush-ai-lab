import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Mail, Send, Link as LinkIcon, Code2 } from "lucide-react";

const AYUSH_EMAIL = "ayushtiwariatcoon@gmail.com";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submitMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name || "a recruiter"}`);
    const body = encodeURIComponent(
      `Hi Ayush,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}\n\nSent from ayush-ai-lab portfolio.`,
    );
    window.location.href = `mailto:${AYUSH_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="// transmission"
          title="Open a channel."
          subtitle="Send a prepared email from your mail app or connect with me directly."
        />
        <div className="grid lg:grid-cols-5 gap-4">
          <div className="lg:col-span-2 space-y-3">
            <ContactLink icon={Mail} label="Email" value={AYUSH_EMAIL} href={`mailto:${AYUSH_EMAIL}`} />
            <ContactLink icon={LinkIcon} label="LinkedIn" value="linkedin.com/in/ayush-tiwari-2301222ba" href="https://linkedin.com/in/ayush-tiwari-2301222ba" />
            <ContactLink icon={Code2} label="GitHub" value="github.com/AyushTIW30" href="https://github.com/AyushTIW30" />
            <ContactLink icon={LinkIcon} label="Portfolio" value="ayush-ai-lab" href="#top" />
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={submitMessage}
            className="lg:col-span-3 glass rounded-2xl p-6 space-y-4"
          >
            <div className="flex items-center gap-3 pb-3 border-b border-white/5">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground">terminal · mailto.compose</span>
            </div>
            <Field label="From" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            <Field label="Channel" placeholder="you@company.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div>
              <label className="text-[10px] font-mono uppercase tracking-wider text-neon-cyan">Payload</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What are you building?"
                className="mt-1 w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-neon-purple/50 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue text-primary-foreground text-sm font-medium hover:opacity-90 transition glow-purple"
            >
              <Send className="w-4 h-4" />
              Open email app
            </button>
            <p className="text-[11px] text-muted-foreground font-mono">
              This opens a pre-filled email instead of showing a fake success state.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-[10px] font-mono uppercase tracking-wider text-neon-cyan">{label}</label>
      <input required {...props} className="mt-1 w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-neon-purple/50 transition" />
    </div>
  );
}

function ContactLink({ icon: Icon, label, value, href }: { icon: React.ElementType; label: string; value: string; href: string }) {
  const isHash = href.startsWith("#");
  return (
    <a href={href} target={isHash ? undefined : "_blank"} rel={isHash ? undefined : "noreferrer"} className="glass rounded-2xl p-4 flex items-center gap-4 hover:border-neon-purple/40 transition group">
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-neon-purple/20 transition">
        <Icon className="w-5 h-5 text-neon-purple" />
      </div>
      <div>
        <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </a>
  );
}
