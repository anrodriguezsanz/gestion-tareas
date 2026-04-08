import { useAtom, useAtomValue } from 'jotai';
import { tasksAtom, filterAtom } from '../utils/store';

export const useTaskFilters = () => {
    const tasks = useAtomValue(tasksAtom);
    const [filters, setFilters] = useAtom(filterAtom);

    // Filters tasks by name and status
    const filteredTasks = tasks.filter(task => {
        const matchesName = task.title.toLowerCase().includes(filters.search.toLowerCase());
        const matchesStatus = filters.status === 'todas' || task.status === filters.status;
        return matchesName && matchesStatus;
    });

    return {
        filters,
        setFilters,
        filteredTasks
    };
};
