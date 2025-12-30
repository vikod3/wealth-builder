import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/particles";
import { scrollFadeInUp, transitions, viewportOnce } from "@/lib/animations";
import logoIcon from "@/assets/logo-icon.png";

const CTA = () => {
  return (
    <section className="w-full py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...scrollFadeInUp}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={transitions.slow}
          className="gradient-card rounded-[35px] relative overflow-hidden"
        >
          {/* Particles */}
          <Particles variant="compact" />

          {/* Radial gradient glow - matching hero */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: 'radial-gradient(ellipse 70% 50% at 50% 100%, #7877C6 0%, rgba(0, 0, 0, 0) 70%)'
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center py-20 px-6">
            {/* Icon */}
            <motion.img 
              src={logoIcon} 
              alt="LI" 
              className="w-16 h-16 mb-6"
              {...scrollFadeInUp}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ ...transitions.default, delay: 0.1 }}
            />

            {/* Heading */}
            <motion.h2 
              {...scrollFadeInUp}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ ...transitions.default, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4"
            >
              Ready to Start?
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              {...scrollFadeInUp}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ ...transitions.default, delay: 0.3 }}
              className="text-foreground/60 max-w-xl mb-8 leading-relaxed"
            >
              Lorem ipsum dolor sit amet consectetur praesent cursus amet gravida egestas tellus vitae tortor enim tortor fusce quam quam orci ornare.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              {...scrollFadeInUp}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ ...transitions.default, delay: 0.4 }}
            >
              <Button variant="primary" size="lg" className="gap-2">
                Get Started for Free
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
