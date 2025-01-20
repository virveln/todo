import React, { useState } from 'react';
import './StatusCounterFilter.css';
import { Todo } from './types';

interface StatusFilterProps {
    todoCount: number;
    inProgressCount: number;
    completedCount: number;
    setFilter: (status: Todo['status'] | null) => void;
}

const StatusCounterFilter: React.FC<StatusFilterProps> = ({ todoCount, inProgressCount, completedCount, setFilter }) => {
    const [activeFilter, setActiveFilter] = useState<Todo['status'] | null>(null);
    
    const statuses = [
        { status: 'todo', count: todoCount, label: 'Todo' },
        { status: 'in-progress', count: inProgressCount, label: 'In Progress' },
        { status: 'completed', count: completedCount, label: 'Completed' },
    ] as const;

    const handleFilterClick = (status: Todo['status'] | null) => {
        setActiveFilter(status);
        setFilter(status);
    };

    return (
        <div className='status-filter-container'>
            <div className='status-filter-all'>
                <div className="status-filter">
                    {statuses.map(({ status, count, label }) => (
                        <div key={status}>
                            <div
                                data-testid={status}
                                className={`status-circle ${status} ${activeFilter === status ? 'active' : ''}`}
                                onClick={() => handleFilterClick(status)}
                            >
                                <span>{count}</span>
                            </div>
                            <p>{label.replace('-', ' ')}</p>
                        </div>
                    ))}                 
                </div>
                <p
                    data-testid="see-all-tasks"
                    className={`see-all-tasks-btn ${activeFilter === null ? 'active' : ''}`}
                    onClick={() => handleFilterClick(null)}
                >
                    See all Tasks
                </p>
            </div>
        </div>
    );
};

export default StatusCounterFilter;
