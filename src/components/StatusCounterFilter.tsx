import React, { useState } from 'react';
import './StatusCounterFilter.css';
import { Todo } from './types';

interface StatusFilterProps {
    todoCount: number;
    inProgressCount: number;
    completedCount: number;
    onFilterChange: (status: Todo['status'] | null) => void;
}

const StatusFilter: React.FC<StatusFilterProps> = ({
    todoCount,
    inProgressCount,
    completedCount,
    onFilterChange,
}) => {
    const [activeFilter, setActiveFilter] = useState<Todo['status'] | null>(null);

    const handleFilterClick = (status: Todo['status'] | null) => {
        setActiveFilter(status);
        onFilterChange(status);
    };

    // const statuses = ['todo', 'in-progress', 'completed'] as Todo['status'][];


    return (
        <div className='status-filter-container'>
            <div className='status-filter-all'>
                <div className="status-filter">
                    {/* {statuses.map((status) => (
                        <div>
                            <div
                                className={`status-circle ${status} ${activeFilter === 'todo' ? 'active' : ''}`}
                                onClick={() => handleFilterClick('todo')}
                            >
                                <span>{todoCount}</span>
                            </div>
                            <p>{status.replace('-', ' ')}</p>
                        </div>
                    ))} */}
                    <div>
                        <div
                            className={`status-circle todo ${activeFilter === 'todo' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('todo')}
                        >
                            <span>{todoCount}</span>
                        </div>
                        <p>Todo</p>
                    </div>
                    <div>
                        <div
                            className={`status-circle in-progress ${activeFilter === 'in-progress' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('in-progress')}
                        >
                            <span>{inProgressCount}</span>
                        </div>
                        <p>In Progress</p>
                    </div>
                    <div>
                        <div
                            className={`status-circle completed ${activeFilter === 'completed' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('completed')}
                        >
                            <span>{completedCount}</span>
                        </div>
                        <p>Completed</p>
                    </div>
                </div>
                <p
                    className={`see-all-tasks-btn ${activeFilter === null ? 'active' : ''}`}
                    onClick={() => handleFilterClick(null)}
                >
                    See all Tasks
                </p>
            </div>
        </div>
    );
};

export default StatusFilter;
