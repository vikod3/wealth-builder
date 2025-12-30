import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardPreview from "@/components/dashboard/DashboardPreview";
import Particles from "@/components/ui/particles";
import { fadeInUp, transitions, viewportOnce } from "@/lib/animations";

const Hero = () => {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="gradient-card rounded-b-[35px] flex flex-col items-center justify-center px-6 pt-20 md:pt-28 relative overflow-hidden">
        {/* Particles */}
        <Particles variant="extended" />

        {/* Announcement Badge */}
        <motion.a
          href="#"
          {...fadeInUp}
          transition={{ ...transitions.default, delay: 0.1 }}
          className="inline-flex items-center gap-2 md:gap-3.5 pl-0.5 pr-3 md:pr-5 py-0.5 bg-white/5 rounded-[10px] border border-neutral-800 mb-8 hover:bg-white/10 transition-colors"
        >
          <span className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-4 py-1 md:py-1.5 bg-neutral-950 rounded-lg">
            <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3 text-zinc-300" />
            <span className="text-zinc-300 text-[10px] md:text-xs font-medium leading-5">
              New Update
            </span>
          </span>
          <span className="text-stone-300 text-[10px] md:text-xs font-medium leading-5">
            Introducing v3 —{" "}
            <span className="text-blue-500 underline">Try Now</span>
          </span>
        </motion.a>

        {/* Headline & Subtitle */}
        <motion.div 
          {...fadeInUp}
          transition={{ ...transitions.default, delay: 0.2 }}
          className="flex flex-col items-center gap-2.5 max-w-[1000px] text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium capitalize leading-tight lg:leading-[69.60px] text-foreground">
            Platform For Advanced Analytics To Grow Your Business
          </h1>
          <p className="max-w-[541px] text-foreground/70 text-base font-normal leading-7 tracking-tight">
            Lorem ipsum dolor sit amet consectetur tortor aliquet eget consectetur
            sollicitudin tempus.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          {...fadeInUp}
          transition={{ ...transitions.default, delay: 0.3 }}
          className="flex items-center gap-3.5 mt-6"
        >
          <Button variant="primary" size="lg">
            Start for free
          </Button>
          <Button variant="glass" size="lg">
            Live Demo
          </Button>
        </motion.div>

        {/* Purple glow effect above dashboard with particles */}
        <div className="w-full max-w-[1200px] h-60 relative overflow-visible">
          <Particles variant="compact" className="z-10" />
          <div 
            className="w-full h-[600px] left-0 top-0 absolute opacity-40"
            style={{
              background: 'radial-gradient(ellipse 70.71% 70.71% at 50% 50%, #7877C6 0%, rgba(0, 0, 0, 0) 70%)'
            }}
          />
        </div>

        {/* Dashboard Preview with 3D perspective */}
        <motion.div 
          {...fadeInUp}
          transition={{ ...transitions.slow, delay: 0.4 }}
          className="w-full -mt-40 -mb-20"
        >
          <div className="[perspective:1200px] max-w-[1100px] mx-auto translate-x-[15%] md:translate-x-[10%] lg:translate-x-[5%]">
            <div className="[transform:rotateX(20deg)] scale-[0.85] lg:scale-90 origin-top">
              <div className="relative skew-x-[.36rad]">
                <DashboardPreview />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
