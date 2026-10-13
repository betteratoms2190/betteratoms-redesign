import Blobs from './Blobs';
export default function PageHero({ eyebrow, title, children, image, imageAlt }) {
  return (
    <section className="relative sky-bg text-white overflow-hidden">
      <Blobs />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
        <div>
          {eyebrow && <p className="inline-block rounded-full bg-white/15 px-4 py-1.5 font-display font-semibold text-butter">{eyebrow}</p>}
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] drop-shadow-[0_6px_0_rgba(0,0,0,.18)]">{title}</h1>
          <div className="mt-6 text-lg text-white/90 leading-8">{children}</div>
        </div>
        {image && (<div className="relative"><img src={image} alt={imageAlt} width="600" height="400" fetchPriority="high" className="w-full h-auto rounded-blob shadow-soft ring-4 ring-white/20 rotate-[1.5deg]" /></div>)}
      </div>
      <div aria-hidden className="absolute -bottom-px inset-x-0 h-16 bg-cream" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }} />
    </section>
  );
}
