import { Metadata } from 'next';
import { FadeInUp } from '@/components/animations/reveal';
import { BlogIndex } from '@/components/blog/blog-index';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { getBlogPosts } from '@/lib/content';
import { getCourses } from '@/lib/courses';

export const metadata: Metadata = {
  title: 'Blog - Portfolio',
  description: 'Read articles about web development, design, and technology.',
};

export default function BlogPage() {
  const posts = getBlogPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    category: post.category,
    readingTime: post.readingTime,
  }));
  const courses = getCourses().map((course) => ({
    slug: course.slug,
    title: course.title,
    tagline: course.tagline,
    levelCount: course.levels.length,
    topicCount: course.levels.reduce((sum, level) => sum + level.topics.length, 0),
  }));

  return (
    <>
      <SectionWrapper className="pt-32 pb-10">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6">Blog</h1>
            <p className="text-xl text-[var(--text-secondary)]">
              Thoughts on web development, design patterns, and the latest
              technologies shaping the future of the web.
            </p>
          </div>
        </FadeInUp>
      </SectionWrapper>

      <BlogIndex posts={posts} courses={courses} />
    </>
  );
}
