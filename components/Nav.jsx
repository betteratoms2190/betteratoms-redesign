'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { NAV, MORE, ACCOUNT, AMAZON_LAUNCH } from './site';

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);
  const moreRef = useRef(null);
  useEffect(() => { setOpen(false); setMore(false); }, [path]);
  useEffect(() => {
    const h = (e) => { if (moreRef.current && !moreRef.current.contains(e.target)) setMore(false); };
    const k = (e) => { if (e.key === 'Escape') { setMore(false); setOpen(false); } };
    document.addEventListener('click', h); document.addEventListener('keydown', k);
    return () => { document.removeEventListener('click', h); document.removeEventListener('keydown', k); };
  }, []);
  const active = (h) => (h === '/' ? path === '/' : path?.startsWith(h.replace(/\/$/, '')));
  const pill = (h) => `rounded-full px-4 py-2 font-display font-semibold transition-colors ${active(h) ? 'bg-white text-ink shadow-clay' : 'text-white hover:bg-white/15'}`;
  return (
    <header className="sticky top-0 z-50">
      <a href={AMAZON_LAUNCH} target="_blank" rel="noopener" className="block bg-butter text-ink text-center text-sm sm:text-base font-bold py-2 px-4 hover:bg-[#ffe27a]">
        Just Launched 🚀 Better Atoms: Paddo and the Trial of Curiosity 📘 Click Here
      </a>
      <nav aria-label="Main" className="bg-night/90 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2.5">
          <Link href="/" className="flex items-center gap-2" aria-label="Better Atoms home">
            <img src="/img/logo-tm.webp" alt="Better Atoms logo" width="44" height="44" className="rounded-full ring-2 ring-white/70" />
            <span className="font-display text-xl font-bold text-white hidden sm:inline">Better Atoms</span>
          </Link>
          <ul className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (<li key={n.href}><Link href={n.href} className={pill(n.href)} aria-current={active(n.href) ? 'page' : undefined}>{n.label}</Link></li>))}
            <li className="relative" ref={moreRef}>
              <button type="button" aria-expanded={more} aria-haspopup="true" onClick={() => setMore(!more)} className={pill('/__more')}>More ▾</button>
              {more && (
                <ul className="absolute right-0 mt-2 w-56 rounded-3xl bg-white p-2 shadow-soft">
                  {MORE.map((m) => (<li key={m.href}><Link href={m.href} className="block rounded-2xl px-4 py-2.5 font-semibold text-ink hover:bg-cream">{m.label}</Link></li>))}
                </ul>
              )}
            </li>
          </ul>
          <div className="hidden lg:flex items-center gap-2">
            <a href={ACCOUNT[0].href} className="text-white/90 hover:text-white font-semibold px-3">Sign In</a>
            <a href={ACCOUNT[1].href} className="clay-btn green !px-5 !py-2 !text-base">Create Account</a>
          </div>
          <button type="button" className="lg:hidden clay-btn ghost !px-4 !py-2 !text-base" aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
        </div>
        {open && (
          <div id="mnav" className="lg:hidden px-4 pb-5">
            <ul className="grid gap-1.5">
              {[...NAV, ...MORE].map((n) => (<li key={n.href}><Link href={n.href} className={`block ${pill(n.href)}`}>{n.label}</Link></li>))}
              <li className="pt-2 flex flex-wrap gap-2">{ACCOUNT.map((a) => (<a key={a.label} href={a.href} className="clay-btn ghost !px-4 !py-2 !text-sm">{a.label}</a>))}</li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
