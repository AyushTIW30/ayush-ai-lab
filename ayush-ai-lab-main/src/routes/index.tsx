import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Architecture } from "@/components/portfolio/Architecture";
import { Experience } from "@/components/portfolio/Experience";
import { Github } from "@/components/portfolio/Github";
import { AskAyush } from "@/components/portfolio/AskAyush";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayush Tiwari — AI & Backend Engineer | Python, FastAPI, RAG" },
      { name: "description", content: "B.Tech IT graduate and AI + backend developer building practical tools with Python, FastAPI, Django, RAG pipelines, Gemini API, SQL, and automation." },
      { property: "og:title", content: "Ayush Tiwari — AI & Backend Engineer" },
      { property: "og:description", content: "AI + backend portfolio: Python · FastAPI · Django · RAG · Gemini API · SQL · Automation." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ayush Tiwari",
          jobTitle: "AI + Backend Developer",
          url: "/",
          email: "mailto:ayushtiwariatcoon@gmail.com",
          alumniOf: { "@type": "CollegeOrUniversity", name: "RGPV" },
          sameAs: ["https://github.com/AyushTIW30", "https://linkedin.com/in/ayush-tiwari-2301222ba"],
          knowsAbout: ["Python", "FastAPI", "Django", "Node.js", "RAG", "Gemini API", "SQL", "Backend Engineering", "n8n"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Architecture />
      <Experience />
      <Github />
      <AskAyush />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
