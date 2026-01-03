# My To-Do List App 📝

A beautiful, feature-rich To-Do List application built with React. This app helps you stay organized and productive with a clean, modern interface and persistent storage.

## ✨ Features

- ✅ **Add Tasks** - Quickly add new tasks with a simple input
- ✓ **Mark Complete** - Toggle tasks between completed and pending states
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- 🔍 **Filter Tasks** - View All, Completed, or Pending tasks
- 💾 **Persistent Storage** - Tasks are saved in localStorage and persist after page reload
- 📊 **Task Statistics** - See your task counts at a glance
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile

## 🎬 Animations

The app includes smooth CSS transitions and animations:
- Slide-in animation when tasks are added
- Fade-out animation when tasks are deleted
- Checkbox check animation
- Floating empty state icon
- Hover effects and button interactions

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Run the App

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## ��️ Technologies Used

- **React** - Frontend framework
- **CSS3** - Styling and animations
- **localStorage** - Data persistence
- **React Hooks** - useState, useEffect

## 📋 How to Use

1. **Add a Task**: Type your task in the input field and click "Add Task" or press Enter
2. **Complete a Task**: Click the checkbox next to a task to mark it as complete
3. **Delete a Task**: Hover over a task and click the delete (×) button
4. **Filter Tasks**: Use the filter buttons (All, Pending, Completed) to view specific tasks
5. **View Statistics**: Check the stats bar at the bottom to see task counts

## 🎨 Features in Detail

### Task Management
- Each task has a unique ID, text, completion status, and creation date
- Tasks are stored in an array in component state
- Real-time updates with React state management

### Filtering System
- **All**: Shows all tasks
- **Pending**: Shows only incomplete tasks
- **Completed**: Shows only completed tasks
- Filter counts update dynamically

### Data Persistence
- Tasks are automatically saved to localStorage
- Data persists across browser sessions
- Graceful error handling for storage operations

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Touch-friendly buttons on mobile devices

## 📦 Project Structure

```
src/
├── components/
│   ├── TaskInput.js       # Input component for adding tasks
│   ├── TaskInput.css      # Styling for task input
│   ├── TaskCard.js        # Individual task card component
│   ├── TaskCard.css       # Styling for task cards
│   ├── FilterBar.js       # Filter buttons component
│   └── FilterBar.css      # Styling for filter bar
├── App.js                 # Main application component
├── App.css                # Global app styling
└── index.js               # App entry point
```

## 🎯 Future Enhancements

- Task editing functionality
- Task categories/tags
- Due dates and reminders
- Search functionality
- Dark mode toggle
- Task priority levels
- Export/import tasks
- Drag and drop reordering

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built with ❤️ using React

---

**Enjoy staying organized!** 🎉
