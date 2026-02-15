import Section from '@/components/Section';
import { getCompanyData } from '@/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Profil NGETIKIN - Komunitas Web Development untuk Indonesia',
    description: 'Pelajari lebih lanjut tentang NGETIKIN, komunitas web development berbasis Discord untuk Indonesia dengan sistem pembelajaran terstruktur, berbasis komitmen, dan keaktifan.',
    keywords: ['tentang ngetikin', 'profil komunitas', 'visi misi ngetikin', 'nilai inti', 'sejarah komunitas'],
    openGraph: {
      title: 'Profil NGETIKIN - Komunitas Web Development untuk Indonesia',
      description: 'Pelajari lebih lanjut tentang NGETIKIN, komunitas web development berbasis Discord untuk Indonesia.',
      url: 'https://ngetikin.com/profil',
      siteName: 'NGETIKIN',
      images: [
        {
          url: '/og-image-about.jpg',
          width: 1200,
          height: 630,
          alt: 'Profil NGETIKIN - Komunitas Web Development'
        }
      ],
      locale: 'id_ID',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Profil NGETIKIN - Komunitas Web Development untuk Indonesia',
      description: 'Pelajari lebih lanjut tentang NGETIKIN, komunitas web development berbasis Discord untuk Indonesia.',
    },
    alternates: {
      canonical: 'https://ngetikin.com/profil',
    }
  };
}

export default function AboutPage() {
  const { about } = getCompanyData();
  
  return (
    <main>
      <Section className="pt-32 pb-16 bg-darkNavy">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Tentang NGETIKIN</h1>
          <p className="text-xl text-softGray text-center max-w-3xl mx-auto">
            Komunitas web development berbasis Discord untuk Indonesia dengan sistem pembelajaran terstruktur, berbasis komitmen, dan keaktifan.
          </p>
        </div>
      </Section>
      
      <Section>
        <div className="prose prose-lg prose-invert max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ringkasan Singkat</h2>
          <p className="mb-6">{about.summary}</p>
          <p>{about.description}</p>
        </div>
      </Section>
      
      <Section title="Visi & Misi">
        <div className="max-w-4xl mx-auto">
          <div className="bg-darkGray rounded-xl p-6 mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-cyan">Visi</h3>
            <p className="text-lg">{about.vision}</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-cyan">Misi</h3>
            <ul className="space-y-4">
              {about.mission.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-cyan mr-3 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      
      <Section title="Nilai Inti">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {about.values.map((value, index) => (
            <div key={index} className="bg-darkGray p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-cyan">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </Section>
      
      <Section title="Sejarah Perjalanan">
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-cyan">
            {about.history.map((item, index) => (
              <div key={index} className="mb-10 relative">
                <div className="absolute -left-11 top-0 w-6 h-6 rounded-full bg-cyan border-4 border-darkNavy"></div>
                <div>
                  <span className="text-cyan font-semibold">{item.year}</span>
                  <p className="mt-1">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      <Section className="bg-gradient-to-r from-cyan to-blue-500 text-darkNavy">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bergabung dengan Kami</h2>
          <p className="text-lg mb-8">Jadilah bagian dari komunitas yang percaya bahwa skill dibangun pelan-pelan melalui konsistensi.</p>
          <Link href="/kontak" className="btn-primary inline-block">Hubungi Kami</Link>
        </div>
      </Section>
    </main>
  );
}