import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#architecture", label: "Systems" },
  { href: "#experience", label: "Journey" },
  { href: "#chat", label: "Ask AI" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="glass rounded-full px-3 py-2 flex items-center gap-1 max-w-3xl w-full">
        <a href="#top" className="flex items-center gap-2 px-3 py-1.5 rounded-full">
          <Terminal className="w-4 h-4 text-neon-purple" />
          <span className="font-semibold text-sm tracking-tight">ayush.dev</span>
        </a>
        <div className="hidden md:flex items-center gap-1 ml-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full hover:bg-white/5 transition"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="md:ml-2 ml-auto text-xs font-medium px-4 py-1.5 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue text-primary-foreground hover:opacity-90 transition"
        >
          Hire me
        </a>
      </nav>
    </motion.header>
  );
}