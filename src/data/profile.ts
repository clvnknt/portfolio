import type { Profile } from "@/types/profile";

// TODO(owner): add `resumeUrl` (drop a resume PDF in public/) to show its button in the hero.
// TODO(owner): `bio` is a draft built from LinkedIn and the project data. Rewrite it in your own voice.
export const PROFILE: Profile = {
  name: "Calvin Kent Pamandanan",
  role: "Junior Web Developer",
  tagline: "I build web applications with Laravel, Angular, and Next.js, from database schema to the UI.",
  bio: [
    "I'm a junior web developer from Central Luzon, Philippines. I have been at Boomering Inc since November 2024, building a real-time dashboard for a client.",
    "I graduated with a Bachelor's degree in Information Technology from Angeles University Foundation in 2024. My thesis project, CritterCare, is an animal shelter management system built with Laravel.",
    "Along the way I earned certifications in cybersecurity and databases from Cisco, Oracle, and Certiport. I also use AI tools like Claude to write code, draft tickets, and prepare reports.",
  ],
  avatar: { src: "/images/me-formal.jpg", alt: "Profile photo" },
  githubUrl: "https://github.com/clvnknt",
  email: "p.calvinkent@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/clvnknt/",
};
