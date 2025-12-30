import { Layers, Database, Shield, Coins } from "lucide-react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardWelcome from "./DashboardWelcome";
import DashboardTable from "./DashboardTable";
import ExchangeCard from "./ExchangeCard";

const DashboardPreview = () => {
  const exchangeCards = [
    { icon: <Layers className="w-4 h-4 text-purple-400" />, name: "Stripe", value: "$9,352,102", change: "+20% ($187,042)", isPositive: true },
    { icon: <Database className="w-4 h-4 text-blue-400" />, name: "PayPal", value: "$4,118,062", change: "-4% ($164,722)", isPositive: false },
    { icon: <Shield className="w-4 h-4 text-green-400" />, name: "Shopify", value: "$11,312,102", change: "+10% ($1,131,210)", isPositive: true },
    { icon: <Coins className="w-4 h-4 text-orange-400" />, name: "Gumroad", value: "$2,245,369", change: "-0.2% ($4,490)", isPositive: false },
  ];

  return (
    <div className="relative w-full max-w-[1300px] mx-auto mt-8 md:mt-12 px-0 md:px-0">
      {/* Dashboard container with premium inset shadow */}
      <div 
        className="relative overflow-hidden border border-white/10 bg-[#010205] rounded-t-2xl"
        style={{ 
          boxShadow: 'inset 0 0 120px rgba(255, 255, 255, 0.04), inset 0 0 60px rgba(255, 255, 255, 0.03), inset 0 0 30px rgba(255, 255, 255, 0.02)' 
        }}
      >
        <div className="flex h-[350px] sm:h-[400px] md:h-[500px]">
          {/* Sidebar - hidden on mobile */}
          <div className="hidden md:block">
            <DashboardSidebar />
          </div>

          {/* Main Content */}
          <div 
            className="flex-1 flex flex-col min-w-0 rounded-xl m-2 border border-white/[0.06]"
            style={{ boxShadow: 'inset 0 0 40px rgba(255, 255, 255, 0.06), inset 0 0 20px rgba(255, 255, 255, 0.04)' }}
          >
            <DashboardHeader />
            <DashboardWelcome />

            {/* Exchange Cards - 2 cols on mobile, 4 on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 px-3 md:px-4 pb-3">
              {exchangeCards.map((card, index) => (
                <ExchangeCard key={index} {...card} />
              ))}
            </div>

            {/* Table Section */}
            <div className="hidden sm:block flex-1">
              <DashboardTable />
            </div>
          </div>
        </div>

        {/* Bottom fade gradient */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 md:h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #010205 0%, transparent 100%)'
          }}
        />
      </div>
    </div>
  );
};

export default DashboardPreview;
