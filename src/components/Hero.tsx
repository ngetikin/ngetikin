import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 bg-gradient-to-b from-darkNavy to-darkGray">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Bangun Skill Lewat</span>
            <span className="block text-cyan mt-2">Konsistensi & Praktik Nyata</span>
          </h1>
          <p className="text-xl text-softGray mb-10 max-w-2xl mx-auto">
            Komunitas web development berbasis Discord untuk Indonesia dengan sistem pembelajaran terstruktur, berbasis komitmen, dan keaktifan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/kontak" className="btn-primary">Gabung Sekarang</Link>
            <Link href="/profil" className="btn-secondary">Pelajari Lebih Lanjut</Link>
          </div>
        </div>
      </div>
    </section>
  );
}