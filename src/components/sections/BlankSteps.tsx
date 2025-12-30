import { motion } from "framer-motion";

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

const BlankSteps = () => {
  return (
    <section className="px-6 pb-20 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-[1240px] rounded-2xl border border-muted-foreground/30 p-6 md:p-8"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col gap-3 ${
                index < steps.length - 1
                  ? "border-b pb-6 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6 lg:pr-8"
                  : ""
              } border-muted-foreground/30`}
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

export default BlankSteps;
