
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