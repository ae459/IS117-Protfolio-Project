"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { mainNavigation } from "@/lib/site-navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--ink-12)] bg-[var(--background)]/90 backdrop-blur-md"
      style={{ height: "64px" }}
    >
      <div className="page-shell flex h-full items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="flex flex-col leading-none group"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-bold text-[var(--foreground)] text-base tracking-tight group-hover:text-[var(--accent-soft)] transition-colors">
            {siteConfig.name}
          </span>
          <span className="font-mono text-[10px] text-[var(--accent-soft)] tracking-widest uppercase">
            {siteConfig.role}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {mainNavigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-[var(--radius-sm)] text-sm font-medium transition-colors",
                  isActive
                    ? "text-[var(--accent-soft)] bg-[var(--accent-muted)]"
                    : "text-[var(--ink-70)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-[var(--ink-70)] hover:text-[var(--foreground)] transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--ink-12)] bg-[var(--surface-1)]">
          <nav className="page-shell flex flex-col py-4 gap-1" aria-label="Mobile navigation">
            {mainNavigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-[var(--radius-sm)] text-sm font-medium transition-colors",
                    isActive
                      ? "text-[var(--accent-soft)] bg-[var(--accent-muted)]"
                      : "text-[var(--ink-70)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
