import React from 'react';
import './FilterBar.css';

const FilterBar = ({ currentFilter, onFilterChange, taskCounts }) => {
  const filters = [
    { id: 'all', label: 'All', count: taskCounts.all },
    { id: 'pending', label: 'Pending', count: taskCounts.pending },
    { id: 'completed', label: 'Completed', count: taskCounts.completed },
  ];

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`filter-btn ${currentFilter === filter.id ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
          <span className="filter-count">{filter.count}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
