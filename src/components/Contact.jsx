import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

// EmailJS Configuration (Read from env or use defaults)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_portfolio';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      setStatus('error');
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage('Please write a message with at least 10 characters.');
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      // Send real email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          email: formData.email,
          user_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
          to_name: 'Diya Garg',
          to_email: 'diyagarg9122005@gmail.com',
          'diyagarg9122005@gmail.com': 'diyagarg9122005@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#8B5CF6', '#7C3AED', '#EC4899', '#F472B6']
      });
    } catch (error) {
      console.error('EmailJS Send Error:', error);
      const errText = error?.text || error?.message || 'Failed to send message. Please check EmailJS configuration.';
      setErrorMessage(`Email Error: ${errText}`);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-white text-zinc-900 border-t border-purple-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-[#7C3AED] mb-3">Connect</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-purple-950">
            Get In Touch
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.3)]" />
        </div>

        {/* Form Box */}
        <div className="max-w-xl mx-auto">
          <motion.div
            className="p-6 md:p-8 purple-card rounded-3xl relative overflow-hidden"
            layout
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#EC4899]" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-name" className="text-xs font-bold text-purple-950 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  id="form-name"
                  type="text"
                  placeholder="Diya Garg"
                  value={formData.name}
                  disabled={status === 'submitting' || status === 'success'}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-purple-100 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]/20 text-sm text-zinc-900 placeholder-slate-400 transition-colors bg-[#faf9f7]/40"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-email" className="text-xs font-bold text-purple-950 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  id="form-email"
                  type="email"
                  placeholder="diya@example.com"
                  value={formData.email}
                  disabled={status === 'submitting' || status === 'success'}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-purple-100 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]/20 text-sm text-zinc-900 placeholder-slate-400 transition-colors bg-[#faf9f7]/40"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-message" className="text-xs font-bold text-purple-950 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="form-message"
                  rows={5}
                  placeholder="Let's build something intelligent..."
                  value={formData.message}
                  disabled={status === 'submitting' || status === 'success'}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-purple-100 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]/20 text-sm text-zinc-900 placeholder-slate-400 transition-colors bg-[#faf9f7]/40 resize-none"
                />
              </div>

              <AnimatePresence mode="wait">
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-rose-600 text-xs font-semibold"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2.5 text-emerald-700 text-xs font-semibold"
                  >
                    <CheckCircle className="w-4.5 h-4.5 flex-shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-bold">Message Sent Successfully!</span>
                      <span className="font-normal text-emerald-700/80">Thank you for reaching out. I'll get back to you shortly.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide text-white shadow-md transition-all flex items-center justify-center gap-2 ${
                  status === 'success'
                    ? 'bg-emerald-600 shadow-emerald-500/10 cursor-default'
                    : 'bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:from-[#6D28D9] hover:to-[#DB2777] shadow-purple-500/10 hover:shadow-lg active:scale-[0.98]'
                }`}
              >
                {status === 'submitting' ? (
                  <>
                    <RefreshCw className="w-4.5 h-4.5 animate-spin" />
                    Sending Message...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-4.5 h-4.5" />
                    Delivered
                  </>
                ) : (
                  <>
                    <Send className="w-4.5 h-4.5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
