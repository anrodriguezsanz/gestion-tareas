import { Button, Typography } from 'antd';
import { TaskList } from '../modules/task-management/components/TaskList/TaskList.tsx';
import { TaskFormModal } from '../modules/task-management/components/FormModal/TaskFormModal.tsx';
import { FilterBar } from '../shared/components/FilterBar/FilterBar.tsx';
import { useTaskOperations } from '../modules/task-management/hooks/useTaskOperations.ts';
import { useTaskFilters } from '../modules/task-management/hooks/useTaskFilters.ts';
import type { FilterStatus } from '../modules/task-management/utils/store.ts';
import { FILTER_STATUS_OPTIONS } from '../../core/constants';
import { useModal } from '../shared/hooks/useModal.ts';
import { taskManagementStyles as styles } from './styles';

export const TaskManagementPage = () => {

    const { Title } = Typography;

    const { toggleTaskStatus, addTask, deleteTask } = useTaskOperations();
    const { filteredTasks, filters, setFilters } = useTaskFilters();
    const { isModalOpen, openModal, closeModal } = useModal();

    return (
        <div style={styles.pageWrapper}>
            <div style={styles.container}>
                <Title level={1} style={styles.title}>Lista de tareas</Title>
                <div style={styles.toolbar}>
                    <FilterBar 
                    searchValue={filters.search}
                    selectValue={filters.status}
                    selectOptions={FILTER_STATUS_OPTIONS}
                    onSearchChange={(value) => setFilters({...filters, search:value})}
                    onSelectChange={(value) => setFilters({...filters, status: value as FilterStatus})}
                    />
                    <Button type="primary" size="large" onClick={openModal}>
                        Añadir tarea
                    </Button>
                </div>
                <TaskList
                    tasks={filteredTasks}
                    onToggleStatus={toggleTaskStatus}
                    onDelete={deleteTask}
                />
                <TaskFormModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onSubmit={addTask}
                />
            </div>
        </div>
    );
};