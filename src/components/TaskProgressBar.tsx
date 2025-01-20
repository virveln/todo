import React from 'react';
import './TaskProgressBar.css';
import { Todo } from './types';

interface CheckProgressProps {
    status: Todo['status'];
    onStatusChange: (newStatus: Todo['status']) => void;
}

const CheckProgress: React.FC<CheckProgressProps> = ({ status, onStatusChange }) => {
    const statuses = ['todo', 'in-progress', 'completed'] as Todo['status'][];

    return (
        <>
            <div className="check-progress">
                {statuses.map((item, index) => (
                    <div key={item} className="progress-item">
                        <div className="progress-container">
                            <div
                                data-testid={item}
                                className={`circle ${statuses.indexOf(status) >= index ? 'filled' : ''} ${item} ${status}`}
                                onClick={() => onStatusChange(item)}
                            ></div>
                            {index < statuses.length - 1 && (
                                <div data-testid="line" className={`line ${statuses.indexOf(status) > index ? 'filled' : ''}  ${status}`}></div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="progress-label-container">
                {statuses.map((item) => (
                    <div key={item} className="progress-label-content">
                        <p className="progress-label">{item.replace('-', ' ')}</p>
                    </div>
                ))}
            </div >
        </>
    );
};

export default CheckProgress;
