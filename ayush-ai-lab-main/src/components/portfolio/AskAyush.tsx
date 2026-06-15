import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Send, Sparkles, User } from "lucide-react";

type Msg = { role: "user" | "ai"; text: string };

const suggestions = [
  "Tell me about Ayush",
  "What projects has he built?",
  "Explain his AI skills",
  "Why should I hire him?",
];

export function AskAyush() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "ai",
      text: "I'm Ayush AI. Ask me about Ayush's skills, projects, education, contact details, or why he is a strong fresher candidate for AI/backend roles.",
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);

  async function send(q: string) {
    const question = q.trim();
    if (!question || thinking) return;

    setMessages((m) => [...m, { role: "user", text: question }]);
    setInput("");
    setThinking(true);

    try {
      const response = await fetch("/api/ask-ayush", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });

      const data = (await response.json().catch(() => null)) as { answer?: string; error?: string } | null;
      if (!response.ok || !data?.answer) {
        throw new Error(data?.error || "The AI endpoint is not available right now.");
      }

      setMessages((m) => [...m, { role: "ai", text: data.answer ?? "" }]);
    } catch (error) {
      console.error(error);
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: "I could not reach Ayush AI right now. Please check that GEMINI_API_KEY is configured on the server, or contact Ayush directly at ayushtiwariatcoon@gmail.com.",
        },
      ]);
    } finally {
      setThinking(false);
    }
  }

  return (
    <section id="chat" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          tag="// ask ayush ai"
          title="Recruiters: ask me anything."
          subtitle="A Gemini-powered assistant grounded on Ayush's portfolio data."
        />
        <div className="glass rounded-3xl overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-3 border-b border-white/5 bg-black/30">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            </div>
            <span className="text-xs font-mono text-muted-foreground">ayush-ai · gemini.secure</span>
            <span className="ml-auto text-[10px] font-mono text-green-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> online
            </span>
          </div>

          <div className="p-5 sm:p-6 space-y-4 max-h-[420px] overflow-y-auto">
            {messages.map((m, i) => (
              <motion.div
                key={`${m.role}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${m.role === "user" ? "justify-end" : ""}`}
              >
                {m.role === "ai" && (
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm ${
                    m.role === "user"
                      ? "bg-gradient-to-br from-neon-purple to-neon-blue text-primary-foreground"
                      : "bg-white/5 border border-white/10 text-foreground"
                  }`}
                >
                  {m.text}
                </div>
                {m.role === "user" && (
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}
            {thinking && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-white animate-pulse" />
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-muted-foreground">
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-bounce [animation-delay:.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-bounce [animation-delay:.3s]" />
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="px-5 pb-5 space-y-3">
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  disabled={thinking}
                  onClick={() => send(s)}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-neon-purple/40 hover:text-neon-purple disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  {s}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex gap-2 glass rounded-xl p-1.5"
            >
              <input
                value={input}
                disabled={thinking}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Ayush's projects, stack, experience..."
                className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={thinking || !input.trim()}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue text-primary-foreground text-sm font-medium flex items-center gap-2 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
