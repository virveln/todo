import React from 'react';
import './TodoItem.css';
import { Todo } from './types';
// import { TiDeleteOutline } from "react-icons/ti";
import CheckProgress from './TaskProgressBar';
// import ProgressBar from './ProgressBar';

interface TodoItemProps {
    todo: Todo;
    onStatusChange: (id: number, newStatus: Todo['status']) => void;
    onDeleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onStatusChange, onDeleteTodo }) => {

    return (
        <div className='todo-item'>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <CheckProgress
                status={todo.status}
                onStatusChange={(newStatus) => onStatusChange(todo.id, newStatus)}
            />
            <div className='date-delete-container'>
                <p className='end-date'><span>End Date: </span>{todo.date.toLocaleDateString()}</p>
                {/* <button className='delete-btn' onClick={() => onDeleteTodo(todo.id)} title='Delete Task'><TiDeleteOutline /></button> */}
            </div>
        </div>
    );
};

export default TodoItem;