'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const metrics = [
  { label: 'Years Experience', value: '3+', color: '#6366F1' },
  { label: ' LLM Projects', value: '20+', color: '#8B5CF6' },
  { label: 'Models Deployed', value: '15+', color: '#EC4899' },
  { label: 'Success Rate', value: '95%', color: '#10B981' },
];

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, var(--border-muted) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border-muted) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="relative container mx-auto px-6 md:px-8 max-w-[var(--max-width)] z-10">
        {/* 60/40 Split Layout */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-center">
          
          {/* Left Column - Primary Messaging (60%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] shadow-[var(--shadow-soft)]"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                Available for Work
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-[var(--text-primary)]"
                style={{ letterSpacing: '-0.02em' }}
              >
                Building Intelligent
                <span className="block text-[var(--accent)]">AI Solutions</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed"
                style={{ lineHeight: '1.6' }}
              >
                AI/ML Engineer specializing in <strong className="font-semibold text-[var(--text-primary)]">GenAI, LLMs,</strong> and production-grade machine learning systems. 
                Transforming complex data into intelligent solutions.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/projects">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="gap-2 group shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Get in Touch
                </Button>
              </Link>
            </motion.div>

            {/* Quick Stats Inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-8 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-1 h-12 bg-[var(--accent)] rounded-full" />
                <div>
                  <div className="text-2xl font-bold text-[var(--text-primary)]">3+</div>
                  <div className="text-xs uppercase tracking-wider text-[var(--text-muted)]">Years AI/ML</div>
                </div>
              </div>
              <div className="h-12 w-px bg-[var(--border)]" />
              <div className="flex items-center gap-2">
                <div className="w-1 h-12 bg-[var(--accent)] rounded-full" />
                <div>
                  <div className="text-2xl font-bold text-[var(--text-primary)]">20+</div>
                  <div className="text-xs uppercase tracking-wider text-[var(--text-muted)]">LLM Projects</div>
                </div>
              </div>
              <div className="h-12 w-px bg-[var(--border)]" />
              <div className="flex items-center gap-2">
                <div className="w-1 h-12 bg-[var(--accent)] rounded-full" />
                <div>
                  <div className="text-2xl font-bold text-[var(--text-primary)]">15+</div>
                  <div className="text-xs uppercase tracking-wider text-[var(--text-muted)]">Deployments</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Glass Metrics Panel (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative p-8 rounded-3xl glass-strong border border-[var(--glass-border)] shadow-[var(--glass-shadow)]">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Performance Metrics
                </h3>
                <div className="flex items-center gap-1 text-green-500">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-medium">+95%</span>
                </div>
              </div>

              {/* 2x2 Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    className="p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors duration-300"
                  >
                    <div className="text-3xl font-bold mb-1" style={{ color: metric.color }}>
                      {metric.value}
                    </div>
                    <div className="text-xs uppercase tracking-wide text-[var(--text-muted)]">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Status Indicator */}
              <div className="pt-4 border-t border-[var(--border)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                    <span className="text-sm text-[var(--text-secondary)]">
                      Active Projects
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">5</span>
                </div>
              </div>
            </div>

            {/* Floating Accent Element */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--accent)] opacity-10 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-[var(--border)] flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-[var(--accent)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
