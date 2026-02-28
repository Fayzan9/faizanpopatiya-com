'use client';

import { FadeInUp } from '@/components/animations/reveal';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';

export function CTA() {
  return (
    <SectionWrapper>
      <FadeInUp>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent)] to-purple-600 p-12 md:p-16 text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-white mb-4">
              Let's Work Together
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can create something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="gap-2 group bg-white text-[var(--accent)] hover:bg-white/90"
                >
                  Start a Conversation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="mailto:hello@example.com">
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="gap-2 text-white hover:bg-white/10 border border-white/20"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </FadeInUp>
    </SectionWrapper>
  );
}
