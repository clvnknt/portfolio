export interface Profile {
  name: string;
  role: string;
  tagline: string;
  avatar: { src: string; alt: string };
  githubUrl: string;
  email?: string;
  /** International format with spaces, e.g. "+63 998 254 5122". Linked as tel: with the spaces stripped. */
  phone?: string;
  linkedinUrl?: string;
  /** Path under public/, e.g. "/resume.pdf". */
  resumeUrl?: string;
}
