export type TaskStatus = 'pendiente' | 'Completada';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}