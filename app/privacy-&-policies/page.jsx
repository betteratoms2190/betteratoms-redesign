import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
export const metadata = { title: 'Privacy & Policies', description: 'Better Atoms Technologies LLP – Privacy Protocol, Company Guidelines, Corporate Identity and Contact.', alternates: { canonical: '/privacy-&-policies/' } };
const mods = [
  { code: 'PRIV-2026', name: 'PRIVACY', title: 'Privacy Protocol', sub: '// Commitment to Data Protection & Transparency', items: [['Introduction', 'At Better Atoms, we value your trust. This Privacy Policy explains how we collect, use, and protect information. Our approach is designed to be transparent, responsible, and aligned with modern digital standards and Indian data protection regulations.'], ['Information We Collect', 'We may collect personal information when you visit our website, contact us, or subscribe to updates. This includes your name, email address, and basic technical usage data (browser type, pages visited). We ensure minimal data collection principles are followed.'], ['Cookies & Analytics', 'Our website may use cookies or similar technologies to enhance user experience and understand visitor behavior. You maintain full control to disable cookies through your browser settings at any time.']] },
  { code: 'GUID-2026', name: 'GUIDELINES', title: 'Company Guidelines', sub: '// Workplace Conduct & Intellectual Property', items: [['Workplace & Conduct', 'Better Atoms supports a flexible and respectful work culture. Team members and collaborators are expected to act professionally, ethically, and respectfully. We prioritize clear communication and the protection of confidential information.'], ['Intellectual Property', 'All content, branding, designs, visuals, and materials associated with Better Atoms are protected intellectual property. Unauthorized use, reproduction, or distribution is not permitted without prior written consent from Better Atoms Technologies LLP.']] },
  { code: 'CORP-LLP', name: 'CORPORATE', title: 'Corporate Identity', sub: '// About Better Atoms Technologies LLP', items: [['[CORPORATE IDENTITY TEXT NEEDED]', 'The body of this module could not be extracted from the live site.']] },
  { code: 'COMM-EXT', name: 'CONTACT', title: 'Updates & Contact', sub: '// Communication Channels', items: [['', 'If you have questions about this Privacy Policy or our company guidelines, please contact us through our official channels.']], contact: true },
];
export default function Privacy() {
  return (<>
    <PageHero eyebrow="LLP ACTIVE · CORPORATE PROTOCOL" title="Privacy & Policies"><p>© Better Atoms Technologies LLP</p>
      <nav aria-label="Policy modules" className="mt-6"><ul className="flex flex-wrap gap-2">{mods.map(m => <li key={m.code}><a href={`#${m.code}`} className="clay-btn ghost !px-4 !py-2 !text-sm">{m.name} <span className="opacity-60">{m.code}</span></a></li>)}</ul></nav>
    </PageHero>
    {mods.map((m, mi) => (
      <Section key={m.code} id={m.code} eyebrow={`READING: ${m.code}`} title={m.title} tint={mi % 2 ? 'bg-[#F3EAFF]' : ''}>
        <p className="-mt-6 mb-8 font-mono text-ink/70">{m.sub}</p>
        <ol className="grid gap-5 md:grid-cols-3">{m.items.map(([h, p], i) => (<Reveal as="li" key={i} delay={i * .07} className="clay-card p-6">{h && <h3 className="text-xl font-bold"><span className="text-coral mr-2">{String(i + 1).padStart(2, '0')}</span>{h}</h3>}<p className="mt-2 leading-7">{p}</p></Reveal>))}</ol>
        {m.contact && <div className="mt-6 flex flex-wrap gap-3"><a className="clay-btn blue" href="https://www.betteratoms.com">Website · www.betteratoms.com</a><a className="clay-btn green" href="mailto:contactus@betteratoms.com">Official Email · contactus@betteratoms.com</a></div>}
      </Section>
    ))}
  </>);
}
