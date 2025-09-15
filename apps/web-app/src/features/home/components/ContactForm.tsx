"use client";
import { useState, useMemo, FormEvent } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm({
  title = 'Get in touch',
  cta = 'Send Message',
  onSubmit,
}: Readonly<{
  title?: string;
  cta?: string;
  onSubmit?: (values: ContactFormValues) => Promise<void> | void;
}>) {
  const [values, setValues] = useState<ContactFormValues>({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const emailValid = useMemo(() => /.+@.+\..+/.test(values.email.trim()), [values.email]);
  const nameValid = values.name.trim().length > 1;
  const messageValid = values.message.trim().length > 5;
  const formValid = emailValid && nameValid && messageValid;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitted(false);
    if (!formValid) return;
    try {
      setSubmitting(true);
      if (onSubmit) {
        await onSubmit(values);
      } else {
        // Minimal default: simulate success without backend
        await new Promise((r) => setTimeout(r, 600));
      }
      setSubmitted(true);
      setValues({ name: '', email: '', message: '' });
    } catch (err: any) {
      setError(err?.message ?? 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.35 }}
    >
      <Card className="bg-white dark:bg-gray-900/40">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                placeholder="Your name"
                className="w-full rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm outline-none ring-0 transition focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900/60"
                required
              />
              {!nameValid && values.name !== '' ? (
                <p className="text-xs text-red-600 dark:text-red-400">Please enter at least 2 characters.</p>
              ) : null}
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                placeholder="you@example.com"
                className="w-full rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm outline-none ring-0 transition focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900/60"
                required
              />
              {!emailValid && values.email !== '' ? (
                <p className="text-xs text-red-600 dark:text-red-400">Please enter a valid email address.</p>
              ) : null}
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                placeholder="Tell me about your project or how I can help…"
                className="w-full resize-y rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm outline-none ring-0 transition focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900/60"
                required
              />
              {!messageValid && values.message !== '' ? (
                <p className="text-xs text-red-600 dark:text-red-400">Please enter at least 6 characters.</p>
              ) : null}
            </div>

            {error ? <p className="text-sm text-red-600 dark:text-red-400">{error}</p> : null}
            {submitted ? (
              <p className="text-sm text-green-600 dark:text-green-400">Thanks! I will get back to you shortly.</p>
            ) : null}

            <div className="pt-2">
              <button
                type="submit"
                disabled={!formValid || submitting}
                className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? 'Sending…' : cta}
              </button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Prefer email? Reach me at{' '}
            <a
              className="underline underline-offset-2 hover:text-indigo-600"
              href={`mailto:hello@example.com?subject=Project Inquiry`}
            >
              hello@example.com
            </a>
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
