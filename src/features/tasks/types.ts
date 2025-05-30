export type Priority = 'Low' | 'Medium' | 'High';
export type Frequency = 'None' | 'Daily' | 'Weekly' | 'Monthly';

export interface Task {
  id: string;
  title: string;
  isDone: boolean;
  priority: Priority;
  frequency: Frequency;
  dependencies: string[];
}
