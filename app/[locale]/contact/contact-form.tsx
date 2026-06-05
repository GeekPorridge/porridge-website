"use client";
import { CheckCircle, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type FormData = {
  heading: string;
  description: string;
  interestLabel: string;
  interests: Array<{ id: string; label: string }>;
  name: { label: string; placeholder: string };
  email: { label: string; placeholder: string };
  message: { label: string; placeholder: string };
  submit: string;
  submitting: string;
  success: {
    title: string;
    description: string;
    button: string;
  };
};

const ContactForm = ({ formData }: { formData: FormData }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <div className="w-full" id="contact-form-component">
      {!isSubmitted ? (
        <form
          className="space-y-6 md:space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            setIsSubmitting(true);
            // Simulate submission
            setTimeout(() => {
              setIsSubmitting(false);
              setIsSubmitted(true);
            }, 1500);
          }}
        >
          {/* Interest chips */}
          <div className="space-y-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/50">
              {formData.interestLabel}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {formData.interests.map((opt) => {
                const isActive = selectedInterests.includes(opt.id);
                return (
                  <button
                    type="button"
                    key={opt.id}
                    id={`interest-chip-${opt.id}`}
                    onClick={() => toggleInterest(opt.id)}
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

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name-input"
                className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/50 block"
              >
                {formData.name.label}
              </label>
              <input
                id="name-input"
                type="text"
                required
                placeholder={formData.name.placeholder}
                className="w-full bg-transparent border-b border-brand-bone py-3.5 px-1 text-sm font-sans text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-accent focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email-input"
                className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/50 block"
              >
                {formData.email.label}
              </label>
              <input
                id="email-input"
                type="email"
                required
                placeholder={formData.email.placeholder}
                className="w-full bg-transparent border-b border-brand-bone py-3.5 px-1 text-sm font-sans text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-accent focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label
              htmlFor="message-input"
              className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/50 block"
            >
              {formData.message.label}
            </label>
            <textarea
              id="message-input"
              rows={4}
              required
              placeholder={formData.message.placeholder}
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
              <span>
                {isSubmitting ? formData.submitting : formData.submit}
              </span>
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
              {formData.success.title}
            </h3>
            <p className="font-sans text-xs text-brand-dark/65 max-w-sm mx-auto">
              {formData.success.description}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="font-mono text-[10px] tracking-wider uppercase text-brand-accent hover:text-brand-dark underline underline-offset-4 cursor-pointer"
          >
            {formData.success.button}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;
