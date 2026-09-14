'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CourseLevel } from '@/lib/courses-data';
import { SearchInput } from '@/components/ui/search-input';

interface CourseTOCProps {
  courseSlug: string;
  levels: CourseLevel[];
}

function matchesQuery(haystack: string, query: string) {
  return haystack.toLowerCase().includes(query);
}

export function CourseTOC({ courseSlug, levels }: CourseTOCProps) {
  const [query, setQuery] = useState('');
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set(levels[0] ? [levels[0].id] : []));
  const normalized = query.trim().toLowerCase();

  const visibleLevels = useMemo(() => {
    if (!normalized) {
      return levels.map((level) => ({ level, topics: level.topics }));
    }

    return levels
      .map((level) => {
        const levelMatches =
          matchesQuery(level.title, normalized) ||
          (level.description ? matchesQuery(level.description, normalized) : false);
        const topics = level.topics.filter((topic) => matchesQuery(topic.title, normalized));

        if (levelMatches) {
          return { level, topics: level.topics };
        }

        return topics.length > 0 ? { level, topics } : null;
      })
      .filter((entry): entry is { level: CourseLevel; topics: CourseLevel['topics'] } => entry !== null);
  }, [levels, normalized]);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  useEffect(() => {
    if (!normalized) return;
    setOpenIds(
      new Set(
        levels
          .filter(
            (level) =>
              matchesQuery(level.title, normalized) ||
              (level.description ? matchesQuery(level.description, normalized) : false) ||
              level.topics.some((topic) => matchesQuery(topic.title, normalized))
          )
          .map((level) => level.id)
      )
    );
  }, [normalized, levels]);

  const allOpen =
    visibleLevels.length > 0 && visibleLevels.every((entry) => openIds.has(entry.level.id));
  const toggleAll = () =>
    setOpenIds(allOpen ? new Set() : new Set(visibleLevels.map((entry) => entry.level.id)));

  const totalTopics = levels.reduce((sum, level) => sum + level.topics.length, 0);
  const visibleTopicCount = visibleLevels.reduce((sum, entry) => sum + entry.topics.length, 0);

  return (
    <div>
      <SearchInput
        id="course-toc-search"
        value={query}
        onChange={setQuery}
        placeholder="Search topics…"
        className="mb-5"
      />

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-[var(--text-muted)]">
          {normalized
            ? `${visibleLevels.length} levels · ${visibleTopicCount} topics`
            : `${levels.length} levels · ${totalTopics} topics`}
        </p>
        <button
          type="button"
          onClick={toggleAll}
          className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
        >
          {allOpen ? 'Collapse all' : 'Expand all'}
        </button>
      </div>

      {visibleLevels.length === 0 ? (
        <div className="rounded-2xl border border-[var(--border)] px-5 py-12 text-center text-[var(--text-muted)]">
          No topics match “{query.trim()}”.
        </div>
      ) : (
        <div className="rounded-2xl border border-[var(--border)] divide-y divide-[var(--border)] overflow-hidden">
          {visibleLevels.map(({ level, topics }) => {
            const isOpen = openIds.has(level.id);
            return (
              <div key={level.id}>
                <button
                  type="button"
                  onClick={() => toggle(level.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-[var(--bg-tertiary)]/50 transition-colors"
                >
                  <span className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-semibold tabular-nums">
                    {level.number}
                  </span>
                  <span className="flex-1 min-w-0 font-semibold text-[var(--text-primary)] truncate">
                    {level.title}
                  </span>
                  <span className="hidden sm:inline text-sm text-[var(--text-muted)] shrink-0">
                    {topics.length} {topics.length === 1 ? 'topic' : 'topics'}
                  </span>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 text-[var(--text-muted)] transition-transform duration-200 shrink-0',
                      isOpen && 'rotate-180'
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 bg-[var(--bg-tertiary)]/20">
                    {level.description && (
                      <p className="text-sm text-[var(--text-secondary)] mb-3 pt-1 max-w-2xl">
                        {level.description}
                      </p>
                    )}
                    <ul>
                      {topics.map((topic, index) => (
                        <li key={topic.slug}>
                          <Link
                            href={`/courses/${courseSlug}/${topic.slug}`}
                            className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
                          >
                            <span className="w-7 shrink-0 text-xs text-[var(--text-muted)] tabular-nums">
                              {index + 1}.
                            </span>
                            <span className="flex-1 text-sm text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors">
                              {topic.title}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[var(--accent)] transition-all shrink-0" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
