'use client';
import { a } from '@/components/asset';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const grads = ['from-[#FFE7D1] to-[#FFC9A8]', 'from-[#D9F7FF] to-[#A6E6FA]', 'from-[#FFE0F0] to-[#FFB8DA]', 'from-[#E0FFE0] to-[#B5F0B9]'];
export default function BlogList({ posts }) {
  const [cat, setCat] = useState('All Posts');
  useEffect(() => { const c = new URLSearchParams(location.search).get('blogcategory'); if (c) setCat(c); }, []);
  const cats = ['All Posts', 'Education', 'Space', 'Technology'];
  const shown = cat === 'All Posts' ? posts : posts.filter(p => p.cats.includes(cat));
  return (<>
    <div role="group" aria-label="Categories" className="mb-10 flex flex-wrap items-center gap-2"><span className="font-display font-semibold mr-2">Categories</span>
      {cats.map(c => <button key={c} type="button" aria-pressed={cat === c} onClick={() => { setCat(c); history.replaceState(null, '', c === 'All Posts' ? location.pathname : `?blogcategory=${c}`); }} className={`rounded-full px-5 py-2 font-display font-semibold transition ${cat === c ? 'clay-btn !py-2 !px-5 !text-base' : 'bg-white shadow-soft hover:-translate-y-0.5'}`}>{c}</button>)}
    </div>
    <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {shown.map((p, i) => (
        <li key={p.slug} className="clay-card overflow-hidden flex flex-col">
          <Link href={`/blog-atoms/f/${p.slug}/`} className="flex flex-col h-full group">
            {p.image ? <img src={a(`/img/${p.image}-sm.webp`)} alt="" width="600" height="340" loading={i < 3 ? "eager" : "lazy"} fetchPriority={i === 0 ? "high" : undefined} className="h-48 w-full object-cover" /> : <div aria-hidden className={`h-48 bg-gradient-to-br ${grads[i % 4]} grid place-items-center text-6xl`}>⚛️</div>}
            <div className="p-6 flex flex-col flex-1"><p className="text-sm font-semibold text-ink/70">{p.date} | {p.cats.join(', ')}</p><h2 className="mt-2 text-xl font-bold group-hover:text-coral">{p.title}</h2><p className="mt-2 line-clamp-3 text-ink/80">{p.excerpt}</p><span className="mt-auto pt-4 font-display font-semibold text-coral">Continue Reading →</span></div>
          </Link>
        </li>))}
    </ul>
  </>);
}
