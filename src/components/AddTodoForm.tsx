import { useState } from 'react';
import { Plus } from 'lucide-react';

type AddTodoFormProps = {
  onAdd: (text: string) => void;
};

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim()) {
      onAdd(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700 placeholder-gray-300 text-sm transition"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500 hover:bg-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed text-white shadow-sm transition-colors"
      >
        <Plus size={20} />
      </button>
    </form>
  );
}
