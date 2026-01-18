"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage = "Home" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-foreground">
            <span className="text-lg font-bold">
              K<span className="text-primary">K</span>
            </span>
            <span className="ml-0.5 text-[8px] text-muted-foreground">05</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-primary">
              Kunal Kabra
            </span>
            <span className="text-xs text-muted-foreground">{currentPage}</span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="/essays"
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Essays / Articles
              </Link>
            </li>
            <li>
              <Link
                href="/problems"
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {"Problems I'm exploring"}
              </Link>
            </li>
            <li>
              <Link
                href="/reading"
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reading & resources
              </Link>
            </li>
            <li className="mt-2 border-t border-border pt-2">
              <Link
                href="/notes"
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Learning notes
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
