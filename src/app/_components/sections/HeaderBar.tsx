"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Info, Boxes, Sparkles, Phone } from "lucide-react";

const links = [
  { href: "#about", label: "Tentang", icon: Info },
  { href: "#services", label: "Paket", icon: Boxes },
  { href: "#why", label: "Kenapa", icon: Sparkles },
  { href: "#contact", label: "Kontak", icon: Phone },
];

export function HeaderBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[rgba(5,9,16,0.8)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight text-white">
          <Image
            src="/ngetikin-logo.svg"
            alt="Ngetikin logo"
            width={40}
            height={40}
            className="rounded-full shadow-lg shadow-cyan-500/25"
          />
          <span>Ngetikin</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-4 text-sm text-slate-300 md:flex">
          {links.map(({ href, label, icon: Icon }) => (
            <Link key={href} className="hover:text-white inline-flex items-center gap-2" href={href}>
              <Icon size={16} />
              {label}
            </Link>
          ))}
          <Link
            className="rounded-full bg-cyan-400 px-4 py-2 font-semibold text-slate-900 hover:text-slate-900 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-cyan-300"
            href="#contact"
          >
            Konsultasi Gratis
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:border-cyan-300 hover:text-cyan-100"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu sheet */}
      <div
        className={`md:hidden px-6 transition-[max-height,opacity] duration-200 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
      >
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#0b1424]/95 shadow-xl shadow-cyan-500/10 backdrop-blur">
          <div className="flex flex-col gap-2 p-4 text-sm text-slate-100">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-white/5"
              >
                <Icon size={18} className="text-cyan-200" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
          <div className="p-4">
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-cyan-400 px-4 py-3 text-center text-sm font-semibold text-slate-900 hover:text-slate-900 hover:bg-cyan-300"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
