import type { Task } from '../models/Task';
import { atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai';

export const tasksAtom = atomWithStorage<Task[]>('tasks-data', []);

export const filterAtom = atom({
  search: '',
  status: 'todas'
});