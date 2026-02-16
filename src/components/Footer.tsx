import Link from 'next/link';
import { getCompanyData } from '@/lib/data';

export default function Footer() {
  const { contact } = getCompanyData();
  
  return (
    <footer className="bg-darkGray py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NGETIKIN</h3>
            <p className="text-softGray">Komunitas web development untuk Indonesia yang percaya bahwa skill dibangun pelan-pelan melalui konsistensi.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-softGray hover:text-cyan transition-colors">Beranda</Link></li>
              <li><Link href="/profil" className="text-softGray hover:text-cyan transition-colors">Profil</Link></li>
              <li><Link href="/layanan" className="text-softGray hover:text-cyan transition-colors">Layanan</Link></li>
              <li><Link href="/kontak" className="text-softGray hover:text-cyan transition-colors">Kontak</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li><Link href="/layanan/fullstack-web-development" className="text-softGray hover:text-cyan transition-colors">Fullstack Development</Link></li>
              <li><Link href="/layanan/weekly-challenge" className="text-softGray hover:text-cyan transition-colors">Weekly Challenge</Link></li>
              <li><Link href="/layanan/mentoring" className="text-softGray hover:text-cyan transition-colors">Mentoring</Link></li>
              <li><Link href="/layanan/event-workshop" className="text-softGray hover:text-cyan transition-colors">Workshop</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-softGray">
              <li>Email: {contact.email}</li>
              <li>Telp: {contact.phone}</li>
              <li>Alamat: {contact.address}</li>
              <li className="mt-4 flex space-x-4">
                <Link href={contact.discord} target="_blank" className="text-softGray hover:text-cyan transition-colors">Discord</Link>
                <Link href={`https://instagram.com/${contact.instagram}`} target="_blank" className="text-softGray hover:text-cyan transition-colors">Instagram</Link>
                <Link href={contact.youtube} target="_blank" className="text-softGray hover:text-cyan transition-colors">YouTube</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-darkNavy mt-8 pt-8 text-center text-softGray">
          <p>&copy; {new Date().getFullYear()} NGETIKIN. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}