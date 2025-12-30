import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is this service and who is it intended for?",
    answer: "Lorem ipsum dolor sit amet consectetur arcu augue sapien amet vel consectetur sit placerat mi id purus et varius id sed amet.",
  },
  {
    question: "How does the service gather real-time market data?",
    answer: "We connect directly to multiple exchanges via secure API integrations. Data is aggregated, normalized, and delivered to your dashboard with minimal latency for accurate, up-to-the-second information.",
  },
  {
    question: "Is there mobile or cross-device access available?",
    answer: "Yes, our platform is fully responsive and accessible on any device. You can monitor your portfolio, receive alerts, and execute trades from your desktop, tablet, or smartphone.",
  },
  {
    question: "Does the service support automated notifications?",
    answer: "Yes, you can configure custom alerts based on price movements, portfolio changes, or market conditions. Notifications can be delivered via email, SMS, or push notifications.",
  },
  {
    question: "What security measures are in place to protect data?",
    answer: "We use bank-grade encryption for all data transmission and storage. Your API keys are encrypted and never shared. We also support two-factor authentication for added security.",
  },
  {
    question: "Are there customizable reporting options for users?",
    answer: "Yes, you can create custom reports based on your specific needs. Export data in multiple formats and schedule automated report generation.",
  },
  {
    question: "What platforms does the service integrate with?",
    answer: "We integrate with all major cryptocurrency exchanges and traditional trading platforms. Our API also allows for custom integrations with your existing tools.",
  },
  {
    question: "Is user support available 24/7?",
    answer: "Yes, we offer 24/7 support through live chat, email, and a comprehensive knowledge base. Enterprise customers also get access to a dedicated account manager.",
  },
];

const FAQAccordionItem = ({ 
  item, 
  isOpen, 
  onToggle,
  index 
}: { 
  item: FAQItem; 
  isOpen: boolean; 
  onToggle: () => void;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-xl border border-white/10 bg-card-fill overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-white/5"
      >
        <span className="text-foreground font-medium text-sm leading-relaxed">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0"
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
    </motion.div>
  );
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-12">
        {/* FAQ Section */}
        <section className="w-full py-24 px-4 md:px-6 lg:px-8 relative">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
                Have More Questions?
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Lorem ipsum dolor sit amet consectetur vitae arcu augue sapien amet vel consectetur sit placerat mi id purus et varius id sed amet.
              </p>
            </motion.div>

            {/* FAQ Items - Single Column */}
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <FAQAccordionItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
