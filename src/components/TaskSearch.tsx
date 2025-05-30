import React, { useContext, useState } from 'react';
import { TaskContext } from '../features/tasks/TaskContext';
import TaskItem from './TaskItem';

const TaskSearch: React.FC = () => {
  const { tasks } = useContext(TaskContext)!;
  const [query, setQuery] = useState('');

  const filtered = tasks.filter(task =>
    task.title.toLowerCase().includes(query.toLowerCase())
  );

return (
  <div className="mb-4">
    <input
      value={query}
      onChange={e => setQuery(e.target.value)}
      placeholder="Search tasks..."
      className="border p-1 w-full mb-2"
    />
    <ul>
      {filtered.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  </div>
);
};

export default TaskSearch;
