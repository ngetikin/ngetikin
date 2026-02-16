import Section from '@/components/Section';
import Card from '@/components/Card';
import { getCompanyData } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layanan Kami - NGETIKIN Komunitas Web Development',
  description: 'Temukan berbagai layanan yang disediakan oleh NGETIKIN untuk membantu perkembangan skill web development Anda, termasuk program fullstack, mentoring, dan workshop.',
  keywords: ['layanan ngetikin', 'program fullstack', 'mentoring coding', 'workshop web development', 'discord community'],
  openGraph: {
    title: 'Layanan Kami - NGETIKIN Komunitas Web Development',
    description: 'Temukan berbagai layanan yang disediakan oleh NGETIKIN untuk membantu perkembangan skill web development Anda.',
    url: 'https://ngetikin.vercel.app/layanan',
    siteName: 'NGETIKIN',
    images: [
      {
        url: '/og-image-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Layanan Kami - NGETIKIN Komunitas Web Development'
      }
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Layanan Kami - NGETIKIN Komunitas Web Development',
    description: 'Temukan berbagai layanan yang disediakan oleh NGETIKIN untuk membantu perkembangan skill web development Anda.',
  },
  alternates: {
    canonical: 'https://ngetikin.vercel.app/layanan',
  }
};

export default function ServicesPage() {
  const { services } = getCompanyData();
  
  return (
    <main>
      <Section className="pt-32 pb-16 bg-darkNavy">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Layanan Kami</h1>
          <p className="text-xl text-softGray text-center max-w-3xl mx-auto">
            Temukan berbagai layanan yang kami sediakan untuk membantu perkembangan skill web development Anda.
          </p>
        </div>
      </Section>
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
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
    </main>
  );
}