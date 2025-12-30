import { motion } from "framer-motion";

interface Testimonial {
  username: string;
  avatar: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    username: "@cryptomanu",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=manu",
    quote: "This changed the way I trade. Fast, clean, and way more insightful than other tools I've tried."
  },
  {
    username: "@ethkaren",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=karen",
    quote: "Love the cross-platform access. I check charts on desktop, and track my portfolio on mobile."
  },
  {
    username: "@btcbrenda",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=brenda",
    quote: "LI has completely streamlined how I monitor my portfolio. The real-time price updates are super accurate, and I love how I can customize alerts to match my strategy."
  },
  {
    username: "@codetheblock",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=codeblock",
    quote: "Perfect for builders. API was easy to integrate into my trading tools."
  },
  {
    username: "@codecrusher",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=crusher",
    quote: "As a crypto dev, this is gold. It's fast, well-documented, and easy to integrate with my own dashboard setup."
  },
  {
    username: "@blockdanny",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=danny",
    quote: "The predictive alerts saved me from missing a 15% jump. Game changer."
  },
  {
    username: "@devtraderjoe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=joe",
    quote: "I integrated the API into my own trading dashboard. The docs are super clear—was up and running in minutes."
  },
  {
    username: "@altcoinrookie",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rookie",
    quote: "Data is beautifully visualized. Even a beginner can feel like a pro."
  },
  {
    username: "@fifi.rfqh",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=fifi",
    quote: "Before LI, I had 4 tabs open just to track a few coins. Now everything is in one place—and it's faster, cleaner, and way more intuitive."
  },
  {
    username: "@defidiego",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=diego",
    quote: "Used to rely on 3 apps. Now I just use LI."
  },
  {
    username: "@eth_eli",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=eli",
    quote: "Signed up for the price tracking. Stayed for the alerts and dashboards."
  },
  {
    username: "@noirnode",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=noir",
    quote: "The dark UI, performance, and real-time feed? Chef's kiss."
  },
  {
    username: "@uxonchain",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=uxon",
    quote: "This is the first crypto tool that feels like it was made by designers and traders."
  },
  {
    username: "@signalhunter",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hunter",
    quote: "Being able to monitor over 200 coins in one place is a lifesaver."
  },
  {
    username: "@lunalurker",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=luna",
    quote: "I'm not a pro trader, but LI makes me feel like one. The dashboard is simple to use, and the AI-based insights actually helped me avoid a huge dip last week."
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-muted/10 border border-border rounded-2xl p-4 break-inside-avoid mb-4"
    >
      <div className="flex items-center gap-3 mb-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.username}
          className="w-8 h-8 rounded-full bg-muted"
        />
        <span className="text-sm text-muted-foreground">{testimonial.username}</span>
      </div>
      <p className="text-sm text-foreground/80 leading-relaxed">"{testimonial.quote}"</p>
    </motion.div>
  );
};

const Testimonials = () => {
  // Split testimonials into 5 columns for masonry effect
  const columns: Testimonial[][] = [[], [], [], [], []];
  testimonials.forEach((testimonial, index) => {
    columns[index % 5].push(testimonial);
  });

  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      {/* Header - centered with max-width */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            Trusted by many users
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join thousands of traders and developers who rely on our platform for real-time insights and powerful analytics.
          </p>
        </motion.div>
      </div>

      {/* Masonry Grid - full width on mobile */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 md:px-6 lg:px-8">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_center,_transparent_30%,_hsl(var(--background))_100%)] pointer-events-none z-10" />
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col">
            {column.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.username}
                testimonial={testimonial}
                index={colIndex * 3 + index}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
