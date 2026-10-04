import { afterEach, expect, test, vi } from "vitest";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

async function load() {
  vi.resetModules();
  return (await import("./site")).SITE_URL;
}

test("prefers NEXT_PUBLIC_SITE_URL and trims trailing slashes", async () => {
  vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.dev//");
  vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", "ignored.vercel.app");

  expect(await load()).toBe("https://example.dev");
});

test("falls back to the Vercel production URL, then to localhost", async () => {
  vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
  vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", "portfolio.vercel.app");
  expect(await load()).toBe("https://portfolio.vercel.app");

  vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", "");
  expect(await load()).toBe("http://localhost:3000");
});
