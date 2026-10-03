import type { ReactNode } from "react";

export default function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`rounded-xl border border-border bg-surface p-6 ${className}`}>{children}</div>;
}
