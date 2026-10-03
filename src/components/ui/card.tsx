import type { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="mr-2 mb-6 ml-2 rounded-xl border border-black bg-white p-6 shadow-lg dark:bg-gray-800">
      {children}
    </div>
  );
}
