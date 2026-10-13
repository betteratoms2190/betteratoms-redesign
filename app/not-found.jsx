import Link from 'next/link';
export default function NotFound() { return <section className="py-24 text-center px-6"><h1 className="text-5xl font-bold">Unexpected data!</h1><p className="mt-3">This page drifted out of orbit.</p><Link href="/" className="clay-btn mt-6">Home</Link></section>; }
