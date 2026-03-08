'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/lib/config';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum display time for preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // Show for 2.8 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg-primary)]"
        >
          <div className="relative flex flex-col items-center gap-8">
            {/* Animated Logo/Name */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-[var(--text-primary)] mb-4"
                style={{ letterSpacing: '-0.02em' }}
              >
                {siteConfig.personal.firstName.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.08,
                      duration: 0.4,
                      ease: 'easeOut',
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="text-[var(--accent)]">.</span>
              </motion.h1>
            </motion.div>

            {/* Animated Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="w-64 h-1 bg-[var(--bg-tertiary)] rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[var(--accent)] to-purple-600 rounded-full"
              />
            </motion.div>
          </div>

          {/* Animated Background Gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
