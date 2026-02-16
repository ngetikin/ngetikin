"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-darkNavy/90 backdrop-blur-sm py-2" : "bg-transparent py-4"}`}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.jpg"
            alt="NGETIKIN Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-xl font-bold">NGETIKIN</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <Link href="/" className="transition-colors hover:text-cyan">
            Beranda
          </Link>
          <Link href="/profil" className="transition-colors hover:text-cyan">
            Profil
          </Link>
          <Link href="/layanan" className="transition-colors hover:text-cyan">
            Layanan
          </Link>
          <Link href="/kontak" className="transition-colors hover:text-cyan">
            Kontak
          </Link>
          <Link
            href="https://dsc.gg/ngetikin"
            target="_blank"
            className="text-sm btn-primary"
          >
            Gabung Discord
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute right-0 left-0 top-full py-4 px-4 md:hidden bg-darkNavy/95 backdrop-blur-lg">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="block py-2 transition-colors hover:text-cyan"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/profil"
              className="block py-2 transition-colors hover:text-cyan"
              onClick={() => setMobileMenuOpen(false)}
            >
              Profil
            </Link>
            <Link
              href="/layanan"
              className="block py-2 transition-colors hover:text-cyan"
              onClick={() => setMobileMenuOpen(false)}
            >
              Layanan
            </Link>
            <Link
              href="/kontak"
              className="block py-2 transition-colors hover:text-cyan"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontak
            </Link>
            <Link
              href="https://dsc.gg/ngetikin"
              target="_blank"
              className="py-2 mt-2 text-sm text-center btn-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gabung Discord
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
