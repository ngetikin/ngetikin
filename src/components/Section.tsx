interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section className={`section ${className}`}>
      <div className="container">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{title}</h2>}
        {subtitle && <p className="text-xl text-softGray text-center max-w-3xl mx-auto mb-12">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}