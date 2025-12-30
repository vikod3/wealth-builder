import { 
  Search, 
  LayoutDashboard, 
  PieChart, 
  TrendingUp, 
  Star, 
  ArrowLeftRight, 
  Receipt, 
  Wallet, 
  BarChart3, 
  Newspaper,
  FileText,
  CircleDollarSign,
  Layers,
  Database,
  Shield,
  Coins,
  Sparkles
} from "lucide-react";

const DashboardSidebar = () => {
  const generalItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: PieChart, label: "Portfolio" },
    { icon: TrendingUp, label: "Market" },
    { icon: Star, label: "Watchlist" },
    { icon: ArrowLeftRight, label: "Exchange" },
    { icon: Receipt, label: "Transactions" },
    { icon: Wallet, label: "Wallets" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Newspaper, label: "News" },
  ];

  const tokenItems = [
    { icon: FileText, label: "Smart Contract" },
    { icon: CircleDollarSign, label: "Revenue Streams" },
    { icon: Layers, label: "Data Layers" },
    { icon: Database, label: "Integrations" },
    { icon: Shield, label: "Scaling Solutions" },
    { icon: Coins, label: "Subscriptions" },
    { icon: Sparkles, label: "AI Features" },
    { icon: BarChart3, label: "Performance" },
  ];

  return (
    <div className="w-48 flex flex-col h-full">
      {/* Search */}
      <div className="p-3">
        <div 
          className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-white/[0.06]"
          style={{ boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.04)' }}
        >
          <Search className="w-3 h-3 text-white/40" />
          <span className="text-white/40 text-[10px]">Search</span>
        </div>
      </div>

      {/* General Section */}
      <div className="p-3">
        <span className="text-white/40 text-[9px] uppercase tracking-wider mb-2 block">General</span>
        <div className="flex flex-col gap-0.5">
          {generalItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-2 py-1.5 rounded-md transition-colors ${
                item.active 
                  ? 'text-white border border-white/[0.06]' 
                  : 'text-white/50 hover:bg-white/5 hover:text-white/70'
              }`}
              style={item.active ? { boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.04)' } : undefined}
            >
              <item.icon className="w-3 h-3" />
              <span className="text-[10px]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Features Section */}
      <div className="p-3 flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/40 text-[9px] uppercase tracking-wider">Top Features</span>
          <button className="text-white/40 hover:text-white transition-colors">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-0.5">
          {tokenItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/50 hover:bg-white/5 hover:text-white/70 transition-colors"
            >
              <item.icon className="w-3 h-3" />
              <span className="text-[10px]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Card */}
      <div className="p-3">
        <div className="p-3 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl">
          <div className="flex items-center gap-1 mb-1.5">
            <Sparkles className="w-3 h-3 text-blue-400" />
            <span className="text-white text-[10px] font-medium">Ready to scale?</span>
          </div>
          <p className="text-white/50 text-[8px] mb-2 leading-relaxed">
            Get real-time insights and grow faster.
          </p>
          <button className="w-full py-1.5 bg-white text-black text-[9px] font-medium rounded-md hover:bg-white/90 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
