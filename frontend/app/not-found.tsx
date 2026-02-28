'use client';

import Link from 'next/link';
import { FadeInUp } from '@/components/animations/reveal';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <FadeInUp>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-9xl font-bold text-[var(--accent)] mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl text-[var(--text-secondary)] mb-12">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="primary" size="lg" className="gap-2">
                <Home className="w-5 h-5" />
                Go Home
              </Button>
            </Link>
            <Button variant="ghost" size="lg" className="gap-2" onClick={() => window.history.back()}>
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
          </div>
        </div>
      </FadeInUp>
    </div>
  );
}
