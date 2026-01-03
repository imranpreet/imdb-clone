import { useEffect, useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskCard from './components/TaskCard';
import FilterBar from './components/FilterBar';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'pending', 'completed'

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const handleAddTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
  };

  // Toggle task completion
  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Filter tasks based on current filter
  const getFilteredTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter((task) => task.completed);
      case 'pending':
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  };

  // Calculate task counts
  const taskCounts = {
    all: tasks.length,
    pending: tasks.filter((task) => !task.completed).length,
    completed: tasks.filter((task) => task.completed).length,
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-icon">✓</span>
            My To-Do List
          </h1>
          <p className="app-subtitle">Stay organized and productive</p>
        </div>
      </header>

      <main className="app-main">
        <div className="todo-container">
          <TaskInput onAddTask={handleAddTask} />
          
          <FilterBar
            currentFilter={filter}
            onFilterChange={setFilter}
            taskCounts={taskCounts}
          />

          <div className="tasks-list">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggleComplete={handleToggleComplete}
                  onDeleteTask={handleDeleteTask}
                />
              ))
            ) : (
              <div className="empty-state">
                <div className="empty-icon">
                  {filter === 'completed' ? '🎉' : '📝'}
                </div>
                <h3 className="empty-title">
                  {filter === 'completed'
                    ? 'No completed tasks yet'
                    : filter === 'pending'
                    ? 'No pending tasks'
                    : 'No tasks yet'}
                </h3>
                <p className="empty-description">
                  {filter === 'all'
                    ? 'Add your first task to get started!'
                    : `Switch to "All" to see your tasks`}
                </p>
              </div>
            )}
          </div>

          {tasks.length > 0 && (
            <div className="stats-bar">
              <span className="stat-item">
                <strong>{taskCounts.pending}</strong> pending
              </span>
              <span className="stat-divider">•</span>
              <span className="stat-item">
                <strong>{taskCounts.completed}</strong> completed
              </span>
              <span className="stat-divider">•</span>
              <span className="stat-item">
                <strong>{taskCounts.all}</strong> total
              </span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
