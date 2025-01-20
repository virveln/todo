import React from 'react';
import './TodoItem.css';
import { Todo } from './types';
import { FaDeleteLeft } from "react-icons/fa6";
import TaskProgressBar from './TaskProgressBar';

interface TodoItemProps {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, todos, setTodos }) => {
    // const TodoItem: React.FC<TodoItemProps> = ({ todo, todos, setTodos }) => {

    const handleStatusChange = (id: number, newStatus: Todo['status']) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, status: newStatus } : todo
        ));
    };

    const handleDeleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className='todo-item'>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <TaskProgressBar
                status={todo.status}
                onStatusChange={(newStatus) => handleStatusChange(todo.id, newStatus)}
            />
            <div className='date-container'>
                <p className='end-date'><span>End Date: </span>{todo.date.toLocaleDateString()}</p>
            </div>
            <button data-testid="delete-btn" className='delete-btn' onClick={() => handleDeleteTodo(todo.id)} title='Delete Task'><FaDeleteLeft /></button>
        </div>
    );
};

export default TodoItem;