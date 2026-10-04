import { expect, test } from "vitest";
import { SITE_URL } from "@/lib/site";
import robots from "./robots";
import sitemap from "./sitemap";

test("sitemap lists the single page with an absolute URL", () => {
  expect(sitemap().map((entry) => entry.url)).toEqual([`${SITE_URL}/`]);
});

test("robots allows crawling and points at the sitemap", () => {
  const result = robots();

  expect(result.rules).toEqual({ userAgent: "*", allow: "/" });
  expect(result.sitemap).toBe(`${SITE_URL}/sitemap.xml`);
});
