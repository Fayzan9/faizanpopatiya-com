import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, PenLine } from 'lucide-react';
import { FadeInUp } from '@/components/animations/reveal';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import { MDXContent } from '@/components/mdx/mdx-content';
import { cn } from '@/lib/utils';
import { getCourses, getCourseTopicLocation } from '@/lib/courses';
import { getCourseTopicContent } from '@/lib/content';
import 'highlight.js/styles/github-dark.css';

export async function generateStaticParams() {
  return getCourses().flatMap((course) =>
    course.levels.flatMap((level) =>
      level.topics.map((topic) => ({
        courseSlug: course.slug,
        topicSlug: topic.slug,
      }))
    )
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ courseSlug: string; topicSlug: string }>;
}): Promise<Metadata> {
  const { courseSlug, topicSlug } = await params;
  const location = getCourseTopicLocation(courseSlug, topicSlug);

  if (!location) {
    return { title: 'Topic Not Found' };
  }

  return {
    title: `${location.topic.title} - ${location.course.title} - Blog`,
    description: `${location.topic.title} from the ${location.course.title} course.`,
  };
}

export default async function CourseTopicPage({
  params,
}: {
  params: Promise<{ courseSlug: string; topicSlug: string }>;
}) {
  const { courseSlug, topicSlug } = await params;
  const location = getCourseTopicLocation(courseSlug, topicSlug);

  if (!location) {
    notFound();
  }

  const { course, level, topic, prev, next } = location;
  const content = getCourseTopicContent(course.slug, topic.slug);

  return (
    <>
      <SectionWrapper className="pt-24 pb-8">
        <FadeInUp>
          <Link href={`/courses/${course.slug}`}>
            <Button variant="ghost" className="gap-2 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to {course.title} Course
            </Button>
          </Link>
        </FadeInUp>
      </SectionWrapper>

      <SectionWrapper className="py-0">
        <FadeInUp>
          <article className="max-w-3xl mx-auto">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                Level {level.number} · {level.title}
              </span>
            </div>

            <h1 className={topic.authors ? 'mb-1' : 'mb-6'}>{topic.title}</h1>
            {topic.authors && (
              <p className="text-sm text-[var(--text-muted)] mb-6">{topic.authors}</p>
            )}

            {content ? (
              <div className="max-w-none mb-12">
                <MDXContent source={content.content} />
              </div>
            ) : (
              <div className="p-8 rounded-2xl glass neon-border mb-12">
                {topic.highlight && (
                  <p className="text-[var(--accent)] font-medium mb-4">{topic.highlight}</p>
                )}

                {topic.notes && topic.notes.length > 0 && (
                  <div className="space-y-4 mb-6">
                    {topic.notes.map((note) => (
                      <div key={note.heading}>
                        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)] mb-1.5">
                          {note.heading}
                        </p>
                        {note.items.length === 1 ? (
                          <p className="text-[var(--text-secondary)]">{note.items[0]}</p>
                        ) : (
                          <ul className="flex flex-wrap gap-2">
                            {note.items.map((item) => (
                              <li
                                key={item}
                                className="px-3 py-1 rounded-full bg-[var(--bg-tertiary)] text-sm text-[var(--text-secondary)]"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <div
                  className={cn(
                    'flex items-center gap-2 text-[var(--accent)] mb-3',
                    (topic.highlight || (topic.notes && topic.notes.length > 0)) && 'pt-4 border-t border-[var(--border)]'
                  )}
                >
                  <PenLine className="w-5 h-5" />
                  <span className="font-semibold">Coming soon</span>
                </div>
                <p className="text-[var(--text-secondary)]">
                  This lesson hasn&apos;t been written yet. Check back soon for the full walkthrough of{' '}
                  {topic.title.toLowerCase()}.
                </p>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-[var(--border)]">
              {prev ? (
                <Link
                  href={`/courses/${course.slug}/${prev.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {prev.title}
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  href={`/courses/${course.slug}/${next.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors ml-auto"
                >
                  {next.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </article>
        </FadeInUp>
      </SectionWrapper>
    </>
  );
}
