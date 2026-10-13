import { SITE_URL } from '@/components/site';
export const dynamic = 'force-static';
export default function robots() { return { rules: { userAgent: '*', allow: '/' }, sitemap: `${SITE_URL}/sitemap.xml` }; }
