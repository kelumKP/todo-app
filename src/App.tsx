import React from 'react';
import { TaskProvider } from './features/tasks/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


const App: React.FC = () => {
  return (
<TaskProvider>
  <div className="max-w-xl mx-auto p-4 pl-8">
    <h1 className="text-2xl font-bold mb-4">To Do List</h1>
    <TaskForm />
    <TaskList />
  </div>
</TaskProvider>
  );
};


export default App;
