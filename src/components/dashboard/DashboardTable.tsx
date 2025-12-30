import { Search, TrendingUp, TrendingDown, Flame, Rocket } from "lucide-react";

const DashboardTable = () => {
  const filters = [
    { icon: Flame, label: "Trending", active: true },
    { icon: TrendingUp, label: "Gainers" },
    { icon: TrendingDown, label: "Decliner" },
    { icon: Rocket, label: "New-Launch" },
  ];

  const tableData = [
    { id: "01", name: "Enterprise Plan", category: "Subscription", price: "$299", change: "+12.5%", isPositive: true },
    { id: "02", name: "API Access", category: "Integration", price: "$149", change: "+8.2%", isPositive: true },
    { id: "03", name: "Data Export", category: "Feature", price: "$49", change: "-2.1%", isPositive: false },
    { id: "04", name: "Custom Reports", category: "Analytics", price: "$79", change: "+15.3%", isPositive: true },
    { id: "05", name: "Team Seats", category: "License", price: "$25", change: "+5.7%", isPositive: true },
    { id: "06", name: "Storage Plus", category: "Add-on", price: "$19", change: "-0.8%", isPositive: false },
  ];

  const Sparkline = ({ isPositive }: { isPositive: boolean }) => (
    <svg className="w-12 h-4" viewBox="0 0 48 16">
      <path
        d={isPositive 
          ? "M0 12 L8 10 L16 8 L24 9 L32 6 L40 4 L48 2" 
          : "M0 4 L8 6 L16 8 L24 7 L32 10 L40 12 L48 14"
        }
        fill="none"
        stroke={isPositive ? "#22c55e" : "#ef4444"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className="flex-1 flex flex-col mx-3 mb-3">
      {/* Search & Filters - outside shadow */}
      <div className="flex items-center justify-between px-4 py-2.5">
        <div 
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.06] min-w-[140px]"
          style={{ boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.04)' }}
        >
          <Search className="w-3 h-3 text-white/40" />
          <span className="text-white/40 text-[10px]">Search</span>
        </div>
        <div className="flex items-center gap-1">
          {filters.map((filter) => (
            <button
              key={filter.label}
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-[9px] transition-colors ${
                filter.active
                  ? 'text-white border border-white/[0.06]'
                  : 'text-white/50 hover:bg-white/5 hover:text-white/70'
              }`}
              style={filter.active ? { boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.04)' } : undefined}
            >
              <filter.icon className="w-2.5 h-2.5" />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Table with shadow */}
      <div 
        className="flex-1 flex flex-col rounded-xl border border-white/[0.06] overflow-hidden"
        style={{ boxShadow: 'inset 0 0 40px rgba(255, 255, 255, 0.06), inset 0 0 20px rgba(255, 255, 255, 0.04)' }}
      >
        {/* Table Header */}
        <div className="px-4 py-2 border-b border-white/10">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-white text-[11px] font-medium">Product Sales</span>
          </div>
          <p className="text-white/40 text-[9px]">Sales summary of individual products with live data</p>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-hidden">
          <div className="grid grid-cols-6 gap-2 px-4 py-1.5 text-[8px] text-white/40 uppercase tracking-wider border-b border-white/10">
            <span>#</span>
            <span>Product</span>
            <span>Category</span>
            <span>Price</span>
            <span>Change</span>
            <span>Trend</span>
          </div>
          <div className="flex flex-col">
            {tableData.map((row) => (
              <div
                key={row.id}
                className="grid grid-cols-6 gap-2 px-4 py-2 text-[10px] border-b border-white/5 hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-white/40">{row.id}</span>
                <span className="text-white">{row.name}</span>
                <span className="text-white/50">{row.category}</span>
                <span className="text-white">{row.price}</span>
                <span className={row.isPositive ? 'text-green-500' : 'text-red-500'}>
                  {row.change}
                </span>
                <Sparkline isPositive={row.isPositive} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
