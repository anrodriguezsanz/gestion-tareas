export type TaskStatusFilter = 'todas' | 'pendiente' | 'completada';

export interface TaskFilters {
  search: string;
  status: TaskStatusFilter;
}