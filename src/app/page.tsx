import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { getCompanyData } from '@/lib/data';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NGETIKIN - Komunitas Web Development untuk Indonesia',
  description: 'Komunitas web development berbasis Discord untuk Indonesia dengan sistem pembelajaran terstruktur, berbasis komitmen, dan keaktifan. Bergabunglah dengan komunitas yang percaya bahwa skill dibangun pelan-pelan melalui konsistensi.',
  keywords: ['komunitas web development', 'belajar coding', 'discord community', 'programming indonesia', 'web development course'],
  openGraph: {
    title: 'NGETIKIN - Komunitas Web Development untuk Indonesia',
    description: 'Komunitas web development berbasis Discord untuk Indonesia dengan sistem pembelajaran terstruktur, berbasis komitmen, dan keaktifan.',
    url: 'https://ngetikin.vercel.app',
    siteName: 'NGETIKIN',
    images: [
      {
        url: '/og-image-home.jpg',
        width: 1200,
        height: 630,
        alt: 'NGETIKIN - Komunitas Web Development'
      }
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NGETIKIN - Komunitas Web Development untuk Indonesia',
    description: 'Komunitas web development berbasis Discord untuk Indonesia dengan sistem pembelajaran terstruktur.',
  },
  alternates: {
    canonical: 'https://ngetikin.vercel.app',
  }
};

export default function Home() {
  const { services, aboutPreview } = getCompanyData();
  
  return (
    <main>
      <Hero />
      
      {/* About Preview */}
      <Section title="Tentang NGETIKIN">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">{aboutPreview.summary}</p>
            <p>{aboutPreview.description}</p>
          </div>
          <div className="bg-darkGray rounded-xl p-6 flex items-center justify-center">
            <Image 
              src="/gambar.jpeg" 
              alt="Gambar Komunitas NGETIKIN" 
              width={600}
              height={256}
              className="w-full h-64 object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </Section>
      
      {/* Services Preview */}
      <Section title="Layanan Kami">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service) => (
            <Card 
              key={service.id}
              title={service.title}
              description={service.description}
              link={`/layanan/${service.slug}`}
              ctaText="Selengkapnya"
            />
          ))}
        </div>
      </Section>
      
      {/* Why Choose Us */}
      <Section title="Kenapa Memilih Kami">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-darkGray p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-cyan">Komitmen Lebih dari Bakat</h3>
            <p>Kami percaya bahwa konsistensi selalu lebih penting daripada bakat alami.</p>
          </div>
          <div className="bg-darkGray p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-cyan">Lingkungan Belajar Serius</h3>
            <p>Santai dalam komunikasi, disiplin dalam proses belajar.</p>
          </div>
          <div className="bg-darkGray p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-cyan">Belajar Melalui Praktik</h3>
            <p>Praktik nyata lebih utama daripada teori semata.</p>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-cyan to-blue-500 text-darkNavy">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Mulai Perjalananmu?</h2>
          <p className="text-lg mb-8">Bergabunglah dengan komunitas yang percaya bahwa skill dibangun pelan-pelan melalui konsistensi.</p>
          <Link href="/kontak" className="btn-primary inline-block">Gabung Sekarang</Link>
        </div>
      </Section>
    </main>
  );
}
