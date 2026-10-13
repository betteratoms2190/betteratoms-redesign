export default function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="blob floaty" style={{ width: 90, height: 90, left: '6%', top: '18%', background: 'radial-gradient(circle at 30% 30%,#FFE58A,#FFB020)' }} />
      <span className="blob floaty" style={{ width: 54, height: 54, right: '8%', top: '62%', animationDelay: '-2s', background: 'radial-gradient(circle at 30% 30%,#9FF0FF,#2D9CDB)' }} />
      <span className="blob floaty" style={{ width: 130, height: 130, right: '-30px', top: '6%', animationDelay: '-4s', background: 'radial-gradient(circle at 30% 30%,#FFB3D6,#E84393)' }} />
      <span className="blob floaty hidden md:block" style={{ width: 40, height: 40, left: '44%', bottom: '8%', animationDelay: '-1s', background: 'radial-gradient(circle at 30% 30%,#B8FFB0,#2FA84F)' }} />
      {[...Array(14)].map((_, i) => (<span key={i} className="absolute text-butter" style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%`, fontSize: 8 + (i % 4) * 4, opacity: .7 }}>✦</span>))}
    </div>
  );
}
