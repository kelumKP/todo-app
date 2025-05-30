import React, { createContext, useReducer, ReactNode } from 'react';
import { Task } from './types';
import { taskReducer } from './taskReducer';

// ----------- Context Types -----------
interface TaskContextType 
{
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}

// ----------- Actions -----------
export type TaskAction =
  | { type: 'ADD_TASK'; task: Task }
  | { type: 'DELETE_TASK'; id: string }
  | { type: 'UPDATE_TASK'; task: Task }
  | { type: 'TOGGLE_DONE'; id: string };

// ----------- Initial State -----------
const initialTasks: Task[] = [];

// ----------- Context -----------
export const TaskContext = createContext<TaskContextType | undefined>(undefined);

// ----------- Provider -----------
interface Props {
  children: ReactNode;
}

export const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
