import React, { useContext } from 'react';
import { TaskContext } from '../features/tasks/TaskContext';
import { Task } from '../features/tasks/types';

interface Props {
  task: Task;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  const { dispatch, tasks } = useContext(TaskContext)!;

  const canComplete = task.dependencies.every(depId =>
    tasks.find(t => t.id === depId)?.isDone
  );

  // Get dependency titles
  const dependencyTitles = task.dependencies
    .map(depId => tasks.find(t => t.id === depId)?.title)
    .filter(Boolean)
    .join(', ');

  return (
    <li className="border p-4 my-2 rounded-lg shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-50">
      <div>
        <span className={task.isDone ? 'line-through text-gray-400' : 'font-medium'}>
          {task.title} <span className="text-xs text-gray-500">({task.priority})</span>
        </span>
        {task.dependencies.length > 0 && (
          <div className="text-xs text-gray-500 mt-1">
            Depends on: {dependencyTitles}
          </div>
        )}
      </div>
      <div className="space-x-2 mt-2 sm:mt-0">
        <button
          onClick={() => dispatch({ type: 'TOGGLE_DONE', id: task.id })}
          disabled={task.isDone || !canComplete}
          className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded disabled:opacity-50 transition"
        >
          {task.isDone ? 'Undo' : 'Done'}
        </button>
        <button
          onClick={() => dispatch({ type: 'DELETE_TASK', id: task.id })}
          className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
