import Image from "next/image";
import Link from "next/link";

export function FooterBar() {
  return (
    <footer className="border-t border-white/10 bg-[#04070f] py-8 text-center text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:text-left">
        <div className="flex items-center justify-center gap-2 text-slate-200 sm:justify-start">
          <Image src="/ngetikin-logo.svg" alt="Ngetikin" width={28} height={28} />
          <span>Ngetikin • Remote-first studio</span>
        </div>
        <div className="flex items-center justify-center gap-4 sm:justify-end">
          <Link className="hover:text-cyan-200" href="/terms">
            Syarat Layanan
          </Link>
          <Link className="hover:text-cyan-200" href="/privacy">
            Kebijakan Privasi
          </Link>
          <Link className="hover:text-cyan-200" href="/">
            ngetikin
          </Link>
        </div>
      </div>
    </footer>
  );
}
