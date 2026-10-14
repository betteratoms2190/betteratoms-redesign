import { a } from '@/components/asset';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
export const metadata = { title: 'EdTech', description: 'Better Atoms: Space Academy | Systems Online – command dashboard, reactor lander sim, orrery, matter database and classified archives.', alternates: { canonical: '/edtech/' } };
const mods = [['❖', 'COMMAND', 'DASHBOARD'], ['⚡', 'REACTOR', 'LANDER SIM'], ['🪐', 'ORRERY', 'SOLAR SYSTEM'], ['⌬', 'MATTER', 'DATABASE'], ['◈', 'ARCHIVES', 'CLASSIFIED']];
const missions = [['Access Matter Database', '+10 XP'], ['Land Safely (Any Planet)', '+50 XP'], ["Study 'Black Holes' Archive", '+20 XP']];
const stats = [['⌬', 'MATTER DATABASE', '118'], ['◈', 'ARCHIVES', '12'], ['🪐', 'PLANETS', '9']];
export default function EdTech() {
  return (<>
    <PageHero eyebrow="BA ACADEMY · SYS.VER.4.2" title={<>Better Atoms:<br /><span className="text-sky">Space Academy</span></>} image={a("/img/ebook1-sm.webp")} imageAlt="Paddo standing in a futuristic space colony">
      <p className="font-display text-2xl text-butter">INCOMING TRANSMISSION — WELCOME COMMANDER</p>
      <p className="mt-3">Sector 7 sensors indicate a fluctuation in the reactor core. Immediate manual calibration required.</p>
      <p className="mt-2 font-mono text-bubble">&gt; STATUS: CRITICAL</p>
      <p className="mt-4 text-sm text-white/70">CADET_01 · LVL 1 · 0 / 100 XP</p>
    </PageHero>
    <Section id="modules" eyebrow="Systems Online" title="Academy modules">
      <ul className="grid gap-5 grid-cols-2 md:grid-cols-5">{mods.map(([e, a, b], i) => (<Reveal as="li" key={a} delay={i * .06} className="clay-card p-6 text-center"><span aria-hidden className="text-4xl">{e}</span><h3 className="mt-2 text-lg font-bold">{a}</h3><p className="text-sm text-ink/70">{b}</p></Reveal>))}</ul>
      <p className="mt-6 rounded-2xl bg-white p-4 text-sm ring-1 ring-ink/10">[INTERACTIVE APP PLACEHOLDER] The live page runs an interactive Space Academy app (INITIATE LAUNCH · CONSULT AI · database search). Embed or port the original app here.</p>
    </Section>
    <Section id="missions" eyebrow="DAILY SCORE: 0 XP · REFRESH IN: 14H 20M" title="DAILY MISSIONS" tint="bg-[#F3EAFF]">
      <div className="grid gap-8 lg:grid-cols-2">
        <ul className="grid gap-4">{missions.map(([m, x], i) => (<Reveal as="li" key={m} delay={i * .07} className="clay-card flex items-center justify-between p-5"><span className="flex items-center gap-3 text-lg font-semibold"><span aria-hidden className="h-6 w-6 rounded-full border-4 border-paddo" />{m}</span><span className="rounded-full bg-lime/30 px-3 py-1 font-bold text-[#1F6B33]">{x}</span></Reveal>))}</ul>
        <ul className="grid grid-cols-3 gap-4">{stats.map(([e, l, n], i) => (<Reveal as="li" key={l} delay={i * .07} className="clay-card p-5 text-center"><span aria-hidden className="text-3xl">{e}</span><p className="mt-1 font-display text-4xl font-bold text-dusk">{n}</p><p className="text-xs font-bold tracking-wider">{l}</p></Reveal>))}</ul>
      </div>
    </Section>
  </>);
}
