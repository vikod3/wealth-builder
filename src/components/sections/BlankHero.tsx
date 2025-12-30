import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

const steps = [
  {
    number: 1,
    title: "Create Your Free Account",
    description: "Sign up in seconds using your email address or mobile number.",
  },
  {
    number: 2,
    title: "Connect Your Bank Accounts",
    description: "Securely link your bank accounts, cards, or digital wallets with.",
  },
  {
    number: 3,
    title: "Set Your Financial Goals",
    description: "Customize your savings, spending, or investment goals with easy.",
  },
  {
    number: 4,
    title: "Track, Grow, and Optimize",
    description: "Watch your money work for you in real time—get insights and tips.",
  },
];

const BlankHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/6571025a2e02041c8b85dbd43210fa3a/manifest/video.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <section className="relative flex h-screen flex-col items-center justify-between px-6 pt-24 pb-8 md:px-12 lg:px-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex flex-1 max-w-[1240px] flex-col items-center justify-center gap-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-1 rounded-full border border-foreground/20 px-3 py-1 backdrop-blur-sm"
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

      {/* Steps Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 mx-auto w-full max-w-[1240px] rounded-2xl border border-foreground/20 p-6 md:p-8 backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col gap-3 ${
                index < steps.length - 1
                  ? "border-b pb-6 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6 lg:pr-8"
                  : ""
              } border-foreground/20`}
            >
              <h3 className="text-base font-semibold text-foreground">
                {step.number}. {step.title}
              </h3>
              <p className="text-sm font-normal leading-6 text-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BlankHero;
