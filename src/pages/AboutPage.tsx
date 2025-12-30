import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import aboutTeamImage from "@/assets/about-team.png";
import about2Image from "@/assets/about-2.png";
import bulletPoint from "@/assets/bullet-point.png";
import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";

const teamMembers = [
  { name: "Noah Pierre", role: "Chief Technology Officer", image: team1 },
  { name: "Ava Wright", role: "Chief Financial Officer", image: team2 },
  { name: "Sophia Cano", role: "Chief Executive Officer", image: team3 },
];

const aboutFaqItems = [
  {
    question: "How does the analytics feature function?",
    answer: "Our analytics engine processes market data in real-time, applying AI-powered algorithms to identify patterns, trends, and opportunities.",
  },
  {
    question: "Is my data and API access protected?",
    answer: "Absolutely. We use bank-grade encryption for all data transmission and storage. Your API keys are encrypted and never shared.",
  },
  {
    question: "What happens if I change my subscription plan?",
    answer: "You can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated accordingly.",
  },
  {
    question: "How do I get support if I run into an issue?",
    answer: "We offer 24/7 support through live chat, email, and a comprehensive knowledge base.",
  },
  {
    question: "Can I try the service before subscribing to a paid plan?",
    answer: "Yes, we offer a free Starter plan with access to core features. You can explore the platform and upgrade when ready.",
  },
];

const AboutFAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {aboutFaqItems.map((item, index) => (
        <div
          key={index}
          className="rounded-xl border border-white/10 bg-card-fill overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-start justify-between gap-4 p-5 text-left transition-colors hover:bg-white/5"
          >
            <span className="text-foreground font-medium text-sm leading-relaxed">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-shrink-0 mt-0.5"
            >
              <ChevronDown className="w-5 h-5 text-foreground/60" />
            </motion.div>
          </button>
          
          <AnimatePresence initial={false}>
            {openIndex === index && (
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
      ))}
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-12">
        {/* Hero Section */}
        <section className="w-full py-24 px-4 md:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
                About Our Company
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Lorem ipsum dolor sit amet consectetur scelerisque egestas commodo massa auctor purus accumsan arcu morbi amet sapien at hendrerit.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3.5 mb-12"
            >
              <Button variant="glass" size="lg">
                Start for free
              </Button>
              <Button variant="primary" size="lg">
                Live Demo
              </Button>
            </motion.div>

            {/* Image with gradient overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-4xl mx-auto gradient-card rounded-2xl p-12"
            >
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={aboutTeamImage}
                  alt="Our team"
                  className="w-full h-auto object-cover"
                />
                {/* Bottom gradient overlay on image */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(120, 119, 198, 0.6) 0%, transparent 100%)'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
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
              <h2 className="text-4xl md:text-5xl font-medium text-foreground">
                Meet The Team Members
              </h2>
            </motion.div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl overflow-hidden"
                >
                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Info */}
                  <div className="bg-card-fill p-5">
                    <h3 className="text-foreground font-medium text-lg mb-1">
                      {member.name}
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Section */}
        <section className="w-full py-24 px-4 md:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={about2Image}
                  alt="Team collaboration"
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
                  Data That Drives Decisions. People Who Build Precision.
                </h2>
                <p className="text-muted-foreground mb-8">
                  Volutpat lacus orci urna porttitor et nec sit id odio pharetra nibh pellentesque elementum in pharetra accumsan aliquet malesuada. A tincidunt aliquet quam neque nibh a euismod ornare eu pretium elit ac magna dignissim.
                </p>

                {/* Bullet Points */}
                <div className="space-y-4 mb-8">
                  {["Global access", "Security first", "User empowerment"].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <img src={bulletPoint} alt="" className="w-5 h-5" />
                      <span className="text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <Button variant="outline" size="lg" className="bg-foreground text-background hover:bg-foreground/90 border-none">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section - New Style */}
        <section className="w-full py-24 px-4 md:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column - Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-medium text-foreground">
                  Everything You Need to Know About Tools, Pricing, and Security
                </h2>
              </motion.div>

              {/* Right Column - Accordion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3"
              >
                <AboutFAQAccordion />
              </motion.div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
