"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function getInitialTheme(): boolean {
  if (typeof window === "undefined") return false;
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  return savedTheme === "dark" || (!savedTheme && systemPrefersDark);
}

export default function Navbar() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <header className="bg-background/80 backdrop-blur-md docked full-width top-0 border-b-2 border-outline-variant sticky z-50 transition-colors duration-300">
      <nav className="flex justify-between items-center w-full px-6 h-14 max-w-[1280px] mx-auto">
        <div className="text-lg font-black text-on-background font-mono">
          ~/dev/portfolio
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="font-headline font-bold uppercase tracking-tighter text-primary border-b-2 border-primary transition-all duration-75 active:translate-x-0.5 active:translate-y-0.5"
          >
            root
          </Link>
          <Link
            href="/projects"
            className="font-headline font-bold uppercase tracking-tighter text-on-surface-variant hover:bg-primary/5 hover:text-primary transition-all duration-75 active:translate-x-0.5 active:translate-y-0.5 px-2"
          >
            projects
          </Link>
          <Link
            href="/#stack"
            className="font-headline font-bold uppercase tracking-tighter text-on-surface-variant hover:bg-primary/5 hover:text-primary transition-all duration-75 active:translate-x-0.5 active:translate-y-0.5 px-2"
          >
            stack
          </Link>
          <Link
            href="/logs"
            className="font-headline font-bold uppercase tracking-tighter text-on-surface-variant hover:bg-primary/5 hover:text-primary transition-all duration-75 active:translate-x-0.5 active:translate-y-0.5 px-2"
          >
            logs
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className="flex items-center justify-center p-1"
          >
            <span
              className="material-symbols-outlined text-on-background cursor-pointer hover:text-primary transition-colors"
              aria-label="terminal"
            >
              terminal
            </span>
          </Link>
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-1 rounded-full hover:bg-primary/5 transition-colors focus:outline-none"
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined text-on-background hover:text-primary">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <span
            className="material-symbols-outlined text-on-background cursor-pointer hover:text-primary transition-colors"
            aria-label="settings"
          >
            settings
          </span>
        </div>
      </nav>
    </header>
  );
}
