import Link from 'next/link';
import Hero3D from '@/components/Hero3D';
import Blobs from '@/components/Blobs';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { AMAZON_LAUNCH } from '@/components/site';

export const metadata = { title: { absolute: 'Better Atoms' }, alternates: { canonical: '/' } };

const services = [
  ['🎮', 'Gamified STEM Learning Platform', 'A browser-based sci-fi simulation where students learn engineering and renewable energy concepts through puzzles, systems design, and experimentation.', 'from-[#FFE7D1] to-[#FFC9A8]'],
  ['🛸', 'Space Restaurant :UFO CRASH (Coming Soon)', 'An Alien Space & Time restro where learners run a futuristic space restaurant, managing power generation, storage, and efficiency to keep operations running. This scenario teaches real-world energy optimization, resource management, and systems thinking in a fun, practical context also amazing space food items.', 'from-[#FFE0F0] to-[#FFB8DA]'],
  ['☀️', 'Renewable Energy Education', 'Interactive experiences built around clean energy principles, helping students understand how energy is generated, stored, distributed, and used.', 'from-[#FFF4C7] to-[#FFE07A]'],
  ['🧩', 'Modular Hardware Kits (Coming Soon)', 'Sustainable, modular kits that extend digital learning into the physical world, allowing students to build and test real systems inspired by the game.', 'from-[#D9F7FF] to-[#A6E6FA]'],
  ['🏫', 'Educational Partnerships', 'Collaborations with schools and institutions to integrate engaging, future-ready STEM learning into classrooms and programs.', 'from-[#E0FFE0] to-[#B5F0B9]'],
];
const stem = [['🔭', 'Cosmic Research', 'Daily updates from the frontiers of astronomy.'], ['🧬', 'Micro to Macro', 'Visualizing scale from DNA to Galaxies.'], ['🚀', 'Future Tech', 'Tracking the latest in aerospace propulsion.']];

export default function Home() {
  return (
    <>
      <section className="relative sky-bg text-white overflow-hidden">
        <Blobs />
        <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-20 md:py-20 grid gap-6 md:grid-cols-2 items-center">
          <div className="relative z-10">
            <p className="inline-block rounded-full bg-white/15 px-4 py-1.5 font-display font-semibold text-butter">Just Launched 🚀</p>
            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] drop-shadow-[0_6px_0_rgba(0,0,0,.2)]">Better Atoms</h1>
            <p className="mt-5 max-w-xl text-lg md:text-xl leading-8 text-white/90">Better Atoms brings space education to life through renewable tech, EdTech toys, and a real space-age alien restaurant.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={AMAZON_LAUNCH} target="_blank" rel="noopener" className="clay-btn">📘 Paddo and the Trial of Curiosity</a>
              <Link href="/edtech/" className="clay-btn ghost">Explore EdTech</Link>
            </div>
          </div>
          <Hero3D />
        </div>
        <div aria-hidden className="absolute -bottom-px inset-x-0 h-16 bg-cream" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }} />
      </section>

      <Section id="introduction" eyebrow="What it is" title="Introduction">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] items-start">
          <Reveal className="clay-card p-8 md:p-10 text-lg leading-8 space-y-5">
            <p>Better Atoms explores how energy, technology, and sustainability function in space environments. Through digital learning content and interactive platforms, learners discover how solar, kinetic, chemical, and thermal energy power spaceships, habitats, and future space infrastructure. Space becomes the lens through which complex ideas are made engaging, intuitive, and memorable.</p>
            <p>Beyond digital education, Better Atoms extends into the physical world through a space-age alien restaurant. It serves as a living showcase of how clean technology can support futuristic concepts while serving delicious space food. Renewable energy systems, efficient resource use, and sustainable design are integrated into the restaurant experience, turning dining into discovery.</p>
            <p>Better Atoms also develops EdTech toys and modular learning kits inspired by space systems and renewable technology. These sustainable products allow learners to explore engineering concepts through play, building, and experimentation beyond the screen.</p>
            <p>Built by developers, educators, and caterers, Better Atoms is a growing community driven by curiosity, innovation, and sustainability. Together, we are creating an ecosystem where space education, renewable ideas, and creative thinking come together to prepare learners for the future—on Earth and beyond.</p>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-5">
            <img src="/img/logo.webp" alt="Logo with bold white text 'BETTER ATOMS' on a black circular background." width="365" height="365" loading="lazy" className="w-56 mx-auto rounded-full shadow-soft floaty" />
            <img src="/img/molecule.webp" alt="Colorful molecular model on a reflective black surface." width="600" height="400" loading="lazy" className="rounded-blob shadow-soft w-full h-auto" />
          </Reveal>
        </div>
      </Section>

      <section aria-labelledby="stem-h" className="relative sky-bg text-white py-16 md:py-24 overflow-hidden">
        <Blobs />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="max-w-3xl">
            <h2 id="stem-h" className="text-3xl md:text-5xl font-bold">STEM EdTech</h2>
            <p className="mt-4 text-lg leading-8 text-white/90">Exploring the Universe, one scale at a time. We are a premier digital institution dedicated to visualizing the cosmos and making complex scientific data accessible, immersive, and beautiful.</p>
          </Reveal>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {stem.map(([e, t, d], i) => (
              <Reveal as="li" key={t} delay={i * 0.08} className="rounded-blob bg-white/10 p-7 ring-1 ring-white/20 backdrop-blur hover:bg-white/15 transition">
                <span aria-hidden className="text-4xl">{e}</span><h3 className="mt-3 text-2xl font-semibold">{t}</h3><p className="mt-2 text-white/85">{d}</p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-8 rounded-2xl bg-black/20 p-4 text-sm text-white/80"><strong>COSMIC INTELLIGENCE FEED · LIVE UPDATES</strong> — [LIVE FEED PLACEHOLDER: the original feed was not loading at crawl time (“Signal Interrupted. Unable to fetch feed.”)]</p>
        </div>
      </section>

      <Section id="services" eyebrow="How it works" title="Our Services">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([e, t, d, g], i) => (
            <Reveal as="li" key={t} delay={(i % 3) * 0.08} className={`clay-card p-7 bg-gradient-to-br ${g}`}>
              <span aria-hidden className="grid place-items-center h-16 w-16 rounded-3xl bg-white text-3xl shadow-clay">{e}</span>
              <h3 className="mt-5 text-xl font-bold">{t}</h3><p className="mt-2 leading-7">{d}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section id="community" eyebrow="Who we are" title="Our Community" tint="bg-[#F3EAFF]">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] items-center">
          <Reveal><img src="/img/games.webp" alt="Better Atoms illustration: kids, robots and sea creatures exploring a colourful world – Learning that feels like an adventure" width="800" height="533" loading="lazy" className="rounded-blob shadow-soft w-full h-auto -rotate-1" /></Reveal>
          <Reveal delay={0.1} className="text-lg leading-8 space-y-5">
            <p>Better Atoms is built by—and for—a community of developers, educators, and creators who believe learning should be practical, playful, and purposeful.</p>
            <p>As developers, we design interactive systems and simulations that make complex energy concepts intuitive and engaging. As educators, we focus on pedagogy, learning outcomes, and accessibility, ensuring that every experience supports real understanding. As creators, we craft immersive worlds, stories, and hands-on experiences that make STEM education memorable and fun.</p>
            <p>Our community includes students exploring engineering for the first time, teachers bringing innovation into their classrooms, and builders contributing ideas, feedback, and experimentation. Learning happens collaboratively, through curiosity, iteration, and shared problem-solving.</p>
            <p>Together, we are creating an ecosystem where education, technology, and sustainability come together—preparing learners not just to study the future, but to build it.</p>
          </Reveal>
        </div>
      </Section>

      <Section id="proof" eyebrow="Proof" title="What families & schools say">
        <Reveal className="clay-card p-8 text-center border-2 border-dashed border-ink/20"><p className="font-display text-xl">[TESTIMONIAL NEEDED]</p><p className="mt-2 text-ink/70">No testimonials, reviews or partner names exist on the live site yet. Add real ones here.</p></Reveal>
      </Section>

      <section className="pb-24 px-6">
        <Reveal className="mx-auto max-w-5xl rounded-[2.75rem] sky-bg text-white p-10 md:p-14 grid gap-8 md:grid-cols-[1.4fr_1fr] items-center shadow-soft overflow-hidden relative">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Just Launched 🚀 Better Atoms: Paddo and the Trial of Curiosity 📘</h2>
            <div className="mt-6 flex flex-wrap gap-3"><a href={AMAZON_LAUNCH} target="_blank" rel="noopener" className="clay-btn">Click Here</a><Link href="/books/" className="clay-btn ghost">See Books</Link></div>
          </div>
          <img src="/img/book-cover.webp" alt="Book cover: Paddo – The Trial of Curiosity, The Space Explorer's Handbook, by Aman Singh" width="300" height="450" loading="lazy" className="w-48 mx-auto rounded-2xl shadow-soft rotate-3 floaty" />
        </Reveal>
      </section>
    </>
  );
}
