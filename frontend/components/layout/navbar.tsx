'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Professional Minimal Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={cn(
          'fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300',
          scrolled && 'top-3'
        )}
      >
        <div className={cn(
          'relative rounded-full overflow-hidden transition-all duration-300',
          'px-6 py-3 backdrop-blur-md bg-[var(--glass-bg)] border border-[var(--glass-border)]',
          scrolled ? 'shadow-[var(--shadow-strong)]' : 'shadow-[var(--shadow-medium)]'
        )}>
          
          <div className="flex items-center gap-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative group"
                  >
                    <span className={cn(
                      'text-sm font-medium transition-colors duration-200',
                      isActive
                        ? 'text-[var(--text-primary)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    )}>
                      {link.label}
                    </span>
                    
                    {/* Active State - Subtle Underline */}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent)] rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-5 bg-[var(--border)]" />

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-[var(--bg-tertiary)] transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[var(--text-secondary)]" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--text-secondary)]" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-[var(--bg-tertiary)] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-[var(--text-secondary)]" />
              ) : (
                <Menu className="w-4 h-4 text-[var(--text-secondary)]" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed top-20 left-4 right-4 z-40 md:hidden"
        >
          <div className="rounded-2xl overflow-hidden backdrop-blur-md bg-[var(--glass-bg)] border border-[var(--glass-border)] shadow-[var(--shadow-strong)] p-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200',
                      isActive
                        ? 'bg-[var(--accent)]/10 text-[var(--accent)]'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
