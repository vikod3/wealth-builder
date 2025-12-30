// Consistent animation variants for framer-motion
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

// For scroll-triggered animations (avoid `animate` to prevent conflicts with `whileInView`)
export const scrollFadeInUp = {
  initial: { opacity: 0, y: 20 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const scrollFadeIn = {
  initial: { opacity: 0 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Standard transition configs
export const transitions = {
  default: { duration: 0.5, ease: "easeOut" as const },
  slow: { duration: 0.6, ease: "easeOut" as const },
  fast: { duration: 0.3, ease: "easeOut" as const },
  spring: { type: "spring" as const, stiffness: 300, damping: 30 },
};

// Viewport settings for scroll animations
export const viewportOnce = { once: true, margin: "-50px" };

// Stagger delay helper
export const staggerDelay = (index: number, baseDelay = 0.1) => ({
  delay: index * baseDelay,
});
