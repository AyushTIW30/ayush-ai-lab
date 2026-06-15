import { motion } from "framer-motion";

export function SectionHeader({
  tag,
  title,
  subtitle,
}: {
  tag: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 max-w-3xl"
    >
      <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neon-cyan mb-4">
        <span className="w-8 h-px bg-neon-cyan" />
        {tag}
      </div>
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-base sm:text-lg">{subtitle}</p>}
    </motion.div>
  );
}