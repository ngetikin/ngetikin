import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Sora } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'NGETIKIN - Komunitas Web Development untuk Indonesia',
  description: 'Komunitas web development berbasis Discord untuk Indonesia dengan sistem pembelajaran terstruktur, berbasis komitmen, dan keaktifan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${spaceGrotesk.variable} ${sora.variable} bg-darkNavy text-white font-sora`}>
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}