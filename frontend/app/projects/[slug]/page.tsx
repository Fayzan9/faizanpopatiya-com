import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { FadeInUp } from '@/components/animations/reveal';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import { MDXContent } from '@/components/mdx/mdx-content';
import { getProject, getProjects } from '@/lib/content';
import 'highlight.js/styles/github-dark.css';

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Projects`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const [primaryTag, ...otherTags] = project.tags;

  return (
    <>
      {/* Back Button */}
      <SectionWrapper className="pt-24 pb-8">
        <FadeInUp>
          <Link href="/projects">
            <Button variant="ghost" className="gap-2 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </FadeInUp>
      </SectionWrapper>

      {/* Project Article */}
      <SectionWrapper className="py-0">
        <FadeInUp>
          <article className="max-w-3xl mx-auto">
            {primaryTag && (
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                  {primaryTag}
                </span>
              </div>
            )}

            <h1 className="mb-6">{project.title}</h1>

            <p className="text-xl text-[var(--text-secondary)] mb-6">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-[var(--text-muted)] mb-12 pb-8 border-b border-[var(--border)]">
              {otherTags.map((tag) => (
                <span key={tag} className="text-sm">
                  {tag}
                </span>
              ))}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:text-[var(--accent)] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:text-[var(--accent)] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              )}
            </div>

            {project.image && (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[var(--bg-tertiary)] mb-12">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="max-w-none">
              <MDXContent source={project.content} />
            </div>
          </article>
        </FadeInUp>
      </SectionWrapper>
    </>
  );
}
