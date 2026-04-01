import { atom } from 'jotai';
import type { Task } from '../models/Task';
import tasksData from '../services/tasks.json';

export const tasksAtom = atom<Task[]>(tasksData as Task[]);