"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/container";
import { NAV_LINKS } from "@/data/nav-links";
import ThemeToggle from "./theme-toggle";

const linkClass = "text-sm font-medium text-muted transition-colors hover:text-foreground";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image src="https://flowbite.com/docs/images/logo.svg" width={32} height={32} className="h-7 w-auto" alt="Flowbite Logo" />
          <span className="text-lg font-semibold tracking-tight">Flowbite</span>
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted hover:bg-surface hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none md:hidden"
              aria-controls="navbar-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu: same links, stacked under the bar. */}
      <div id="navbar-menu" className={`${menuOpen ? "" : "hidden"} border-t border-border md:hidden`}>
        <Container>
          <ul className="flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)} className={`${linkClass} block py-2`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </nav>
  );
}
