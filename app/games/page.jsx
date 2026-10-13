import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
export const metadata = { title: 'Discover Engaging Educational Games for Children', description: 'Better Atoms turns science, math, and technology into playful, story-driven experiences.', alternates: { canonical: '/games/' } };
const pts = [['🛟', 'Learning is safe and pressure-free. Mistakes are part of the game, helping kids think, try again, and grow.'], ['🔬', 'Abstract ideas become visible. Concepts like atoms, data, and gravity are shown in colorful, playful ways kids can understand.'], ['🏆', 'Motivation stays high. Levels, rewards, and progress keep kids engaged while they learn naturally.']];
export default function Games() {
  return (<>
    <PageHero eyebrow="Better Atoms - Games Coming soon!" title="Where Curiosity is Stronger then Gravity" image="/img/games.webp" imageAlt="Better Atoms games world: rocket, robots, an astronaut kid and a yellow submarine">
      <p className="font-display text-2xl text-butter">Advanced AI for learning</p>
      <p className="mt-3">Better Atoms turns science, math, and technology into playful, story-driven experiences. We don’t just teach concepts — we let kids explore, build, experiment, and discover through beautiful worlds and smart games.</p>
      <p className="mt-3">From space rockets to underwater labs, every experience is designed to make learning feel like play.</p>
    </PageHero>
    <Section id="worlds" eyebrow="Benefits" title="Worlds That Teach Through Play">
      <ul className="grid gap-6 md:grid-cols-3">{pts.map(([e, t], i) => (<Reveal as="li" key={i} delay={i * .08} className="clay-card p-7"><span aria-hidden className="grid place-items-center h-16 w-16 rounded-3xl bg-butter text-3xl shadow-clay">{e}</span><p className="mt-5 text-lg leading-8">{t}</p></Reveal>))}</ul>
    </Section>
  </>);
}
