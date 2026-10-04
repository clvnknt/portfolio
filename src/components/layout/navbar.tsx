"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { NAV_LINKS } from "@/data/nav-links";
import { PROFILE } from "@/data/profile";
import ThemeToggle from "./theme-toggle";

const linkClass = "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";
const RESUME_URL = PROFILE.resumeUrl;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">
          {PROFILE.name}
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
            {RESUME_URL && (
              <Button variant="outline" size="sm" className="mr-1 hidden md:inline-flex" asChild>
                <a href={RESUME_URL} target="_blank" rel="noreferrer">
                  Resume
                </a>
              </Button>
            )}
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-controls="navbar-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? <X /> : <Menu />}
            </Button>
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
