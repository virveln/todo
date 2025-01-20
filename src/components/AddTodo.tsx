import React, { useState } from "react";
import { Todo } from './types';
import DatePicker from "react-datepicker";
import './AddTodo.css';

interface AddTodoProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const AddTodo: React.FC<AddTodoProps> = ({ todos, setTodos }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());

    const handleAddTodo = (title: string, description: string, date: Date) => {
        const newTodo: Todo = {
            id: Date.now(),
            title,
            description,
            date,
            status: 'todo',
        };
        setTodos([...todos, newTodo]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() && description.trim() && startDate) {
            handleAddTodo(title, description, startDate);
            setTitle('');
            setDescription('');
            setStartDate(new Date());
        }
    }

    return (
        <div className="add-form-container">
            <form onSubmit={handleSubmit} >
                <h2>Create a Task</h2>
                <div>
                    <input
                        data-testid="task-title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Task Title"
                        className="input-field"
                    />
                </div>
                <div>
                    <textarea
                        data-testid="task-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Task Description"
                        className="input-field"
                    />
                </div>
                <div data-testid="task-end-date" className="date-picker-container">
                    <DatePicker
                        dateFormat="yyyy/MM/dd"
                        selected={startDate}
                        onChange={(date) => setStartDate(date as Date)} />
                    <p>Task End Date</p>
                </div>
                <button data-testid="task-submit-btn" className="btn" type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddTodo;
