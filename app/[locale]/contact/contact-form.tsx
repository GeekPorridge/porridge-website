"use client";
import { CheckCircle, Send } from "lucide-react";
import { motion } from "motion/react";

const ContactForm = () => {
  const isSubmitted = false;
  const isSubmitting = false;

  const interestOptions = [
    { id: "branding", label: "Branding & Systems" },
    { id: "digital", label: "Digital Products" },
    { id: "editorial", label: "Editorial & Print" },
    { id: "hi", label: "Just Saying Hi" },
  ];

  return (
    <div className="w-full" id="contact-form-component">
      {!isSubmitted ? (
        <form className="space-y-6 md:space-y-8">
          {/* Top selection matrix for interests */}
          <div className="space-y-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/50">
              I'm interested in...
            </p>
            <div className="flex flex-wrap gap-2.5">
              {interestOptions.map((opt) => {
                const isActive = false;
                return (
                  <button
                    type="button"
                    key={opt.id}
                    id={`interest-chip-${opt.id}`}
                    // onClick={() => handleInterestToggle(opt.id)}
                    className={`rounded-full px-5 py-2.5 font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? "bg-brand-dark text-brand-beige border border-brand-dark"
                        : "bg-brand-bone/35 border border-brand-bone hover:border-brand-accent hover:bg-brand-bone/60 text-brand-dark/70"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form input elements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name-input"
                className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/50 block"
              >
                Your Full Name
              </label>
              <input
                id="name-input"
                type="text"
                required
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jean Dupont"
                className="w-full bg-transparent border-b border-brand-bone py-3.5 px-1 text-sm font-sans text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-accent focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email-input"
                className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/50 block"
              >
                Your Email Address
              </label>
              <input
                id="email-input"
                type="email"
                required
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. jean@client.com"
                className="w-full bg-transparent border-b border-brand-bone py-3.5 px-1 text-sm font-sans text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-accent focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message-input"
              className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/50 block"
            >
              Tell me about your vision
            </label>
            <textarea
              id="message-input"
              rows={4}
              required
              //   value={message}
              //   onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. We are building a new digital gallery based in Paris..."
              className="w-full bg-transparent border-b border-brand-bone py-3 px-1 text-sm font-sans text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-accent focus:outline-none transition-colors resize-none"
            />
          </div>

          <div className="pt-2">
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-dark text-brand-beige py-4 rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-brand-accent hover:text-brand-dark flex items-center justify-center space-x-2.5 cursor-pointer disabled:opacity-60"
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              {!isSubmitting && <Send className="h-3.5 w-3.5" />}
            </motion.button>
          </div>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-bone/30 rounded-2xl border border-brand-bone p-8 text-center space-y-4"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 mb-2">
            <CheckCircle className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-light text-brand-dark">
              Message Transmitted
            </h3>
            <p className="font-sans text-xs text-brand-dark/65 max-w-sm mx-auto">
              Thank you for reaching out. Alexandre has received your inquiry
              and will follow up shortly to arrange a personal consultation.
            </p>
          </div>
          <button
            type="button"
            // onClick={() => setIsSubmitted(false)}
            className="font-mono text-[10px] tracking-wider uppercase text-brand-accent hover:text-brand-dark underline underline-offset-4 cursor-pointer"
          >
            Send another transmission
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;
