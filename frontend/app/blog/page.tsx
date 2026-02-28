import { Metadata } from 'next';
import { FadeInUp } from '@/components/animations/reveal';
import { BlogCard } from '@/components/cards/blog-card';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { getBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog - Portfolio',
  description: 'Read articles about web development, design, and technology.',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="pt-32 pb-16">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="mb-6">Blog</h1>
            <p className="text-xl text-[var(--text-secondary)]">
              Thoughts on web development, design patterns, and the latest
              technologies shaping the future of the web.
            </p>
          </div>
        </FadeInUp>
      </SectionWrapper>

      {/* Blog Posts Grid */}
      <SectionWrapper variant="secondary" className="py-0 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <FadeInUp key={post.slug} delay={index * 0.1}>
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                date={new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
                readingTime={post.readingTime}
                category={post.category}
                href={`/blog/${post.slug}`}
              />
            </FadeInUp>
          ))}
        </div>

        {posts.length === 0 && (
          <FadeInUp>
            <div className="text-center py-16">
              <p className="text-xl text-[var(--text-muted)]">
                No blog posts yet. Check back soon!
              </p>
            </div>
          </FadeInUp>
        )}
      </SectionWrapper>
    </>
  );
}
