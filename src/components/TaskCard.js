import React from 'react';
import './TaskCard.css';

const TaskCard = ({ task, onToggleComplete, onDeleteTask }) => {
  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <button
          className={`checkbox ${task.completed ? 'checked' : ''}`}
          onClick={() => onToggleComplete(task.id)}
          aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {task.completed && (
            <svg viewBox="0 0 24 24" className="check-icon">
              <path
                fill="currentColor"
                d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
              />
            </svg>
          )}
        </button>
        
        <div className="task-text-wrapper">
          <p className="task-text">{task.text}</p>
          <span className="task-date">
            {new Date(task.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>
      </div>
      
      <button
        className="delete-btn"
        onClick={() => onDeleteTask(task.id)}
        aria-label="Delete task"
      >
        <svg viewBox="0 0 24 24" className="delete-icon">
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
          />
        </svg>
      </button>
    </div>
  );
};

export default TaskCard;
