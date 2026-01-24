"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Platform", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Resources", href: "/resources" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white transition-shadow ${
        scrolled ? "border-b border-gray-200 shadow-sm" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <img
            src="/file.svg"
            alt="Uptrackt logo"
            className="h-14 md:h-16 w-auto shrink-0"
          />
          <span className="text-2xl md:text-3xl font-bold text-gray-900">
            Uptrackt
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={
                  isActive
                    ? "text-black font-semibold"
                    : "text-gray-600 hover:text-black transition-colors"
                }
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <Link
            href="/request-demo"
            className="hidden md:inline-flex items-center justify-center
                       rounded-full bg-black px-6 py-3
                       text-sm font-medium text-white
                       hover:opacity-90 transition"
          >
            Let’s Collaborate
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col gap-4 px-6 py-4 text-sm">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={
                  pathname === link.href
                    ? "text-black font-semibold"
                    : "text-gray-600"
                }
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/request-demo"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-black px-6 py-3
                         text-center text-white font-medium
                         hover:opacity-90 transition"
            >
              Let’s Collaborate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
