export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div className="font-mono">© {new Date().getFullYear()} Ayush Tiwari · Built with intent.</div>
        <div className="font-mono">v1.0.0 · system.online</div>
      </div>
    </footer>
  );
}