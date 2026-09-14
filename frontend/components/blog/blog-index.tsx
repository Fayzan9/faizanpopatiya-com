'use client';

import { useMemo, useState } from 'react';
import { FadeInUp } from '@/components/animations/reveal';
import { BlogCard } from '@/components/cards/blog-card';
import { CourseCard } from '@/components/cards/course-card';
import { CourseScrollRow } from '@/components/courses/course-scroll-row';
import { SearchInput } from '@/components/ui/search-input';
import { SectionWrapper } from '@/components/layout/section-wrapper';

export interface BlogIndexPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
}

export interface BlogIndexCourse {
  slug: string;
  title: string;
  tagline: string;
  levelCount: number;
  topicCount: number;
}

interface BlogIndexProps {
  posts: BlogIndexPost[];
  courses: BlogIndexCourse[];
}

function matchesQuery(haystack: string, query: string) {
  return haystack.toLowerCase().includes(query);
}

export function BlogIndex({ posts, courses }: BlogIndexProps) {
  const [query, setQuery] = useState('');
  const normalized = query.trim().toLowerCase();

  const filteredCourses = useMemo(() => {
    if (!normalized) return courses;
    return courses.filter(
      (course) =>
        matchesQuery(course.title, normalized) || matchesQuery(course.tagline, normalized)
    );
  }, [courses, normalized]);

  const filteredPosts = useMemo(() => {
    if (!normalized) return posts;
    return posts.filter(
      (post) =>
        matchesQuery(post.title, normalized) ||
        matchesQuery(post.excerpt, normalized) ||
        matchesQuery(post.category, normalized)
    );
  }, [posts, normalized]);

  const hasResults = filteredCourses.length > 0 || filteredPosts.length > 0;

  return (
    <>
      <SectionWrapper className="pt-0 pb-8">
        <FadeInUp>
          <SearchInput
            id="blog-search"
            value={query}
            onChange={setQuery}
            placeholder="Search posts and courses…"
            className="max-w-xl mx-auto"
          />
        </FadeInUp>
      </SectionWrapper>

      {filteredCourses.length > 0 && (
        <SectionWrapper className="pt-0 pb-8">
          <FadeInUp>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--text-primary)]">
              Courses
            </h2>
            <CourseScrollRow>
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.slug}
                  slug={course.slug}
                  title={course.title}
                  tagline={course.tagline}
                  levelCount={course.levelCount}
                  topicCount={course.topicCount}
                />
              ))}
            </CourseScrollRow>
          </FadeInUp>
        </SectionWrapper>
      )}

      {(filteredPosts.length > 0 || !hasResults) && (
        <SectionWrapper variant="secondary" className="pt-8 pb-24">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
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
          ) : (
            <FadeInUp>
              <div className="text-center py-16">
                <p className="text-xl text-[var(--text-muted)]">
                  {normalized
                    ? `No results for “${query.trim()}”.`
                    : 'No blog posts yet. Check back soon!'}
                </p>
              </div>
            </FadeInUp>
          )}
        </SectionWrapper>
      )}
    </>
  );
}
