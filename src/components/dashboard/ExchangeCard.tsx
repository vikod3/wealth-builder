import { MoreHorizontal } from "lucide-react";

interface ExchangeCardProps {
  icon: React.ReactNode;
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
}

const ExchangeCard = ({ icon, name, value, change, isPositive }: ExchangeCardProps) => {
  return (
    <div 
      className="flex flex-col gap-3 md:gap-4 p-3 md:p-4 rounded-xl border border-white/[0.06] backdrop-blur-sm overflow-hidden min-w-0"
      style={{ boxShadow: 'inset 0 0 40px rgba(255, 255, 255, 0.06), inset 0 0 20px rgba(255, 255, 255, 0.04)' }}
    >
      <div className="flex items-center justify-between min-w-0">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <span className="text-white text-[11px] md:text-xs font-medium truncate">{name}</span>
        </div>
        <button className="text-white/30 hover:text-white/60 transition-colors hidden md:block flex-shrink-0">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex flex-col gap-1 min-w-0">
        <span className="text-white/40 text-[8px] md:text-[9px] uppercase tracking-wider">Revenue</span>
        <div className="flex items-baseline gap-1.5">
          <span className="text-white text-sm md:text-lg font-semibold tracking-tight whitespace-nowrap">{value}</span>
          <span className={`text-[8px] md:text-[10px] font-medium whitespace-nowrap ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
            {change}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExchangeCard;
