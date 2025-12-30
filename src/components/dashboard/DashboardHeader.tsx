import { Users, Wallet, ChevronRight } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-2.5 border-b border-white/10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-[9px] md:text-[10px]">
        <span className="text-white/50">Dashboard</span>
        <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3 text-white/30" />
        <span className="text-white">Assets Overview</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1.5 md:gap-2">
        <button className="hidden sm:flex items-center gap-1.5 px-2 md:px-2.5 py-1 md:py-1.5 bg-white/5 border border-white/10 rounded-md md:rounded-lg text-white/70 hover:bg-white/10 transition-colors">
          <Users className="w-2.5 h-2.5 md:w-3 md:h-3" />
          <span className="text-[9px] md:text-[10px]">Invite</span>
        </button>
        <button className="flex items-center gap-1 md:gap-1.5 px-2 md:px-2.5 py-1 md:py-1.5 bg-blue-600 rounded-md md:rounded-lg text-white hover:bg-blue-700 transition-colors">
          <Wallet className="w-2.5 h-2.5 md:w-3 md:h-3" />
          <span className="text-[9px] md:text-[10px]">Connect</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
