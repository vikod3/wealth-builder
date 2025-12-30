import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ComparisonRow {
  feature: string;
  starter: string | boolean;
  professional: string | boolean;
  enterprise: string | boolean;
}

const comparisonData: ComparisonRow[] = [
  { feature: "Exchange Connections", starter: "5 Exchanges", professional: "10 Exchanges", enterprise: "25 Exchanges" },
  { feature: "Dashboard Access", starter: true, professional: true, enterprise: true },
  { feature: "Real-Time Data", starter: true, professional: true, enterprise: true },
  { feature: "AI Analytics", starter: false, professional: true, enterprise: true },
  { feature: "Smart Alerts", starter: "Basic", professional: "Advance", enterprise: "Advanced + Trends" },
  { feature: "Forecasting", starter: false, professional: false, enterprise: true },
  { feature: "Multi-User Access", starter: false, professional: true, enterprise: true },
  { feature: "Custom Reports", starter: false, professional: false, enterprise: true },
];

const CellValue = ({ value }: { value: string | boolean }) => {
  if (value === true) {
    return <Check className="w-5 h-5 text-foreground mx-auto" />;
  }
  if (value === false) {
    return <span className="text-foreground/40">-</span>;
  }
  return <span className="text-foreground/80">{value}</span>;
};

const PlanComparison = () => {
  return (
    <section className="w-full py-24 px-4 md:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            What's in each plan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur vitae arcu augue sapien amet vel consectetur sit placerat mi id purus et varius id sed amet.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto scrollbar-hide"
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-6 text-foreground font-medium min-w-[140px] bg-card-fill">Accounts</th>
                <th className="text-center py-4 px-4 text-foreground font-medium min-w-[120px]">Starter Plan</th>
                <th className="text-center py-4 px-4 text-foreground font-medium min-w-[120px]">Professional Plan</th>
                <th className="text-center py-4 px-4 text-foreground font-medium min-w-[120px]">Enterprise Plan</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={row.feature}
                  className="border-b border-white/10"
                >
                  <td className="py-4 px-6 text-foreground font-medium bg-card-fill min-w-[140px]">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CellValue value={row.starter} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CellValue value={row.professional} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CellValue value={row.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default PlanComparison;