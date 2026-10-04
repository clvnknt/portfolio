import type { ReactNode } from "react";

/** Shared page width and side padding. Navbar, sections, and footer all use it so edges line up. */
export default function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}
