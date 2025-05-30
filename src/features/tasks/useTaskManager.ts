import { useContext } from 'react';
import { TaskContext } from './TaskContext';

export const useTaskManager = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('Must use within TaskProvider');
  return context;
};