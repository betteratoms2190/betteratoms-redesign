'use client';
import { useEffect, useState } from 'react';
export default function Cookie() {
  const [show, setShow] = useState(false);
  useEffect(() => { try { setShow(!localStorage.getItem('ba-cookie')); } catch {} }, []);
  if (!show) return null;
  return (
    <div role="dialog" aria-label="Cookie notice" className="fixed bottom-4 inset-x-4 sm:left-auto sm:right-6 sm:w-[26rem] z-50 rounded-blob bg-white p-5 shadow-soft ring-1 ring-ink/10">
      <p className="font-display text-lg font-bold">This website uses cookies.</p>
      <p className="mt-1 text-sm leading-6">We use cookies to understand how Better Atoms is explored and to improve the experience. By accepting, you consent to the use of cookies for aggregated analytics.</p>
      <button type="button" className="clay-btn green mt-3 !py-2 !text-base" onClick={() => { try { localStorage.setItem('ba-cookie', '1'); } catch {} setShow(false); }}>Accept</button>
    </div>
  );
}
