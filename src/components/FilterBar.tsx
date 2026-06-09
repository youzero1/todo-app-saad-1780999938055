import clsx from 'clsx';
import { FilterType } from '@/types';

type FilterBarProps = {
  filter: FilterType;
  setFilter: (f: FilterType) => void;
};

const FILTERS: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

export default function FilterBar({ filter, setFilter }: FilterBarProps) {
  return (
    <div className="flex gap-1 mb-4 bg-gray-100 rounded-xl p-1">
      {FILTERS.map(f => (
        <button
          key={f.value}
          onClick={() => setFilter(f.value)}
          className={clsx(
            'flex-1 py-1.5 rounded-lg text-sm font-medium transition-colors',
            filter === f.value
              ? 'bg-white text-yellow-500 shadow-sm'
              : 'text-gray-400 hover:text-gray-600'
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
