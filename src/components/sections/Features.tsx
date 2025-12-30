import { motion } from "framer-motion";
import { scrollFadeInUp, transitions, viewportOnce, staggerDelay } from "@/lib/animations";
import bento1 from "@/assets/bento-1.png";
import bento2 from "@/assets/bento-2.png";
import bento3 from "@/assets/bento-3.png";
import bento4 from "@/assets/bento-4.png";
import bento5 from "@/assets/bento-5.png";

const Features = () => {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-20 md:py-28">
      {/* Section Header */}
      <motion.div 
        {...scrollFadeInUp}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={transitions.slow}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
          Simple, yet powerful features
        </h2>
        <p className="text-foreground/60 text-base md:text-lg max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur vestibulum amet bibendum tristique
          nulla umna pulvinar elementum mattis.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 - Unified asset overview (tall left card) */}
        <motion.div 
          {...scrollFadeInUp}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ ...transitions.default, ...staggerDelay(0) }}
          className="md:row-span-2 gradient-card rounded-2xl border border-white/10 p-6 pb-0 pr-0 flex flex-col overflow-hidden"
        >
          <h3 className="text-lg font-medium text-foreground mb-2">
            Unified asset overview
          </h3>
          <p className="text-foreground/60 text-sm mb-6 pr-6">
            See all your crypto holdings in one clean stack organized, synced, and up to date.
          </p>
          <div className="flex-1 flex items-end justify-end">
            <img 
              src={bento1} 
              alt="Asset overview interface" 
              className="h-auto max-h-full object-contain object-bottom-right"
            />
          </div>
        </motion.div>

        {/* Card 2 - Real-time crypto price tracking */}
        <motion.div 
          {...scrollFadeInUp}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ ...transitions.default, ...staggerDelay(1) }}
          className="bg-card-fill rounded-2xl border border-white/10 p-6 flex flex-col"
        >
          <div className="flex-1 mb-4 flex items-center justify-center">
            <img 
              src={bento2} 
              alt="Collaboration interface" 
              className="w-full h-auto object-contain"
            />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">
            Real-time crypto price tracking
          </h3>
          <p className="text-foreground/60 text-sm">
            Track live crypto prices anytime. Get instant updates on 200+ coins fast and reliable.
          </p>
        </motion.div>

        {/* Card 3 - Cross-platform compatibility */}
        <motion.div 
          {...scrollFadeInUp}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ ...transitions.default, ...staggerDelay(2) }}
          className="bg-card-fill rounded-2xl border border-white/10 p-6 flex flex-col"
        >
          <div className="flex-1 mb-4 flex items-center justify-center">
            <img 
              src={bento3} 
              alt="Chat interface" 
              className="w-full h-auto object-contain"
            />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">
            Cross-platform compatibility
          </h3>
          <p className="text-foreground/60 text-sm">
            Access Zypher on any device. Your dashboard adapts wherever you trade, we're there.
          </p>
        </motion.div>

        {/* Card 4 - Predictive price alerts */}
        <motion.div 
          {...scrollFadeInUp}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ ...transitions.default, ...staggerDelay(3) }}
          className="bg-card-fill rounded-2xl border border-white/10 p-6 flex flex-col"
        >
          <div className="flex-1 mb-4 flex items-center justify-center">
            <img 
              src={bento4} 
              alt="Brand integrations" 
              className="w-full h-auto object-contain"
            />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">
            Predictive price alerts
          </h3>
          <p className="text-foreground/60 text-sm">
            Receive AI alerts for your assets when the market shifts react confidently.
          </p>
        </motion.div>

        {/* Card 5 - Multi-chain token support */}
        <motion.div 
          {...scrollFadeInUp}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ ...transitions.default, ...staggerDelay(4) }}
          className="bg-card-fill rounded-2xl border border-white/10 p-6 flex flex-col"
        >
          <div className="flex-1 mb-4 flex items-center justify-center">
            <img 
              src={bento5} 
              alt="Presentation interface" 
              className="w-full h-auto object-contain"
            />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">
            Multi-chain token support
          </h3>
          <p className="text-foreground/60 text-sm">
            Monitor assets across blockchains with ease from BTC and BNB to new networks.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
