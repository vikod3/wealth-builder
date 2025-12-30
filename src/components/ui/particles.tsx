import { motion } from "framer-motion";

interface Particle {
  top: string;
  left: string;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

// Default particle configuration (30 particles)
const defaultParticles: Particle[] = [
  { top: "6%", left: "8%", size: 2, opacity: 0.5, duration: 3.5, delay: 0 },
  { top: "12%", left: "92%", size: 1.5, opacity: 0.4, duration: 4, delay: 0.3 },
  { top: "18%", left: "25%", size: 1, opacity: 0.6, duration: 3, delay: 0.8 },
  { top: "8%", left: "78%", size: 2, opacity: 0.35, duration: 4.5, delay: 1.2 },
  { top: "22%", left: "15%", size: 1.5, opacity: 0.45, duration: 3.2, delay: 0.5 },
  { top: "14%", left: "65%", size: 1, opacity: 0.55, duration: 4.2, delay: 1.5 },
  { top: "5%", left: "45%", size: 2, opacity: 0.3, duration: 3.8, delay: 0.2 },
  { top: "25%", left: "88%", size: 1.5, opacity: 0.5, duration: 3.5, delay: 0.9 },
  { top: "10%", left: "35%", size: 1, opacity: 0.4, duration: 4.8, delay: 1.1 },
  { top: "20%", left: "55%", size: 2, opacity: 0.45, duration: 3.3, delay: 0.6 },
  { top: "15%", left: "5%", size: 1.5, opacity: 0.35, duration: 4.1, delay: 1.4 },
  { top: "28%", left: "72%", size: 1, opacity: 0.5, duration: 3.6, delay: 0.4 },
  { top: "7%", left: "58%", size: 2, opacity: 0.4, duration: 4.4, delay: 1.8 },
  { top: "23%", left: "38%", size: 1.5, opacity: 0.55, duration: 3.1, delay: 0.7 },
  { top: "11%", left: "82%", size: 1, opacity: 0.3, duration: 4.6, delay: 1.3 },
  { top: "30%", left: "20%", size: 2, opacity: 0.45, duration: 3.4, delay: 1.0 },
  { top: "4%", left: "68%", size: 1.5, opacity: 0.5, duration: 4.3, delay: 0.1 },
  { top: "16%", left: "95%", size: 1, opacity: 0.4, duration: 3.9, delay: 1.6 },
  { top: "26%", left: "48%", size: 2, opacity: 0.35, duration: 4.7, delay: 0.85 },
  { top: "9%", left: "18%", size: 1.5, opacity: 0.6, duration: 3.7, delay: 1.7 },
  // Additional 10 particles for 50% increase
  { top: "3%", left: "52%", size: 1, opacity: 0.45, duration: 3.4, delay: 0.25 },
  { top: "19%", left: "10%", size: 2, opacity: 0.38, duration: 4.1, delay: 0.65 },
  { top: "27%", left: "62%", size: 1.5, opacity: 0.52, duration: 3.6, delay: 1.15 },
  { top: "13%", left: "85%", size: 1, opacity: 0.42, duration: 4.3, delay: 0.45 },
  { top: "24%", left: "30%", size: 2, opacity: 0.48, duration: 3.2, delay: 1.35 },
  { top: "8%", left: "70%", size: 1.5, opacity: 0.36, duration: 4.0, delay: 0.75 },
  { top: "17%", left: "42%", size: 1, opacity: 0.55, duration: 3.8, delay: 1.55 },
  { top: "29%", left: "8%", size: 2, opacity: 0.4, duration: 4.5, delay: 0.35 },
  { top: "6%", left: "28%", size: 1.5, opacity: 0.5, duration: 3.3, delay: 1.85 },
  { top: "21%", left: "98%", size: 1, opacity: 0.45, duration: 4.2, delay: 0.55 },
];

// Extended particles for larger sections (60 particles)
const extendedParticles: Particle[] = [
  ...defaultParticles,
  { top: "3%", left: "30%", size: 1, opacity: 0.45, duration: 3.9, delay: 0.15 },
  { top: "13%", left: "50%", size: 1.5, opacity: 0.35, duration: 4.2, delay: 0.95 },
  { top: "19%", left: "3%", size: 2, opacity: 0.4, duration: 3.4, delay: 1.25 },
  { top: "27%", left: "60%", size: 1, opacity: 0.55, duration: 4.0, delay: 0.45 },
  { top: "8%", left: "42%", size: 1.5, opacity: 0.5, duration: 3.7, delay: 1.55 },
  { top: "21%", left: "97%", size: 2, opacity: 0.3, duration: 4.5, delay: 0.35 },
  { top: "17%", left: "73%", size: 1, opacity: 0.6, duration: 3.2, delay: 1.05 },
  { top: "6%", left: "22%", size: 1.5, opacity: 0.4, duration: 4.1, delay: 0.75 },
  { top: "24%", left: "85%", size: 2, opacity: 0.45, duration: 3.6, delay: 1.45 },
  { top: "11%", left: "55%", size: 1, opacity: 0.35, duration: 4.4, delay: 0.55 },
  { top: "29%", left: "32%", size: 1.5, opacity: 0.5, duration: 3.3, delay: 1.85 },
  { top: "4%", left: "80%", size: 2, opacity: 0.4, duration: 4.0, delay: 0.25 },
  { top: "16%", left: "12%", size: 1, opacity: 0.55, duration: 3.8, delay: 1.15 },
  { top: "22%", left: "68%", size: 1.5, opacity: 0.3, duration: 4.3, delay: 0.65 },
  { top: "9%", left: "90%", size: 2, opacity: 0.45, duration: 3.5, delay: 1.35 },
  { top: "14%", left: "28%", size: 1, opacity: 0.5, duration: 4.6, delay: 0.85 },
  { top: "26%", left: "7%", size: 1.5, opacity: 0.4, duration: 3.1, delay: 1.65 },
  { top: "7%", left: "63%", size: 2, opacity: 0.35, duration: 4.2, delay: 0.05 },
  { top: "18%", left: "40%", size: 1, opacity: 0.6, duration: 3.9, delay: 1.75 },
  { top: "31%", left: "52%", size: 1.5, opacity: 0.45, duration: 3.4, delay: 0.4 },
  // Additional 10 particles for 50% increase
  { top: "2%", left: "15%", size: 1, opacity: 0.42, duration: 3.7, delay: 0.2 },
  { top: "12%", left: "77%", size: 2, opacity: 0.48, duration: 4.1, delay: 1.0 },
  { top: "25%", left: "45%", size: 1.5, opacity: 0.38, duration: 3.5, delay: 0.5 },
  { top: "5%", left: "88%", size: 1, opacity: 0.52, duration: 4.4, delay: 1.4 },
  { top: "20%", left: "22%", size: 2, opacity: 0.35, duration: 3.2, delay: 0.8 },
  { top: "28%", left: "58%", size: 1.5, opacity: 0.55, duration: 4.0, delay: 1.6 },
  { top: "10%", left: "33%", size: 1, opacity: 0.4, duration: 3.8, delay: 0.3 },
  { top: "15%", left: "93%", size: 2, opacity: 0.45, duration: 4.3, delay: 1.2 },
  { top: "23%", left: "5%", size: 1.5, opacity: 0.5, duration: 3.4, delay: 0.7 },
  { top: "8%", left: "48%", size: 1, opacity: 0.38, duration: 4.6, delay: 1.8 },
];

// Compact particles for smaller sections (30 particles)
const compactParticles: Particle[] = [
  { top: "10%", left: "5%", size: 1.5, opacity: 0.5, duration: 3.5, delay: 0 },
  { top: "15%", left: "92%", size: 2, opacity: 0.4, duration: 4, delay: 0.3 },
  { top: "25%", left: "18%", size: 1, opacity: 0.6, duration: 3, delay: 0.8 },
  { top: "8%", left: "75%", size: 1.5, opacity: 0.35, duration: 4.5, delay: 1.2 },
  { top: "35%", left: "8%", size: 2, opacity: 0.45, duration: 3.2, delay: 0.5 },
  { top: "20%", left: "65%", size: 1, opacity: 0.55, duration: 4.2, delay: 1.5 },
  { top: "12%", left: "45%", size: 1.5, opacity: 0.3, duration: 3.8, delay: 0.2 },
  { top: "40%", left: "88%", size: 2, opacity: 0.5, duration: 3.5, delay: 0.9 },
  { top: "18%", left: "35%", size: 1, opacity: 0.4, duration: 4.8, delay: 1.1 },
  { top: "30%", left: "95%", size: 1.5, opacity: 0.45, duration: 3.3, delay: 0.6 },
  { top: "22%", left: "3%", size: 2, opacity: 0.35, duration: 4.1, delay: 1.4 },
  { top: "45%", left: "72%", size: 1, opacity: 0.5, duration: 3.6, delay: 0.4 },
  { top: "5%", left: "58%", size: 1.5, opacity: 0.4, duration: 4.4, delay: 1.8 },
  { top: "38%", left: "28%", size: 2, opacity: 0.55, duration: 3.1, delay: 0.7 },
  { top: "28%", left: "82%", size: 1, opacity: 0.3, duration: 4.6, delay: 1.3 },
  { top: "50%", left: "15%", size: 1.5, opacity: 0.45, duration: 3.4, delay: 1.0 },
  { top: "7%", left: "22%", size: 2, opacity: 0.5, duration: 4.3, delay: 0.1 },
  { top: "42%", left: "55%", size: 1, opacity: 0.4, duration: 3.9, delay: 1.6 },
  { top: "32%", left: "48%", size: 1.5, opacity: 0.35, duration: 4.7, delay: 0.85 },
  { top: "16%", left: "12%", size: 2, opacity: 0.6, duration: 3.7, delay: 1.7 },
  // Additional 10 particles for 50% increase
  { top: "6%", left: "38%", size: 1, opacity: 0.42, duration: 3.4, delay: 0.25 },
  { top: "33%", left: "62%", size: 1.5, opacity: 0.48, duration: 4.0, delay: 0.65 },
  { top: "48%", left: "25%", size: 2, opacity: 0.38, duration: 3.6, delay: 1.15 },
  { top: "14%", left: "80%", size: 1, opacity: 0.52, duration: 4.2, delay: 0.45 },
  { top: "26%", left: "42%", size: 1.5, opacity: 0.35, duration: 3.2, delay: 1.35 },
  { top: "44%", left: "10%", size: 2, opacity: 0.55, duration: 4.5, delay: 0.75 },
  { top: "9%", left: "68%", size: 1, opacity: 0.4, duration: 3.8, delay: 1.55 },
  { top: "36%", left: "98%", size: 1.5, opacity: 0.45, duration: 4.1, delay: 0.35 },
  { top: "52%", left: "52%", size: 2, opacity: 0.5, duration: 3.3, delay: 1.85 },
  { top: "19%", left: "30%", size: 1, opacity: 0.38, duration: 4.4, delay: 0.55 },
];

type ParticleVariant = "default" | "extended" | "compact";

interface ParticlesProps {
  variant?: ParticleVariant;
  className?: string;
}

const particleConfigs: Record<ParticleVariant, Particle[]> = {
  default: defaultParticles,
  extended: extendedParticles,
  compact: compactParticles,
};

const Particles = ({ variant = "default", className = "" }: ParticlesProps) => {
  const particles = particleConfigs[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-white ${className}`}
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [particle.opacity * 0.3, particle.opacity, particle.opacity * 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
