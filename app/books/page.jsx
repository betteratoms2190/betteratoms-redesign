import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
export const metadata = { title: 'Books', description: 'Paddo – The Trial of Curiosity. Join a grumpy robot and a messy alien on a crash course through physics.', alternates: { canonical: '/books/' } };
const dict = [['BIO-09', 'CAT', '"Self-Vibrating Fur Unit"', '🐱'], ['ERR-404', 'SNEEZING', '"Face Explosion Protocol"', '🤧'], ['HEAT-X', 'TOASTER', '"Bread Tanner Device"', '🍞'], ['EDU-V1', 'SCHOOL', '"Data Download Center"', '🏫']];
const crew = [['Official ID', 'Generate your authorized Commander ID card for printing.', '/img/official-id.webp'], ['Sticker Pack', 'High-resolution assets for your gear.', '/img/stickers.webp'], ['Monthly Experiment', 'Blueprint #001: Anti-Gravity Toaster Schematics.', '/img/experiment.webp']];
export default function Books() {
  return (<>
    <PageHero eyebrow="SPACE EXPLORER'S HANDBOOK" title={<>PADDO<br /><span className="text-butter">The Trial of Curiosity</span></>} image="/img/book-cover.webp" imageAlt="Book Cover: Paddo – The Trial of Curiosity">
      <p>Join a grumpy robot and a messy alien on a crash course through physics.</p>
      <p className="mt-3 font-display text-2xl text-bubble">“Messy is good. Messy is how we learn.”</p>
      <p className="mt-6 font-display font-semibold tracking-wide text-white/80">SELECT LAUNCH PLATFORM <span className="ml-2 rounded-full bg-lime/20 px-3 py-1 text-lime">STATUS ● LIVE</span></p>
      <div className="mt-3 flex flex-wrap gap-3">
        <a className="clay-btn" href="https://amzn.in/d/0diFITDC" target="_blank" rel="noopener">GET IT ON Kindle</a>
        <a className="clay-btn green" href="https://play.google.com/store/books/details/Aman_Singh_Better_Atoms_Paddo_and_the_Trial_of_Cur?id=vMu7EQAAQBAJ" target="_blank" rel="noopener">GET IT ON Play Store</a>
      </div>
    </PageHero>
    <Section id="dictionary" eyebrow="Alien Dictionary // DECODED" title="Earth things, as Paddo sees them">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {dict.map(([code, w, m, e], i) => (<Reveal as="li" key={code} delay={i * .07} className="clay-card p-6 text-center"><span aria-hidden className="text-5xl">{e}</span><p className="mt-3 text-xs font-bold tracking-widest text-coral">{code}</p><h3 className="text-2xl font-bold">{w}</h3><p className="mt-1 italic">{m}</p></Reveal>))}
      </ul>
    </Section>
    <Section id="next" eyebrow=":: INCOMING TRANSMISSION ::" title="Paddo & The Song of the Black Hole" tint="bg-[#F3EAFF]">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <Reveal><img src="/img/ebook2.webp" alt="Book 2: Paddo & the Song of the Black Hole – coming soon" width="1200" height="675" loading="lazy" className="rounded-blob shadow-soft w-full h-auto" /></Reveal>
        <Reveal delay={.1} className="text-lg leading-8"><p>“It sounds like a Whale, but it is coming from a Black Hole.” Venture into the Andromeda Sector where gravity goes wild, time slows down, and music is the key to unlocking the universe.</p><p className="mt-4 font-display text-coral">LOADING DATA...</p></Reveal>
      </div>
    </Section>
    <Section id="crew" eyebrow="Join The Crew" title="Join The Crew">
      <p className="-mt-6 mb-8 text-lg">Access restricted files, download sticker packs, and view Paddo's latest experiments.</p>
      <ul className="grid gap-6 md:grid-cols-3">
        {crew.map(([t, d, img], i) => (<Reveal as="li" key={t} delay={i * .08} className="clay-card overflow-hidden"><img src={img} alt={t} width="600" height="400" loading="lazy" className="w-full h-48 object-cover" /><div className="p-6"><h3 className="text-xl font-bold">{t}</h3><p className="mt-1">{d}</p><span className="mt-4 inline-block rounded-full bg-cream px-4 py-2 text-sm font-bold text-ink/70" title="Download link not available on the live site">ACCESS FILE › [LINK NEEDED]</span></div></Reveal>))}
      </ul>
      <Reveal className="mt-12 flex flex-col items-center text-center"><img src="/img/paddo-holo.webp" alt="Holographic Paddo" width="370" height="370" loading="lazy" className="w-48 floaty" /><p className="mt-2 font-mono text-sm text-ink/60">HOLOGRAM_FEED_V4.2 · SPARK_AI: “SYSTEMS: OPTIMAL”</p></Reveal>
    </Section>
  </>);
}
