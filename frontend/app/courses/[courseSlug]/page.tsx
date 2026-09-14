import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { FadeInUp } from '@/components/animations/reveal';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import { CourseTOC } from '@/components/courses/course-toc';
import { getCourse, getCourses } from '@/lib/courses';

export async function generateStaticParams() {
  return getCourses().map((course) => ({ courseSlug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ courseSlug: string }>;
}): Promise<Metadata> {
  const { courseSlug } = await params;
  const course = getCourse(courseSlug);

  if (!course) {
    return { title: 'Course Not Found' };
  }

  return {
    title: `${course.title} Course - Blog`,
    description: course.tagline,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseSlug: string }>;
}) {
  const { courseSlug } = await params;
  const course = getCourse(courseSlug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <SectionWrapper className="pt-24 pb-8">
        <FadeInUp>
          <Link href="/blog">
            <Button variant="ghost" className="gap-2 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
              Course
            </span>
          </div>

          <h1 className="mb-4">{course.title}</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl">
            {course.description}
          </p>
        </FadeInUp>
      </SectionWrapper>

      <SectionWrapper variant="secondary" className="pt-8 pb-24">
        <FadeInUp>
          <CourseTOC courseSlug={course.slug} levels={course.levels} />
        </FadeInUp>
      </SectionWrapper>
    </>
  );
}
