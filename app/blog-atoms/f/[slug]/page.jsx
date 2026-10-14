import { a } from '@/components/asset';
import Link from 'next/link';
import posts from '@/data/posts.json';
import Blobs from '@/components/Blobs';
export const dynamicParams = false;
export function generateStaticParams() { return posts.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; const p = posts.find(x => x.slug === slug); return { title: p.title, description: p.body[0], alternates: { canonical: `/blog-atoms/f/${slug}/` }, openGraph: { type: 'article', title: p.title, images: p.image ? [`/img/${p.image}.webp`] : undefined } }; }
const isHead = (l) => l.length < 75 && !/[.!?:,”"…]$/.test(l) && !/^(https?:|Name:|Rank:|Home:)/.test(l);
const linkify = (t) => t.split(/(https?:\/\/\S+)/).map((s, i) => /^https?:/.test(s) ? <a key={i} href={s} target="_blank" rel="noopener" className="text-coral underline font-semibold">{s}</a> : s);
export default async function Post({ params }) {
  const { slug } = await params; const p = posts.find(x => x.slug === slug);
  const recent = posts.filter(x => x.slug !== slug).slice(0, 3);
  return (<article>
    <header className="relative sky-bg text-white overflow-hidden"><Blobs />
      <div className="relative mx-auto max-w-4xl px-6 py-16 md:py-20"><Link href="/blog-atoms/" className="font-display font-semibold text-butter hover:underline">← Blog Atoms · All Posts</Link>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">{p.title}</h1><p className="mt-4 text-white/85">{p.date} | {p.cats.join(', ')}</p></div>
      <div aria-hidden className="absolute -bottom-px inset-x-0 h-12 bg-cream" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }} />
    </header>
    <div className="mx-auto max-w-3xl px-6 py-12">
      {p.image && <img src={a(`/img/${p.image}.webp`)} alt={`Illustration for ${p.title}`} width="1200" height="675" className="mb-8 w-full h-auto rounded-blob shadow-soft" />}
      <div className="prose-kid clay-card p-7 md:p-10">{p.body.map((l, i) => isHead(l) && i > 0 ? <h2 key={i}>{l}</h2> : <p key={i}>{linkify(l)}</p>)}</div>
      <aside className="mt-12"><h2 className="font-display text-2xl font-bold">Recent Posts</h2><ul className="mt-4 grid gap-3">{recent.map(r => <li key={r.slug}><Link href={`/blog-atoms/f/${r.slug}/`} className="clay-card block p-5 font-semibold hover:text-coral">{r.title}<span className="block text-sm font-normal text-ink/70">{r.date}</span></Link></li>)}</ul></aside>
    </div>
  </article>);
}
