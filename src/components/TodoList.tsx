import { Todo } from '@/types';
import TodoItem from '@/components/TodoItem';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
};

export default function TodoList({ todos, onToggle, onDelete, onEdit }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-300">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-4 opacity-50">
          <rect x="8" y="12" width="48" height="40" rx="6" stroke="currentColor" strokeWidth="3" />
          <path d="M20 28h24M20 36h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <p className="text-sm">No todos here!</p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
