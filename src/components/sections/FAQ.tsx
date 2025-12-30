import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is this service and who is it intended for?",
    answer: "This platform is a professional-grade analytics dashboard designed for active traders, analysts, and portfolio managers. It helps you track real-time data, analyze market trends using AI, and manage multiple exchanges in one secure interface.",
  },
  {
    question: "How does the analytics feature function?",
    answer: "Our analytics engine processes market data in real-time, applying AI-powered algorithms to identify patterns, trends, and opportunities. You get actionable insights delivered through intuitive visualizations and alerts.",
  },
  {
    question: "How does the service gather real-time market data?",
    answer: "We connect directly to multiple exchanges via secure API integrations. Data is aggregated, normalized, and delivered to your dashboard with minimal latency for accurate, up-to-the-second information.",
  },
  {
    question: "Is my data and API access protected?",
    answer: "Absolutely. We use bank-grade encryption for all data transmission and storage. Your API keys are encrypted and never shared. We also support two-factor authentication for added security.",
  },
  {
    question: "Is there mobile or cross-device access available?",
    answer: "Yes, our platform is fully responsive and accessible on any device. You can monitor your portfolio, receive alerts, and execute trades from your desktop, tablet, or smartphone.",
  },
  {
    question: "What happens if I change my subscription plan?",
    answer: "You can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated accordingly. All your data and settings are preserved during transitions.",
  },
  {
    question: "Does the service support automated notifications?",
    answer: "Yes, you can configure custom alerts based on price movements, portfolio changes, or market conditions. Notifications can be delivered via email, SMS, or push notifications.",
  },
  {
    question: "How do I get support if I run into an issue?",
    answer: "We offer 24/7 support through live chat, email, and a comprehensive knowledge base. Enterprise customers also get access to a dedicated account manager for priority assistance.",
  },
  {
    question: "Can I try the service before subscribing to a paid plan?",
    answer: "Yes, we offer a free Starter plan with access to core features. You can explore the platform and upgrade to a paid plan when you're ready for advanced features.",
  },
];

const FAQAccordionItem = ({ item, isOpen, onToggle }: { 
  item: FAQItem; 
  isOpen: boolean; 
  onToggle: () => void;
}) => {
  return (
    <div className="rounded-xl border border-white/10 bg-card-fill overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-5 text-left transition-colors hover:bg-white/5"
      >
        <span className="text-foreground font-medium text-sm leading-relaxed">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 mt-0.5"
        >
          <ChevronDown className="w-5 h-5 text-foreground/60" />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5">
              <p className="text-foreground/60 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const leftColumn = faqItems.slice(0, 4);
  const rightColumn = faqItems.slice(4);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 px-4 md:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            Everything You Need to Know About<br />Tools, Pricing, and Security
          </h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <FAQAccordionItem
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() => handleToggle(i)}
                />
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((item, i) => {
              const actualIndex = i + 4;
              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <FAQAccordionItem
                    item={item}
                    isOpen={openIndex === actualIndex}
                    onToggle={() => handleToggle(actualIndex)}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;