import React from 'react';
import Image from 'next/image';
import { Components } from 'react-markdown';

// Medium-inspired MDX Components
export const mdxComponents: Components = {
  // Headings
  h1: ({ children }) => (
    <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-[var(--text-primary)] leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold mb-5 mt-10 text-[var(--text-primary)] leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl md:text-3xl font-semibold mb-4 mt-8 text-[var(--text-primary)] leading-snug">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl md:text-2xl font-semibold mb-3 mt-6 text-[var(--text-primary)]">
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className="text-lg md:text-xl font-semibold mb-3 mt-5 text-[var(--text-primary)]">
      {children}
    </h5>
  ),
  h6: ({ children }) => (
    <h6 className="text-base md:text-lg font-semibold mb-2 mt-4 text-[var(--text-primary)]">
      {children}
    </h6>
  ),

  // Paragraph
  p: ({ children }) => (
    <p className="text-lg md:text-xl leading-relaxed mb-6 text-[var(--text-secondary)]">
      {children}
    </p>
  ),

  // Links
  a: ({ node, href, children, ...props }) => (
    <a
      href={href}
      className="text-[var(--accent)] underline underline-offset-4 decoration-2 hover:text-[var(--accent)]/80 transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),

  // Lists
  ul: ({ children }) => (
    <ul className="mb-6 space-y-2 text-lg md:text-xl text-[var(--text-secondary)] pl-6">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 space-y-2 text-lg md:text-xl text-[var(--text-secondary)] pl-6 list-decimal">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed marker:text-[var(--accent)]">
      {children}
    </li>
  ),

  // Blockquote
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[var(--accent)] pl-6 py-2 my-8 italic text-xl md:text-2xl text-[var(--text-secondary)] bg-[var(--bg-tertiary)]/30">
      {children}
    </blockquote>
  ),

  // Code blocks
  code: ({ node, className, children, ...props }) => {
    const isInline = !className;
    
    if (isInline) {
      return (
        <code className="px-2 py-1 rounded bg-[var(--bg-tertiary)] text-[var(--accent)] font-mono text-base border border-[var(--border)]" {...props}>
          {children}
        </code>
      );
    }

    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="mb-8 mt-6 overflow-x-auto rounded-lg bg-[var(--bg-tertiary)] p-6 border border-[var(--border)] shadow-lg">
      {children}
    </pre>
  ),

  // Images
  img: ({ node, src, alt, ...props }) => (
    <figure className="my-10">
      <div className="relative w-full overflow-hidden rounded-lg">
        <img
          src={src}
          alt={alt || ''}
          {...props}
          className="w-full h-auto"
        />
      </div>
      {alt && (
        <figcaption className="text-center text-sm text-[var(--text-muted)] mt-3 italic">
          {alt}
        </figcaption>
      )}
    </figure>
  ),

  // Horizontal rule
  hr: () => (
    <hr className="my-12 border-t border-[var(--border)] w-full" />
  ),

  // Strong
  strong: ({ children }) => (
    <strong className="font-bold text-[var(--text-primary)]">
      {children}
    </strong>
  ),

  // Em
  em: ({ children }) => (
    <em className="italic">
      {children}
    </em>
  ),

  // Table
  table: ({ children }) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-[var(--bg-tertiary)] border-b-2 border-[var(--border)]">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody>{children}</tbody>
  ),
  tr: ({ children }) => (
    <tr className="border-b border-[var(--border)]">
      {children}
    </tr>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-semibold text-[var(--text-primary)]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-[var(--text-secondary)]">
      {children}
    </td>
  ),
};
