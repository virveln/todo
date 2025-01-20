import React from 'react';
import { Todo } from './types';
import TodoItem from './TodoItem';

interface TodoListProps {
    filteredTodos: Todo[];
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ filteredTodos, todos, setTodos }) => {
    const sortedTodos = filteredTodos.sort((a, b) => a.date.getDate() - b.date.getDate());

    return (
        <div className='todo-list-content'>
            {sortedTodos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </div>
    );
};

export default TodoList;