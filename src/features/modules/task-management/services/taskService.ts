import tasksData from './tasks.json';
import type { Task } from '../../../shared/models/Task';
import { STORAGE_KEY } from '../../../shared/constants/constants';

export const taskService = {
  
  // If there are tasks saved in LocalStorage, returns them. If not, loads the initial JSON
  getTasks: (): Task[] => {
    const saved = localStorage.getItem(STORAGE_KEY);
    
    if (saved) {
      return JSON.parse(saved);
    } else {
      const initialTasks = tasksData as Task[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialTasks));
      return initialTasks;
    }
  },

  // Saves the tasks in LocalStorage (overwrites)
  saveTasks: (tasks: Task[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  },

  // Generates a unique ID for a new task
  generateId: (existingTasks: Task[]): number => {
    if (existingTasks.length === 0) return 1;
    const maxId = Math.max(...existingTasks.map(task => task.id));
    return maxId + 1;
  }
};