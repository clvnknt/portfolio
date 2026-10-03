import type { Profile } from "@/types/profile";

// TODO(owner): replace `name` and review `role`/`tagline`. Add `email`, `linkedinUrl`,
// and `resumeUrl` (drop the PDF in public/) to show their buttons in the hero.
export const PROFILE: Profile = {
  name: "Your Name",
  role: "Full-Stack Developer",
  tagline: "I build web applications with Laravel, Angular, and Next.js, from database schema to the UI.",
  avatar: { src: "/images/me-formal.jpg", alt: "Profile photo" },
  githubUrl: "https://github.com/clvnknt",
};
