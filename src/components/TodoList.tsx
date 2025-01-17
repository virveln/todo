import React from 'react';
import { Todo } from './types';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    onStatusChange: (id: number, newStatus: Todo['status']) => void;
    onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onStatusChange, onDeleteTodo }) => {
    const sortedTodos = todos.sort((a, b) => a.date.getDate() - b.date.getDate());
    
    return (
        <div className='todo-list-content'>
            {sortedTodos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onStatusChange={onStatusChange}
                    onDeleteTodo={onDeleteTodo} />
            ))}
        </div>
    );
};

export default TodoList;