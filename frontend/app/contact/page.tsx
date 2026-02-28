'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Metadata } from 'next';
import { FadeInUp } from '@/components/animations/reveal';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="pt-32 pb-16">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-xl text-[var(--text-secondary)]">
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Send me a message and I'll get back to you as soon as possible.
            </p>
          </div>
        </FadeInUp>
      </SectionWrapper>

      {/* Contact Form */}
      <SectionWrapper variant="secondary" className="py-0 pb-24">
        <div className="max-w-2xl mx-auto">
          <FadeInUp delay={0.1}>
            <div className="bg-[var(--bg-primary)] border border-[var(--border)] rounded-2xl p-8 md:p-12 shadow-[var(--shadow-medium)]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-[var(--text-secondary)]">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-[var(--text-primary)]"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 transition-all text-[var(--text-primary)]"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-[var(--text-primary)]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 transition-all text-[var(--text-primary)]"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2 text-[var(--text-primary)]"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      {...register('subject', { required: 'Subject is required' })}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 transition-all text-[var(--text-primary)]"
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-[var(--text-primary)]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register('message', { required: 'Message is required' })}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 transition-all resize-none text-[var(--text-primary)]"
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gap-2"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </FadeInUp>

          {/* Direct Contact */}
          <FadeInUp delay={0.2}>
            <div className="mt-12 text-center">
              <p className="text-[var(--text-secondary)] mb-4">
                Prefer email? Reach me directly at
              </p>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-lg font-medium">hello@example.com</span>
              </a>
            </div>
          </FadeInUp>
        </div>
      </SectionWrapper>
    </>
  );
}
