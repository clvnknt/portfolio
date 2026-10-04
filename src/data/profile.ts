import type { Profile } from "@/types/profile";

// TODO(owner): `tagline` is a draft built from LinkedIn and the work record. Rewrite it in your own voice.
export const PROFILE: Profile = {
  name: "Calvin Kent Pamandanan",
  role: "Junior Web Developer",
  tagline:
    "I build web apps from the database schema to the UI. Right now I'm at Boomering Inc, working on a real-time dashboard for a client.",
  avatar: { src: "/images/me-formal.jpg", alt: "Profile photo" },
  githubUrl: "https://github.com/clvnknt",
  email: "p.calvinkent@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/clvnknt/",
  // Website copy without the phone number. It is a built file: redo it when the content changes.
  resumeUrl: "/Calvin-Kent-Pamandanan-Resume.pdf",
};
