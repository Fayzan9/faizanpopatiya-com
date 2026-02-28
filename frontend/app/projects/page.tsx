import { Metadata } from 'next';
import { FadeInUp } from '@/components/animations/reveal';
import { ProjectCard } from '@/components/cards/project-card';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { getProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects - Portfolio',
  description: 'Browse my portfolio of web development projects showcasing modern technologies and best practices.',
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="pt-32 pb-16">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="mb-6">My Projects</h1>
            <p className="text-xl text-[var(--text-secondary)]">
              A collection of projects showcasing my expertise in modern web development,
              from e-commerce platforms to real-time applications.
            </p>
          </div>
        </FadeInUp>
      </SectionWrapper>

      {/* Projects Grid */}
      <SectionWrapper variant="secondary" className="py-0 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeInUp key={project.slug} delay={index * 0.1}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                href={`/projects/${project.slug}`}
              />
            </FadeInUp>
          ))}
        </div>

        {projects.length === 0 && (
          <FadeInUp>
            <div className="text-center py-16">
              <p className="text-xl text-[var(--text-muted)]">
                No projects found. Check back soon!
              </p>
            </div>
          </FadeInUp>
        )}
      </SectionWrapper>
    </>
  );
}
