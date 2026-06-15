type AppErrorOptions = {
  tags?: Record<string, string>;
  extra?: Record<string, unknown>;
};

type AppEvents = {
  captureException?: (error: unknown, options?: AppErrorOptions) => void;
};

declare global {
  interface Window {
    __portfolioEvents?: AppEvents;
  }
}

export function reportAppError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__portfolioEvents?.captureException?.(error, {
    tags: { app: "ayush-ai-lab" },
    extra: context,
  });
}
