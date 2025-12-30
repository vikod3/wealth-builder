import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeInUp, transitions } from "@/lib/animations";
import logo from "@/assets/logo.png";
import logoIcon from "@/assets/logo-icon.png";
import light2 from "@/assets/light-2.png";
import DashboardPreview from "@/components/dashboard/DashboardPreview";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Hero-like section */}
      <motion.div 
        {...fadeInUp}
        transition={{ ...transitions.slow }}
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
      >
        <div className="gradient-card w-full m-4 rounded-[35px] p-8 xl:p-12 flex flex-col relative overflow-hidden">
          {/* Announcement Badge */}
          <motion.a
            href="#"
            {...fadeInUp}
            transition={{ ...transitions.default, delay: 0.1 }}
            className="inline-flex items-center gap-3.5 pl-0.5 pr-5 py-0.5 bg-white/5 rounded-[10px] border border-neutral-800 mb-8 hover:bg-white/10 transition-colors w-fit"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-neutral-950 rounded-lg">
              <Sparkles className="w-3 h-3 text-zinc-300" />
              <span className="text-zinc-300 text-xs font-medium leading-5">
                New Update
              </span>
            </span>
            <span className="text-stone-300 text-xs font-medium leading-5">
              Introducing v3 —{" "}
              <span className="text-blue-500 underline">Try Now</span>
            </span>
          </motion.a>

          {/* Headline & Subtitle */}
          <motion.h1 
            {...fadeInUp}
            transition={{ ...transitions.default, delay: 0.2 }}
            className="text-3xl xl:text-4xl font-medium capitalize leading-tight text-foreground mb-4"
          >
            Platform For Advanced<br />Analytics To Grow Your Business
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            transition={{ ...transitions.default, delay: 0.3 }}
            className="text-foreground/70 text-sm leading-relaxed max-w-md"
          >
            Track, analyze, and get smarter crypto insights — all in one cross-platform dashboard.
          </motion.p>

          {/* Dashboard Preview - full width with 3D perspective */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...transitions.slow, delay: 0.4 }}
            className="absolute -bottom-16 right-[-350px] w-[140%]"
          >
            <div className="[perspective:1200px]">
              <div className="[transform:rotateX(20deg)] scale-100 origin-top">
                <div className="relative skew-x-[.36rad]">
                  <DashboardPreview />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex flex-col min-h-screen relative overflow-hidden">
        {/* Light effect - top right */}
        <img 
          src={light2} 
          alt="" 
          className="absolute top-0 right-0 w-[500px] md:w-[600px] pointer-events-none opacity-80"
        />
        {/* Header */}
        <motion.header 
          {...fadeInUp}
          transition={{ ...transitions.default, delay: 0.1 }}
          className="flex items-center justify-between p-6"
        >
          <Link to="/">
            <img src={logo} alt="LI" className="h-8" />
          </Link>
          <p className="text-foreground/60 text-sm">
            Already have an account?{" "}
            <Link to="/signin" className="text-foreground font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </motion.header>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            {/* Icon */}
            <motion.div 
              {...fadeInUp}
              transition={{ ...transitions.default, delay: 0.15 }}
              className="flex justify-center mb-6"
            >
              <img src={logoIcon} alt="" className="w-14 h-14" />
            </motion.div>

            {/* Heading */}
            <motion.h2 
              {...fadeInUp}
              transition={{ ...transitions.default, delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-foreground text-center mb-2"
            >
              Create Your Account
            </motion.h2>
            <motion.p 
              {...fadeInUp}
              transition={{ ...transitions.default, delay: 0.25 }}
              className="text-foreground/60 text-center mb-8"
            >
              Join thousands of users leveraging AI-powered<br />analytics for smarter decisions.
            </motion.p>

            {/* Name Input */}
            <motion.div 
              {...fadeInUp}
              transition={{ ...transitions.default, delay: 0.3 }}
              className="space-y-2 mb-4"
            >
              <label className="text-foreground text-sm font-medium">
                Full name
              </label>
              <Input
                type="text"
                placeholder="John Doe"
                className="bg-white/5 border-white/10 text-foreground placeholder:text-foreground/40 h-12"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div 
              {...fadeInUp}
              transition={{ ...transitions.default, delay: 0.35 }}
              className="space-y-2 mb-4"
            >
              <label className="text-foreground text-sm font-medium">
                Work email
              </label>
              <Input
                type="email"
                placeholder="hello@emura.studio"
                className="bg-white/5 border-white/10 text-foreground placeholder:text-foreground/40 h-12"
              />
            </motion.div>

            {/* Password Input */}
            <motion.div 
              {...fadeInUp}
              transition={{ ...transitions.default, delay: 0.4 }}
              className="space-y-2 mb-6"
            >
              <label className="text-foreground text-sm font-medium">
                Password
              </label>
              <Input
                type="password"
                placeholder="Create a strong password"
                className="bg-white/5 border-white/10 text-foreground placeholder:text-foreground/40 h-12"
              />
            </motion.div>

            {/* Sign Up Button */}
            <motion.div
              {...fadeInUp}
              transition={{ ...transitions.default, delay: 0.45 }}
            >
              <Button variant="glass" size="full" className="mb-6 h-12 rounded-lg">
                Create account
              </Button>
            </motion.div>

            {/* Divider */}
            <motion.div 
              {...fadeInUp}
              transition={{ ...transitions.default, delay: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-foreground/40 text-sm">or</span>
              <div className="flex-1 h-px bg-white/10" />
            </motion.div>

            {/* Social Buttons */}
            <motion.div 
              {...fadeInUp}
              transition={{ ...transitions.default, delay: 0.55 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <Button variant="glass" className="h-12 rounded-lg gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </Button>
              <Button variant="glass" className="h-12 rounded-lg gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Apple
              </Button>
            </motion.div>

            {/* Terms */}
            <motion.p 
              {...fadeInUp}
              transition={{ ...transitions.default, delay: 0.6 }}
              className="text-foreground/50 text-sm text-center"
            >
              By creating an account you agree to our terms and conditions.
            </motion.p>
          </div>
        </div>

        {/* Footer */}
        <motion.footer 
          {...fadeInUp}
          transition={{ ...transitions.default, delay: 0.65 }}
          className="flex items-center justify-center gap-8 p-6 border-t border-white/10"
        >
          <Link to="/contact" className="text-foreground/50 text-sm hover:text-foreground transition-colors">
            Contact us
          </Link>
          <Link to="/pricing" className="text-foreground/50 text-sm hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link to="/faq" className="text-foreground/50 text-sm hover:text-foreground transition-colors">
            FAQ
          </Link>
          <Link to="/about" className="text-foreground/50 text-sm hover:text-foreground transition-colors">
            About
          </Link>
        </motion.footer>
      </div>
    </div>
  );
};

export default SignUp;