"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About me" },
  { href: "/essays", label: "Essays / Articles" },
  { href: "/problems", label: "Problems I'm exploring" },
  { href: "/reading", label: "Reading & resources" },
  { href: "/notes", label: "Learning notes", separated: true },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-24 hidden h-fit w-56 min-w-56 shrink-0 lg:block">
      <nav>
        <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Navigation
        </p>
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <li key={item.href} className={item.separated ? "mt-4 border-t border-border pt-4" : ""}>
                <Link
                  href={item.href}
                  className={`link-animated block py-1.5 text-sm transition-colors ${
                    isActive
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
