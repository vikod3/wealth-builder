import Navbar from "@/components/layout/Navbar";
import Pricing from "@/components/sections/Pricing";
import PlanComparison from "@/components/sections/PlanComparison";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-12">
        <Pricing />
        <PlanComparison />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;