import { a } from '@/components/asset';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
import ScoutForm from '@/components/ScoutForm';
export const metadata = { title: 'Restaraunt', description: 'Better Atoms Space & Time Restaurant – Project: Bengaluru. Coming soon.', alternates: { canonical: '/restaraunt/' } };
const menu = [['🍔', 'Jupiter Burger', '25', '3 patties, moon cheese, gravity sauce.'], ['🍕', 'Galaxy Pizza', '22', 'Pepperoni stars on a comet crust.'], ['☄️', 'Junior Asteroids', '12', 'Chicken nuggets shaped like meteors. Comes with slime dip.', true], ['🥤', 'Alien Slime Shake', '10', 'Lime and vanilla. Glows in the dark.'], ['🍗', 'Magma Wings', '19', 'Hotter than the sun. Warning.'], ['🍦', 'Zero-G Sundae', '14', 'Floating ice cream. Catch it if you can!', true]];
const stats = [['🚧', '42', 'LOCATIONS SCOUTED'], ['🚗', '∞', 'SILK BOARD TRAFFIC'], ['💸', '1M', 'FUNDS MISSING (Paddo₹)'], ['🤝', '0', 'LOCATIONS FINALIZED']];
export default function Restaurant() {
  return (<>
    <PageHero eyebrow="🪐 BETTER ATOMS · Project: Bengaluru" title={<>SPACE &amp; TIME<br /><span className="text-butter">RESTAURANT</span></>} image={a("/img/paddo-sm.webp")} imageAlt="Paddo the green alien waving in front of a space colony">
      <p className="flex flex-wrap gap-2 text-sm font-bold"><span className="rounded-full bg-white/15 px-3 py-1">⚠️ GRAVITY: ON</span><span className="rounded-full bg-white/15 px-3 py-1">🎉 PARTY PROTOCOL</span><span className="rounded-full bg-bubble/30 px-3 py-1">🎈 KIDS EAT FREE ON MARS-DAYS!</span></p>
      <p className="mt-4">We are looking for a place to crash (literally) in Bangalore. But first, we need to find Paddo—he has the startup capital!</p>
      <div className="mt-6 flex flex-wrap gap-3"><a href="#suggest" className="clay-btn">SUGGEST LOCATION</a><a href="#mission" className="clay-btn ghost">START SCAN ⬇</a></div>
    </PageHero>
    <Section id="tech" eyebrow="🚀" title={<>WE HAVE THE TECH.<br />WE NEED THE PIN CODE.</>}>
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="text-lg leading-8 space-y-4"><p>Captain Zog is currently orbiting over the Silk Board junction (big mistake). He's looking for a plot in Indiranagar, Koramangala, or Whitefield large enough to park a Class-5 Cruiser.</p><p>However, there's a problem. Paddo, our alien financier, wandered off to try a "Masala Dosa" and took the Galactic Credits with him. We need your help to find him and fund this project!</p>
          <ul className="flex flex-wrap gap-3 pt-2 text-base font-bold">{[['📍', 'BANGALORE'], ['💰', 'FUNDS LOST'], ['🚧', 'COMING SOON']].map(([e, t]) => <li key={t} className="rounded-full bg-white px-4 py-2 shadow-soft">{e} {t}</li>)}</ul></Reveal>
        <Reveal delay={.1} className="clay-card p-6 bg-gradient-to-br from-[#FFE7D1] to-[#FFC9A8]"><p className="font-display text-3xl font-bold">DINER</p><p className="mt-1">Future Site? <em>Rendering of Indiranagar Branch</em></p><p className="mt-4 rounded-2xl bg-white/70 p-4">✨ <strong>Missing: PADDO</strong> — Last seen with funding bag</p></Reveal>
      </div>
    </Section>
    <Section id="mission" eyebrow="💰 INVESTOR PRIORITY" title="FIND PADDO & THE FUNDS" tint="bg-[#F3EAFF]">
      <div className="grid gap-6 md:grid-cols-3">
        <Reveal className="clay-card p-6"><p>Help us locate the alien financier hiding on this page to unlock the launch capital!</p><p className="mt-3 font-bold">FUNDS RECOVERY · PADDO FOUND: 0/5</p></Reveal>
        <Reveal delay={.08} className="clay-card p-6"><h3 className="text-xl font-bold">MISSION: RECOVER ASSETS</h3><p className="mt-2">Paddo and his crew are hiding with the money bags. Find 5 of them on this page to trigger the "Investment Secure" protocol!</p></Reveal>
        <Reveal delay={.16} className="clay-card p-6"><h3 className="text-xl font-bold">INVESTOR PERKS</h3><p className="mt-2">Founders get free "Moon Pies" for life and a reserved parking spot for their spaceship (or scooter) in Indiranagar.</p></Reveal>
      </div>
      <Reveal className="mt-6 clay-card p-6"><h3 className="text-xl font-bold">DESIGN OUR STAFF</h3><ul className="mt-3 flex flex-wrap gap-2">{['🎨 Change Color', '👀 Change Eyes', '👄 Change Mouth', '📡 Change Antenna'].map(t => <li key={t} className="rounded-full bg-cream px-4 py-2 font-semibold">{t}</li>)}</ul><p className="mt-3 text-sm text-ink/60">[INTERACTIVE PLACEHOLDER: the live page’s find-Paddo game and staff designer are not re-implemented]</p></Reveal>
    </Section>
    <Section id="menu" eyebrow="CONCEPT MENU" title="This is what we *will* serve once we find a kitchen in Bangalore.">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{menu.map(([e, n, p, d, fav], i) => (<Reveal as="li" key={n} delay={(i % 3) * .07} className="clay-card p-6 relative"><span aria-hidden className="text-5xl">{e}</span>{fav && <span className="absolute right-5 top-5 rounded-full bg-butter px-3 py-1 text-xs font-bold">⭐ JUNIOR CADET FAVORITE</span>}<h3 className="mt-3 text-2xl font-bold">{n}</h3><p className="font-display text-coral text-lg">{p} Paddo ₹</p><p className="mt-1">{d}</p></Reveal>))}</ul>
      <div className="mt-8 text-center"><a href="#suggest" className="clay-btn">PRE-ORDER NOW</a></div>
      <ul className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">{stats.map(([e, n, l], i) => (<Reveal as="li" key={l} delay={i * .06} className="clay-card p-5 text-center"><span aria-hidden className="text-3xl">{e}</span><p className="font-display text-4xl font-bold text-dusk">{n}</p><p className="text-xs font-bold tracking-wider">{l}</p></Reveal>))}</ul>
    </Section>
    <Section id="oracle" eyebrow="ASK THE ALIEN ORACLE" title="🔮 PADDO SAYS..." tint="bg-[#F3EAFF]">
      <Reveal className="clay-card p-6 max-w-xl"><p className="font-display text-xl">“Click me for galactic financial advice!”</p><p className="mt-2 text-sm">(Disclaimer: Paddo is not a registered financial advisor)</p></Reveal>
    </Section>
    <Section id="suggest" eyebrow="SUGGEST LOCATION" title="Help Captain Zog find a spot"><ScoutForm /></Section>
    <p className="text-center pb-10 font-display text-ink/70">BETTER ATOMS · © 2055. COMING SOON TO BENGALURU.</p>
  </>);
}
