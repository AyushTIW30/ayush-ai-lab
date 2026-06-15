import "./lib/error-capture";

import process from "node:process";
import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

type RuntimeEnv = {
  GEMINI_API_KEY?: string;
  GROQ_API_KEY?: string;
  GEMINI_MODEL?: string;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

const AYUSH_KNOWLEDGE_BASE = `
Name: Ayush Tiwari
Email: ayushtiwariatcoon@gmail.com
GitHub: https://github.com/AyushTIW30
LinkedIn: https://linkedin.com/in/ayush-tiwari-2301222ba
Education: B.Tech in Information Technology, RGPV, 2026 graduate, CGPA 8.01.
Positioning: AI + Backend Developer / Python Developer / fresher with practical AI and backend projects.
Core skills: Python, FastAPI, Django, Node.js, React basics, SQL, MySQL, SQLite, PostgreSQL basics, Pandas, NumPy, Scikit-learn, Streamlit, Git, GitHub, Postman, n8n, RAG pipelines, LLM integrations, Gemini API.
Projects:
1. AI Data Analytics App: Streamlit app where users upload CSV data and ask questions in natural language. Uses Python, Pandas, LLM-assisted analysis, and charts.
2. Autonomous AI Communication System: AI agents for email, Telegram, and web chat using Python, n8n, LLMs, memory, and automation workflows.
3. Loan Approval Prediction: ML classification project using Python, Pandas, NumPy, Scikit-learn, and Streamlit.
4. Django portfolio and web projects: Django views/templates/admin/contact DB, FastAPI/API practice, frontend basics, deployment experience.
Strengths: practical project builder, strong Python foundation, backend API mindset, AI/RAG/automation interest, fast learner, comfortable with GitHub/Postman/deployment workflows.
Tone: concise, honest, confident, recruiter-friendly. Do not claim enterprise-level senior experience or unverifiable achievements.
`;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

function getGeminiApiKey(env: unknown) {
  // On Vercel, environment variables are in process.env, not the env object.
  // Check process.env first, then fall back to the runtime env object (Cloudflare Workers style).
  const runtimeEnv = env as RuntimeEnv | undefined;
  return process.env.GEMINI_API_KEY || runtimeEnv?.GEMINI_API_KEY;
}

function getGroqApiKey(env: unknown) {
  const runtimeEnv = env as RuntimeEnv | undefined;
  return process.env.GROQ_API_KEY || runtimeEnv?.GROQ_API_KEY;
}

function getGeminiModel(env: unknown) {
  const runtimeEnv = env as RuntimeEnv | undefined;
  return process.env.GEMINI_MODEL || runtimeEnv?.GEMINI_MODEL || "gemini-1.5-flash";
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

async function handleAskAyush(request: Request, env: unknown) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  let body: { message?: unknown };
  try {
    body = (await request.json()) as { message?: unknown };
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!message) return json({ error: "Message is required" }, 400);
  if (message.length > 800) return json({ error: "Message is too long" }, 400);

  const apiKey = getGroqApiKey(env);
  if (!apiKey) {
    return json({ error: "GEMINI_API_KEY is not configured on the server" }, 500);
  }

  const systemInstruction = `You are Ayush AI, the portfolio assistant for Ayush Tiwari. Answer only about Ayush, his skills, education, projects, contact details, resume, and hiring fit. Use the knowledge base below as your source of truth. If the user asks unrelated questions, politely redirect them to Ayush's profile/work. Be concise, natural, honest, and recruiter-friendly. Do not invent private data, salaries, company claims, or fake metrics.\n\n${AYUSH_KNOWLEDGE_BASE}`;

  const groqResponse = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: systemInstruction },
          { role: "user", content: message },
        ],
        temperature: 0.35,
        max_tokens: 280,
      }),
    },
  );

  if (!groqResponse.ok) {
    const details = await groqResponse.text().catch(() => "");
    console.error("Groq API error", groqResponse.status, details);
    return json({ error: "Groq request failed. Check GROQ_API_KEY." }, 502);
  }

  const result = (await groqResponse.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const answer = result.choices?.[0]?.message?.content?.trim();

  return json({ answer: answer || "I could not generate a response. Please ask about Ayush's skills, projects, education, or contact details." });
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} â€” try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/api/ask-ayush") {
        return await handleAskAyush(request, env);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};


