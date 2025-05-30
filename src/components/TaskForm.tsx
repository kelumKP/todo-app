import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskContext } from '../features/tasks/TaskContext';
import { Frequency, Priority } from '../features/tasks/types';

const TaskForm: React.FC = () => {
  const { tasks, dispatch } = useContext(TaskContext)!;
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('Low');
  const [frequency, setFrequency] = useState<Frequency>('None');
  const [dependencies, setDependencies] = useState<string[]>([]);
  const [dependency, setDependency] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch({
      type: 'ADD_TASK',
      task: {
        id: uuidv4(),
        title,
        isDone: false,
        priority,
        frequency,
 dependencies: dependency ? [dependency] : [],
      }
    });

    setTitle('');
    setPriority('Low');
    setFrequency('None');
    setDependency('');
  };

  return (

<form
  onSubmit={handleSubmit}
  className="mb-8 bg-white shadow-md rounded-lg p-6 w-full max-w-lg mx-auto flex flex-col gap-4"
><input
    value={title}
    onChange={e => setTitle(e.target.value)}
    placeholder="Task title"
    className="border rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
  />
  <select value={priority} onChange={e => setPriority(e.target.value as Priority)} className="border rounded px-2 py-2">
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>
  </select>
  <select value={frequency} onChange={e => setFrequency(e.target.value as Frequency)} className="border rounded px-2 py-2">
    <option>None</option>
    <option>Daily</option>
    <option>Weekly</option>
    <option>Monthly</option>
  </select>
  {tasks.length > 0 && (
    <div className="flex flex-col gap-1">
      <label htmlFor="dependencies" className="font-medium text-gray-700 mb-1">
        Depends on
      </label>
      <select
        id="dependencies"
        value={dependency}
        onChange={e => setDependency(e.target.value)}
        className="border rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <option value="">None</option>
        {tasks.map(task => (
          <option key={task.id} value={task.id}>
            {task.title}
          </option>
        ))}
      </select>
    </div>
  )}
  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">Add</button>
</form>
  );
};

export default TaskForm;