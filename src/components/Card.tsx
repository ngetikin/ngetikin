import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  link?: string;
  ctaText?: string;
}

export default function Card({ title, description, link, ctaText = 'Selengkapnya' }: CardProps) {
  return (
    <div className="bg-darkGray rounded-xl p-6 hover:border-cyan border border-transparent transition-all duration-300 h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-3 text-cyan">{title}</h3>
      <p className="mb-4 flex-grow">{description}</p>
      {link && (
        <Link href={link} className="text-cyan font-medium hover:underline self-start">
          {ctaText} &rarr;
        </Link>
      )}
    </div>
  );
}