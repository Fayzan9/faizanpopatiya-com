import { Hero } from '@/components/sections/hero';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { Skills } from '@/components/sections/skills';
import { BlogPreview } from '@/components/sections/blog-preview';
import { CTA } from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <BlogPreview />
      <CTA />
    </>
  );
}


