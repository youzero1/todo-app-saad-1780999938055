import { useState } from 'react';
import { Trash2, Pencil, Check, X } from 'lucide-react';
import clsx from 'clsx';
import { Todo } from '@/types';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
};

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEditSubmit = () => {
    if (editValue.trim()) {
      onEdit(todo.id, editValue);
    }
    setEditing(false);
  };

  const handleEditCancel = () => {
    setEditValue(todo.text);
    setEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleEditSubmit();
    if (e.key === 'Escape') handleEditCancel();
  };

  return (
    <li className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 group transition-all">
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        className={clsx(
          'flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors',
          todo.completed
            ? 'bg-emerald-400 border-emerald-400 text-white'
            : 'border-gray-300 hover:border-yellow-400'
        )}
        aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {todo.completed && <Check size={11} strokeWidth={3} />}
      </button>

      {/* Text / Edit input */}
      {editing ? (
        <input
          autoFocus
          value={editValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 text-sm text-gray-700 border-b border-yellow-300 focus:outline-none bg-transparent py-0.5"
        />
      ) : (
        <span
          className={clsx(
            'flex-1 text-sm select-none',
            todo.completed ? 'line-through text-gray-300' : 'text-gray-700'
          )}
        >
          {todo.text}
        </span>
      )}

      {/* Action buttons */}
      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {editing ? (
          <>
            <button
              onClick={handleEditSubmit}
              className="p-1 rounded-lg text-emerald-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
              aria-label="Save"
            >
              <Check size={15} />
            </button>
            <button
              onClick={handleEditCancel}
              className="p-1 rounded-lg text-gray-300 hover:text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="Cancel"
            >
              <X size={15} />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setEditing(true)}
              className="p-1 rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-yellow-50 transition-colors"
              aria-label="Edit"
            >
              <Pencil size={15} />
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="p-1 rounded-lg text-gray-300 hover:text-rose-400 hover:bg-rose-50 transition-colors"
              aria-label="Delete"
            >
              <Trash2 size={15} />
            </button>
          </>
        )}
      </div>
    </li>
  );
}
