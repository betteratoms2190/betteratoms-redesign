import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import BlogList from '@/components/BlogList';
import posts from '@/data/posts.json';
export const metadata = { title: 'Blog Atoms', description: 'Stories, ideas and transmissions from Better Atoms – Education, Space and Technology.', alternates: { canonical: '/blog-atoms/' } };
// Excerpts as shown on the live blog index
const EX = { 'better-atoms-where-learning-feels-like-an-adventure': 'A New Dawn for STEM LearningIn today’s fast-evolving world, the integration of technology in the classroom is transforming how students engage with STEM subjects. EdTech is breaking traditional molds, offering interactiv...' };
export default function Blog() {
  const list = posts.map(p => ({ slug: p.slug, title: p.title, date: p.date, cats: p.cats, image: p.image, excerpt: EX[p.slug] || p.body[0] }));
  return (<><PageHero eyebrow="Blog Atoms" title="Blog Atoms"><p>Education · Space · Technology</p></PageHero><Section><BlogList posts={list} /></Section></>);
}
