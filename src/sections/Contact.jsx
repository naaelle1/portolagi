import { useState } from 'react';
import { motion } from 'framer-motion';
import { contactData } from '../data/contactData';
import SectionTitle from '../components/SectionTitle';
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/elokchandra13@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Portfolio Contact Message",
          message: formData.message,
          _captcha: "false",
          _template: "table",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("There was an issue sending your message. Please try again or email directly.");
      }
    } catch {
      alert("Network error. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <GithubIcon className="w-4 h-4" />;
      case 'linkedin':
        return <LinkedinIcon className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative select-none">
      <SectionTitle
        index="04"
        tag="CONTACT"
        title="Get in Touch"
        subtitle="Feel free to reach out for questions, collaborations, or just to say hello."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Message Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="relative bg-[#F1E8D8] text-[#24201D] p-6 sm:p-8 border border-[#3A3028]/40 shadow-paper rounded-xs">
            
            {/* Top Tape */}
            <div className="absolute -top-3 left-8 w-20 h-5 tape-strip pointer-events-none" />

            <div className="flex items-center justify-between border-b border-[#3A3028]/20 pb-3 mb-5 font-mono text-xs">
              <span className="font-bold text-[#C94A3A]">
                SEND A MESSAGE
              </span>
              <span className="text-[#746A60]">Semarang, Indonesia</span>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#F9F3E8] border border-[#C94A3A]/40 p-6 sm:p-8 text-center space-y-3 my-4 rounded-xs"
              >
                <div className="inline-flex items-center justify-center p-2.5 bg-[#C94A3A] text-[#F9F3E8] rounded-full mb-1">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#24201D]">
                  Message Sent!
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#3A3028] leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out. I have received your message and will reply soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-3 px-4 py-2 bg-[#171615] text-[#F1E8D8] font-mono text-xs font-bold uppercase hover:bg-[#C94A3A] transition-colors cursor-pointer border border-[#3A3028] rounded-xs"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 font-mono text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#3A3028] font-semibold mb-1 text-[11px]">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-3 py-2.5 bg-[#F9F3E8] border border-[#3A3028]/30 text-[#24201D] focus:border-[#C94A3A] focus:outline-none transition-colors rounded-xs font-body text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[#3A3028] font-semibold mb-1 text-[11px]">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full px-3 py-2.5 bg-[#F9F3E8] border border-[#3A3028]/30 text-[#24201D] focus:border-[#C94A3A] focus:outline-none transition-colors rounded-xs font-body text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#3A3028] font-semibold mb-1 text-[11px]">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    className="w-full px-3 py-2.5 bg-[#F9F3E8] border border-[#3A3028]/30 text-[#24201D] focus:border-[#C94A3A] focus:outline-none transition-colors rounded-xs font-body text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[#3A3028] font-semibold mb-1 text-[11px]">
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-3 py-2.5 bg-[#F9F3E8] border border-[#3A3028]/30 text-[#24201D] focus:border-[#C94A3A] focus:outline-none transition-colors resize-none font-body text-xs sm:text-sm rounded-xs"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2.5 bg-[#171615] text-[#F1E8D8] hover:bg-[#C94A3A] hover:text-[#F9F3E8] transition-all font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-paper-sm rounded-xs disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

        {/* RIGHT COLUMN: Contact Info & Links (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Direct Email Card */}
          <div className="relative bg-[#F9F3E8] text-[#24201D] p-5 sm:p-6 border border-[#3A3028]/30 shadow-paper rounded-xs">
            <div className="absolute -top-2.5 right-6 w-16 h-4 tape-strip pointer-events-none" />

            <span className="font-mono text-xs font-bold text-[#C94A3A] uppercase block mb-3">
              CONTACT INFORMATION
            </span>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-[#F1E8D8] border border-[#3A3028]/20 flex items-center justify-between gap-2 rounded-xs">
                <div className="truncate">
                  <span className="text-[10px] text-[#746A60] block uppercase">EMAIL</span>
                  <span className="text-[#24201D] font-semibold truncate text-xs sm:text-sm">{contactData.email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 bg-[#3A3028]/10 hover:bg-[#C94A3A] hover:text-[#F9F3E8] transition-colors rounded-xs cursor-pointer shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#C94A3A]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-2 text-[#3A3028]">
                <MapPin className="w-3.5 h-3.5 text-[#C94A3A] shrink-0" />
                <span className="text-xs">{contactData.location}</span>
              </div>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="bg-[#171615] border border-[#F1E8D8]/20 p-5 sm:p-6 shadow-retro rounded-xs font-mono text-xs text-[#F9F3E8]">
            <span className="font-mono text-xs font-bold text-[#C9A65A] uppercase tracking-wider block mb-3">
              LINKS & PROFILES
            </span>

            <div className="space-y-2">
              {contactData.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#F1E8D8]/5 hover:bg-[#F1E8D8]/10 border border-[#F1E8D8]/10 hover:border-[#C9A65A]/50 transition-all flex items-center justify-between group rounded-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="p-1 bg-[#F1E8D8]/10 text-[#C9A65A] group-hover:text-[#C94A3A] transition-colors rounded-xs">
                      {getSocialIcon(social.name)}
                    </span>
                    <span className="font-semibold text-[#F9F3E8]">{social.name}</span>
                  </div>
                  <span className="text-[#C9A65A] text-xs group-hover:translate-x-0.5 transition-transform font-bold">
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}