import { courses } from './courses-data';
import type { Course, CourseLevel, CourseTopic } from './courses-data';

export type { Course, CourseLevel, CourseTopic };

export function getCourses(): Course[] {
  return courses;
}

export function getCourse(slug: string): Course | null {
  return courses.find((course) => course.slug === slug) ?? null;
}

export interface CourseTopicLocation {
  course: Course;
  level: CourseLevel;
  topic: CourseTopic;
  prev: CourseTopic | null;
  next: CourseTopic | null;
}

export function getCourseTopicLocation(courseSlug: string, topicSlug: string): CourseTopicLocation | null {
  const course = getCourse(courseSlug);
  if (!course) {
    return null;
  }

  const flatTopics = course.levels.flatMap((level) =>
    level.topics.map((topic) => ({ level, topic }))
  );

  const index = flatTopics.findIndex((entry) => entry.topic.slug === topicSlug);
  if (index === -1) {
    return null;
  }

  const { level, topic } = flatTopics[index];

  return {
    course,
    level,
    topic,
    prev: index > 0 ? flatTopics[index - 1].topic : null,
    next: index < flatTopics.length - 1 ? flatTopics[index + 1].topic : null,
  };
}
