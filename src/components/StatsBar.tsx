type StatsBarProps = {
  activeCount: number;
  completedCount: number;
};

export default function StatsBar({ activeCount, completedCount }: StatsBarProps) {
  const total = activeCount + completedCount;
  return (
    <div className="flex gap-4 mb-4 px-1">
      <span className="text-xs text-gray-400">
        <span className="font-semibold text-yellow-500">{total}</span> total
      </span>
      <span className="text-xs text-gray-400">
        <span className="font-semibold text-amber-500">{activeCount}</span> remaining
      </span>
      <span className="text-xs text-gray-400">
        <span className="font-semibold text-emerald-500">{completedCount}</span> done
      </span>
    </div>
  );
}
