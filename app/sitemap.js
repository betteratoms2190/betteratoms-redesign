import posts from '@/data/posts.json';
import { SITE_URL } from '@/components/site';
export const dynamic = 'force-static';
export default function sitemap() {
  const paths = ['/', '/blog-atoms/', '/books/', '/restaraunt/', '/edtech/', '/games/', '/privacy-&-policies/', ...posts.map(p => `/blog-atoms/f/${p.slug}/`)];
  return paths.map(p => ({ url: SITE_URL + encodeURI(p).replace(/&/g, '%26') }));
}
