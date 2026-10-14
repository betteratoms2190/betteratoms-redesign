import { a } from '@/components/asset';
import './globals.css';
import { Fredoka, Nunito } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Cookie from '@/components/Cookie';
import { SITE_URL } from '@/components/site';
const display = Fredoka({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display', display: 'swap' });
const body = Nunito({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-body', display: 'optional' });
export const metadata = {
  metadataBase: new URL(SITE_URL + '/'),
  title: { default: 'Better Atoms', template: '%s | Better Atoms' },
  description: 'Better Atoms brings space education to life through renewable tech, EdTech toys, and a real space-age alien restaurant.',
  icons: { icon: a('/img/favicon.png'), apple: a('/img/logo-tm.jpg') },
  openGraph: { siteName: 'Better Atoms', type: 'website', images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Paddo – The Trial of Curiosity, by Better Atoms' }] },
  twitter: { card: 'summary_large_image' },
};
export const viewport = { themeColor: '#1B1045' };
export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Cookie />
      </body>
    </html>
  );
}
