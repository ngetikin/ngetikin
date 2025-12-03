import type { CompanyProfile } from "@/lib/companyProfile";
import { SectionTitle } from "../shared/SectionTitle";
import { ContactRow } from "../shared/ContactRow";

export function ContactSection({ contacts }: { contacts: CompanyProfile["contacts"] }) {
  return (
    <section id="contact" className="space-y-6">
      <SectionTitle title="Kontak" subtitle="Langsung hubungi founder/dev" />
      <div className="grid gap-4 md:grid-cols-2">
        {contacts.map((c) => (
          <ContactRow key={c.label + c.value} label={c.label} value={c.value} href={c.href} />
        ))}
      </div>
    </section>
  );
}
