import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, MessageSquare, HelpCircle, Lightbulb, Handshake } from 'lucide-react';
import { Input } from './watermelon-ui/input';
import { Textarea } from './watermelon-ui/textarea';
import Toast from './heroui/Toast';
import Glow from './Glow';

// Easing for smooth micro-interactions
const ease = [0.22, 1, 0.36, 1];

// Internal recipient destination used by FormSubmit backend
const RECIPIENT_ENDPOINT = import.meta.env.VITE_MAIL_ENDPOINT;

/**
 * ContactSection — Light green card with rounded-xl border, dark black typography,
 * Watermelon UI input components, and HeroUI animated bottom-right toast notifications.
 *
 * Notice: Success and error messages are NOT rendered inline in the form.
 * Instead, they surface as an animated bottom-right toast with HeroUI styling.
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // { id, type, title, description, actionUrl, actionLabel }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Fallback mailto URL in case the network blocks automated delivery
    const fallbackMailto = `mailto:${RECIPIENT_ENDPOINT}?subject=${encodeURIComponent(
      formData.subject || 'Message from Py-Learn-HTML Learner'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    try {
      // Dispatch structured email through FormSubmit AJAX API with table layouting
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Message from Py-Learn-HTML Learner',
          message: formData.message,
          _subject: `[Py-Learn-HTML] ${formData.subject || 'New Message'} from ${formData.name}`,
          _template: 'table', // Formats incoming email into a clean structured HTML table
          _captcha: 'false',
          _replyto: formData.email,
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        // Form cleared upon successful dispatch
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Trigger HeroUI animated toast from bottom right corner
        setToast({
          id: Date.now(),
          type: 'success',
          title: 'Message Sent Successfully',
          description: 'Your message has been delivered to my inbox. I will review it and get back to you shortly.',
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.warn('Form submission encountered an issue, surfacing toast with fallback:', err);

      // Trigger HeroUI error toast with action link to mail app
      setToast({
        id: Date.now(),
        type: 'error',
        title: 'Submission Issue',
        description: 'Network or privacy settings prevented automated dispatch. You can send it directly through your mail app.',
        actionUrl: fallbackMailto,
        actionLabel: 'Open in Mail App',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 scroll-mt-20">
      {/* Decorative ambient backdrop lighting */}
      <Glow tone="accent" className="top-12 -left-20 w-80 h-80" />
      <Glow tone="blue" className="bottom-0 right-10 w-80 h-80" />

      {/* Light green card container with rounded-xl */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease }}
        className="relative overflow-hidden rounded-xl rounded-xi bg-[#dcfce7] border border-emerald-300/80 shadow-[0_20px_50px_-15px_rgba(16,185,129,0.25)] text-black p-5 sm:p-10 lg:p-14"
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Context & Guidelines on what messages to send */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-200/80 border border-emerald-300 text-black text-xs font-mono uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-emerald-800" />
                Get in Touch
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black leading-tight">
                Contact Me
              </h2>
              <p className="mt-3 text-neutral-800 text-sm sm:text-base leading-relaxed">
                Have questions, thoughts, or ideas while learning Python here? Leave a message through this form and it will be sent directly to my personal inbox.
              </p>
            </div>

            {/* 3 Distinct message categories learners can send */}
            <div className="space-y-3 pt-1">
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold">
                What you can reach out about:
              </p>

              {/* Point 1: Questions & Module Doubts */}
              <div className="p-3.5 rounded-lg bg-emerald-200/60 border border-emerald-300/80 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-black">
                  <HelpCircle className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>1. Questions & Module Doubts</span>
                </div>
                <p className="text-xs text-neutral-800 leading-relaxed pl-6">
                  Stuck on a tricky Python concept, loop, or OOP topic? Feel free to ask for clarification or deeper explanations on any module.
                </p>
              </div>

              {/* Point 2: Topic Requests & Suggestions */}
              <div className="p-3.5 rounded-lg bg-emerald-200/60 border border-emerald-300/80 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-black">
                  <Lightbulb className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>2. Topic Requests & Suggestions</span>
                </div>
                <p className="text-xs text-neutral-800 leading-relaxed pl-6">
                  Want to see a specific Python library, algorithmic topic, or visual sketch guide added? Feedback and new lesson ideas are always welcome.
                </p>
              </div>

              {/* Point 3: Collaboration & Mentorship */}
              <div className="p-3.5 rounded-lg bg-emerald-200/60 border border-emerald-300/80 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-black">
                  <Handshake className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>3. Collaboration & Mentorship</span>
                </div>
                <p className="text-xs text-neutral-800 leading-relaxed pl-6">
                  Looking to build open-source Python tools together, discuss software engineering careers, or share a project you built? Let&apos;s connect.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Watermelon UI Inputs */}
          <div className="lg:col-span-7 bg-white/75 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-emerald-300/60 shadow-sm">
            <h3 className="text-xl font-bold text-black mb-1 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-emerald-800" />
              Send a Message
            </h3>
            <p className="text-xs text-neutral-700 mb-6">
              Fill in your details below and your message will be dispatched directly to my inbox.
            </p>

            {/* Note: Success and error banners are intentionally removed from inside the form.
                Feedback is surfaced via the HeroUI bottom-right toast notification. */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-black uppercase tracking-wider">
                    Your Name <span className="text-rose-600">*</span>
                  </label>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Chen"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-black uppercase tracking-wider">
                    Your Email <span className="text-rose-600">*</span>
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-black uppercase tracking-wider">
                  Subject
                </label>
                <Input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="e.g. Question regarding Python OOP / Lesson suggestion"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              {/* Message (Watermelon UI Textarea) */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs font-semibold text-black uppercase tracking-wider">
                  Message <span className="text-rose-600">*</span>
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder="Write your thoughts, questions, or feedback here..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-black text-white text-sm font-semibold tracking-wide hover:bg-neutral-800 active:scale-[0.98] transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-emerald-400" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>

      {/* HeroUI Animated Toast Notification from bottom-right corner */}
      <Toast toast={toast} onClose={() => setToast(null)} duration={5000} />
    </section>
  );
}
