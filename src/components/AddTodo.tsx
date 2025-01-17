import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './AddTodo.css';

interface AddTodoProps {
    onAddTodo: (title: string, description: string, date: Date) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() && description.trim() && startDate) {
            onAddTodo(title, description, startDate);
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
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Task Title"
                        className="input-field"
                    />
                </div>
                <div>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Task Description"
                        className="input-field"
                    />
                </div>
                <div className="date-picker-container">
                    <DatePicker dateFormat="yyy/MM/dd" selected={startDate} onChange={(date) => setStartDate(date as Date)} placeholderText="Select End Date"/>
                    <p>Task End Date</p>
                </div>
                <button className="btn" type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddTodo;
