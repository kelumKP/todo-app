import React, { useContext, useState } from 'react';
import { TaskContext } from '../features/tasks/TaskContext';
import TaskItem from './TaskItem';
import { sortTasksByPriority, sortTasksByStatus } from '../utils/taskUtils';
import SortFilter from './SortFilter';

const TaskList: React.FC = () => {
  const { tasks } = useContext(TaskContext)!;
  const [sortBy, setSortBy] = useState<'none' | 'priority' | 'status'>('none');
  const [query, setQuery] = useState('');

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(query.toLowerCase())
  );

  const sortedTasks = (() => {
    if (sortBy === 'priority') return sortTasksByPriority(filteredTasks);
    if (sortBy === 'status') return sortTasksByStatus(filteredTasks);
    return filteredTasks;
  })();

return (
  <div className="pl-4">
    <SortFilter onChange={setSortBy} />
    <input
      value={query}
      onChange={e => setQuery(e.target.value)}
      placeholder="Search tasks..."
      className="border p-1 w-full mb-2"
    />
    <ul>
      {sortedTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  </div>
);
};

export default TaskList;