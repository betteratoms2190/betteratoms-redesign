import Link from 'next/link';
import { FOOTER } from './site';
export default function Footer() {
  return (
    <footer className="relative sky-bg text-white overflow-hidden">
      <div aria-hidden className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-[140%] rounded-[50%] bg-cream" />
      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-12 grid gap-8 md:grid-cols-2 items-end">
        <div className="flex items-center gap-4">
          <img src="/img/paddo-holo.webp" alt="Paddo the alien with the Better Atoms logo" width="120" height="120" loading="lazy" className="floaty w-28 h-auto" />
          <div>
            <p className="font-display text-xl">Copyright © 2026 Better Atoms - All Rights Reserved.</p>
            <p className="text-white/80">Powered by Better Atoms Technologies LLP</p>
          </div>
        </div>
        <nav aria-label="Footer"><ul className="flex flex-wrap gap-2 md:justify-end">
          {FOOTER.map((f) => (<li key={f.href}><Link href={f.href} className="inline-block rounded-full bg-white/10 px-4 py-2 font-semibold hover:bg-white/20">{f.label}</Link></li>))}
        </ul></nav>
      </div>
    </footer>
  );
}
