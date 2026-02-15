import { notFound } from 'next/navigation';
import Section from '@/components/Section';
import { getCompanyData } from '@/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { services } = getCompanyData();
  const service = services.find(s => s.slug === params.slug);
  
  if (!service) {
    return {};
  }
  
  return {
    title: `${service.title} - NGETIKIN`,
    description: service.description,
    keywords: [service.title, 'layanan ngetikin', 'web development', 'programming course', 'coding mentor'],
    openGraph: {
      title: `${service.title} - NGETIKIN`,
      description: service.description,
      url: `https://ngetikin.com/layanan/${params.slug}`,
      siteName: 'NGETIKIN',
      images: [
        {
          url: `/og-image-${params.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.title} - NGETIKIN`
        }
      ],
      locale: 'id_ID',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} - NGETIKIN`,
      description: service.description,
    },
    alternates: {
      canonical: `https://ngetikin.com/layanan/${params.slug}`,
    }
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const { services } = getCompanyData();
  const service = services.find(s => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }
  
  return (
    <main>
      <Section className="pt-32 pb-16 bg-darkNavy">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-softGray max-w-3xl">
            {service.description}
          </p>
        </div>
      </Section>
      
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Detail Layanan</h2>
          <p className="text-lg mb-8">{service.details}</p>
          
          <div className="bg-darkGray rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-cyan">Manfaat Mengikuti Layanan Ini</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pendekatan praktis dan langsung diterapkan</li>
              <li>Dibimbing oleh mentor berpengalaman</li>
              <li>Komunitas aktif untuk saling mendukung</li>
              <li>Portofolio yang dapat ditunjukkan kepada calon pemberi kerja</li>
            </ul>
          </div>
        </div>
      </Section>
      
      <Section className="bg-gradient-to-r from-cyan to-blue-500 text-darkNavy">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tertarik dengan Layanan Ini?</h2>
          <p className="text-lg mb-8">Hubungi kami untuk informasi lebih lanjut dan mulai perjalanan pengembangan skill Anda.</p>
          <Link href="/kontak" className="btn-primary inline-block">Hubungi Kami</Link>
        </div>
      </Section>
    </main>
  );
}