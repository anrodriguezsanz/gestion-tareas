import type { Task } from '../../../shared/models/Task';
import { atom } from 'jotai';
import { taskService } from '../services/TaskService';

export type FilterStatus = 'todas' | 'pendiente' | 'completada';

export interface Filters {
  search: string;
  status: FilterStatus;
}

export const tasksAtom = atom<Task[]>(taskService.getTasks());

export const filterAtom = atom<Filters>({
  search: '',
  status: 'todas'
});