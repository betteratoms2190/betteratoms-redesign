'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const AtomScene = dynamic(() => import('./AtomScene'), { ssr: false });

function ClayAtom() {
  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[420px]">
      <div className="absolute inset-[30%] rounded-full" style={{ background: 'radial-gradient(circle at 32% 30%,#C8FFC0,#5BD66B 45%,#1F7A3A)', boxShadow: '0 30px 60px -20px rgba(0,0,0,.5), inset -18px -22px 40px rgba(0,0,0,.25)' }} />
      {[['#FF8A3D', 'rotate(60deg)'], ['#4CC9F0', 'rotate(-60deg)'], ['#FF7EB6', 'rotate(0deg)']].map(([c, t], i) => (
        <div key={i} className="absolute inset-[8%] rounded-[50%] border-[6px]" style={{ borderColor: c, transform: `${t} scaleY(.38)`, boxShadow: `0 0 0 1px ${c}55` }} />
      ))}
    </div>
  );
}
export default function Hero3D() {
  const [mode, setMode] = useState('static');
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.matchMedia('(max-width: 767px)').matches;
    if (small) return;
    const go = () => setMode(reduce ? 'still' : 'live');
    const id = 'requestIdleCallback' in window ? window.requestIdleCallback(go, { timeout: 2500 }) : setTimeout(go, 1200);
    return () => ('cancelIdleCallback' in window ? window.cancelIdleCallback(id) : clearTimeout(id));
  }, []);
  return (
    <div className="relative h-[340px] sm:h-[420px] md:h-[520px] pointer-events-none md:pointer-events-auto">
      {mode === 'static' ? <div className="h-full flex items-center"><ClayAtom /></div> : <AtomScene reduce={mode === 'still'} />}
    </div>
  );
}
