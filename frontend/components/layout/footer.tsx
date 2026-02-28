import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4 md:px-6 max-w-[var(--max-width)] py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-[var(--bg-tertiary)] transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-[var(--text-secondary)]" />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
