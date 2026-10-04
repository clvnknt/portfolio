/**
 * Absolute site URL, used for the sitemap, robots.txt, and social-card metadata.
 * Set NEXT_PUBLIC_SITE_URL to the final domain. On Vercel it falls back to the production
 * URL Vercel exposes at build time; locally it falls back to localhost.
 */
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();
