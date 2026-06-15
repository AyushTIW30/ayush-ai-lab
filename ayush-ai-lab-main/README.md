# Ayush AI Lab

Cyberpunk-style portfolio for **Ayush Tiwari**, an AI + Backend Developer / Python Developer fresher focused on practical AI products, backend APIs, automation workflows, and data-driven tools.

## Tech Stack

- TanStack Start + React + TypeScript
- Vite + Tailwind CSS
- Framer Motion + Lucide icons
- Server-side Gemini API endpoint for `Ask Ayush AI`

## Local Setup

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal.

## Environment Variables

Create a `.env` file in the project root:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-1.5-flash
```

Important: keep `GEMINI_API_KEY` server-only. Do not prefix it with `VITE_`, and do not commit `.env`.

## Ask Ayush AI

The chat UI calls:

```txt
POST /api/ask-ayush
```

The server endpoint reads `process.env.GEMINI_API_KEY`, calls Gemini, and grounds responses on Ayush's local portfolio knowledge base.

## Resume

Add your real resume here:

```txt
public/resume.pdf
```

The portfolio buttons already point to `/resume.pdf` for preview and download.

## Build

```bash
npm run build
```

Optional checks:

```bash
npm run typecheck
npm run lint
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Add environment variables in Vercel Project Settings:
   - `GEMINI_API_KEY`
   - optional: `GEMINI_MODEL`
4. Build command: `npm run build`
5. Deploy.

## Netlify Compatibility

Netlify can host the app if the TanStack Start server output is supported by the selected adapter/runtime. Vercel is the recommended target for the simplest serverless deployment with the Gemini endpoint.

## Contact

- Email: ayushtiwariatcoon@gmail.com
- GitHub: https://github.com/AyushTIW30
- LinkedIn: https://linkedin.com/in/ayush-tiwari-2301222ba
