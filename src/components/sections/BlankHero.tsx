import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlankHero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-1 rounded-full border border-foreground/40 px-3 py-1"
        >
          <span className="text-sm font-medium text-foreground">
            Real-Time Budget Tracking
          </span>
        </motion.div>

        {/* Heading & Subheading */}
        <div className="flex flex-col items-center gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[900px] text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] xl:leading-[100px]"
          >
            Build Wealth That Lasts Generations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[500px] text-center text-base font-normal text-foreground/90 sm:text-lg md:text-xl md:leading-8"
          >
            Transform today's earnings into tomorrow's family fortune with proven wealth-building strategies
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/signup"
            className="inline-flex items-center justify-center gap-1 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background shadow-sm transition-opacity hover:opacity-90"
          >
            Start Building Wealth
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlankHero;
