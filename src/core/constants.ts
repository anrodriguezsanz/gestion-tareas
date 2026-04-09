// Constantes de status
import type { TFunction } from 'i18next';

export const getFilterStatusOptions = (t: TFunction) => [
    { value: 'todas', label: t('tasks.status.all') },
    { value: 'pendiente', label: t('tasks.status.pending') },
    { value: 'completada', label: t('tasks.status.completed') },
];

export const getStatusOptions = (t: TFunction) => [
    { value: 'pendiente', label: t('tasks.status.pending') },
    { value: 'completada', label: t('tasks.status.completed') },
];

export const STORAGE_KEY = 'tasks_local_db';

export const HOME_PATH ='/';
export const DETAILS_PATH = '/task/';

export const COMPLETED_STATUS = 'completada';
export const PENDING_STATUS = 'pendiente';