'use client';
import { useState } from 'react';
export default function ScoutForm() {
  const [done, setDone] = useState(false);
  return (
    <form className="clay-card p-6 md:p-8 max-w-2xl grid gap-4" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <label className="grid gap-1 font-semibold">Scout Name<input required name="scout" placeholder="Scout Name" className="rounded-2xl border-2 border-ink/15 px-4 py-3 font-normal" /></label>
      <label className="grid gap-1 font-semibold">Area
        <select name="area" className="rounded-2xl border-2 border-ink/15 px-4 py-3 font-normal"><option>Indiranagar</option><option>Koramangala</option><option>Whitefield</option></select></label>
      <label className="grid gap-1 font-semibold">Why here?<textarea name="why" rows={3} placeholder="Why here? (e.g. Good parking, nice trees)" className="rounded-2xl border-2 border-ink/15 px-4 py-3 font-normal" /></label>
      <button className="clay-btn justify-self-start" type="submit">SUGGEST LOCATION</button>
      {done && <p role="status" className="font-semibold text-[#1F6B33]">[FORM ENDPOINT NEEDED] Thanks, Scout! This preview doesn’t send data yet.</p>}
    </form>
  );
}
