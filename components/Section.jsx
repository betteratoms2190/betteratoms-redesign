import Reveal from './Reveal';
export default function Section({ id, eyebrow, title, children, className = '', tint = '' }) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-h` : undefined} className={`relative py-16 md:py-24 ${tint} ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        {(eyebrow || title) && (
          <Reveal className="max-w-3xl mb-10">
            {eyebrow && <p className="font-display font-semibold text-coral uppercase tracking-wider">{eyebrow}</p>}
            {title && <h2 id={id ? `${id}-h` : undefined} className="mt-2 text-3xl md:text-5xl font-bold text-ink">{title}</h2>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
