import { Task } from '../features/tasks/types';

export const sortTasksByPriority = (tasks: Task[]): Task[] => {
  const priorityOrder: Record<string, number> = {
    High: 1,
    Medium: 2,
    Low: 3,
  };
  return [...tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
};

export const sortTasksByStatus = (tasks: Task[]): Task[] => {
  return [...tasks].sort((a, b) => Number(a.isDone) - Number(b.isDone));
};
