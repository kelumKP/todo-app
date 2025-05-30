import { Task } from './types';

type Action = 
  | { type: 'ADD_TASK'; task: Task }
  | { type: 'DELETE_TASK'; id: string }
  | { type: 'UPDATE_TASK'; task: Task }
  | { type: 'TOGGLE_DONE'; id: string };

export const taskReducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case 'ADD_TASK': return [...state, action.task];
    case 'DELETE_TASK': return state.filter(t => t.id !== action.id);
    case 'UPDATE_TASK': return state.map(t => t.id === action.task.id ? action.task : t);
 case 'TOGGLE_DONE':
  const task = state.find(t => t.id === action.id);
  if (task?.dependencies?.some(dep => !state.find(t => t.id === dep)?.isDone)) {
    alert('Cannot complete task before dependencies are done!');
    return state;
  }
  return state.map(t => t.id === action.id ? { ...t, isDone: !t.isDone } : t);
    default: return state;
  }
};