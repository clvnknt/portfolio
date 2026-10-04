import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Required for `output: "export"`: the sitemap is generated once at build time.
export const dynamic = "force-static";

// One page only. Sections are in-page anchors, so they are not listed.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 }];
}
