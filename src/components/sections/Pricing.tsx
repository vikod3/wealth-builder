import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/particles";
import diamondWhite from "@/assets/diamond-white.png";
import diamondOrange from "@/assets/diamond-orange.png";
import diamondPink from "@/assets/diamond-pink.png";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  priceLabel: string;
  features: string[];
  diamond: string;
  highlighted?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Starter Plan",
    description: "For traders who need reliable, real-time insights to stay ahead.",
    price: "$0",
    priceLabel: "Per month / free access",
    diamond: diamondWhite,
    features: [
      "Real-time data (5 exchanges)",
      "Portfolio overview",
      "Custom watchlists",
      "Price alerts",
      "Secure API connection",
      "Dark mode interface",
      "Email notifications",
      "Responsive dashboard",
    ],
  },
  {
    name: "Professional Plan",
    description: "For active traders who rely on AI-driven precision.",
    price: "$129",
    priceLabel: "Per month / billed monthly",
    diamond: diamondOrange,
    highlighted: true,
    features: [
      "Everything in Starter",
      "AI-powered analytics",
      "Smart alert system",
      "Historical performance data",
      "Multi-exchange sync",
      "Mobile & web access",
      "Exportable reports",
      "Priority updates",
    ],
  },
  {
    name: "Enterprise Plan",
    description: "For funds and teams managing large portfolios.",
    price: "$199",
    priceLabel: "Per month / billed monthly",
    diamond: diamondPink,
    features: [
      "Everything in Professional",
      "Unlimited exchange connections",
      "Team accounts & permissions",
      "Advanced API automation",
      "Dedicated account manager",
      "Custom data integrations",
      "24/7 priority support",
      "SLA-backed uptime",
    ],
  },
];

const PricingCard = ({ plan, index }: { plan: PricingPlan; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl border border-white/10 p-6 flex flex-col ${
        plan.highlighted
          ? "gradient-card"
          : "bg-card-fill"
      }`}
    >
      {/* Diamond Icon */}
      <img
        src={plan.diamond}
        alt=""
        className="w-8 h-8 mb-4"
      />

      {/* Plan Name */}
      <h3 className="text-xl font-medium text-foreground mb-2">{plan.name}</h3>
      <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>

      {/* Price */}
      <div className="mb-6">
        <span className="text-5xl font-medium text-foreground">{plan.price}</span>
        <p className="text-foreground/60 text-sm mt-1">{plan.priceLabel}</p>
      </div>
      {/* Divider */}
      <div className="w-full h-px bg-white/10 mb-6" />

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
            <Check className="w-4 h-4 text-foreground/60 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button
        variant={plan.highlighted ? "primary" : "glass"}
        size="full"
        className="rounded-lg"
      >
        Get Started
      </Button>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section className="w-full py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Particles */}
      <Particles variant="default" />
      
      {/* Header */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            Power Your Trading Strategy<br />with the Right Plan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From real-time monitoring to AI-powered analytics, LI offers flexible plans tailored for traders who demand speed, precision, and insight.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={plan.name} className={index === 2 ? "md:col-span-2 md:max-w-md md:mx-auto lg:col-span-1 lg:max-w-none" : ""}>
              <PricingCard plan={plan} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
