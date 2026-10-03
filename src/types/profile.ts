export interface Profile {
  name: string;
  role: string;
  tagline: string;
  /** About-section paragraphs, one string each. */
  bio: string[];
  avatar: { src: string; alt: string };
  githubUrl: string;
  email?: string;
  linkedinUrl?: string;
  /** Path under public/, e.g. "/resume.pdf". */
  resumeUrl?: string;
}
