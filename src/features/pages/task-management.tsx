import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { TaskList } from '../modules/task-management/components/TaskList/TaskList.tsx';
import { TaskFormModal } from '../modules/task-management/components/FormModal/TaskFormModal.tsx';
import { FilterBar } from '../shared/components/FilterBar/FilterBar.tsx';
import { Navbar } from '../shared/components/Navbar/Navbar.tsx';
import { useTaskOperations } from '../modules/task-management/hooks/useTaskOperations.ts';
import { useTaskFilters } from '../modules/task-management/hooks/useTaskFilters.ts';
import type { FilterStatus } from '../modules/task-management/utils/store.ts';
import { getFilterStatusOptions } from '../../core/constants';
import { useModal } from '../shared/hooks/useModal.ts';
import { taskManagementStyles as styles } from './styles';

export const TaskManagementPage = () => {

    const { t } = useTranslation(); // Translation hook

    const { toggleTaskStatus, addTask, deleteTask } = useTaskOperations();
    const { filteredTasks, filters, setFilters } = useTaskFilters();
    const { isModalOpen, openModal, closeModal } = useModal();

    return (
        <>
            <Navbar />
            <div style={styles.pageWrapper}>
                <div style={styles.container}>
                    <div style={styles.toolbar}>
                        <FilterBar 
                            searchValue={filters.search}
                            selectValue={filters.status}
                            selectOptions={getFilterStatusOptions(t)}
                            onSearchChange={(value) => setFilters({...filters, search:value})}
                            onSelectChange={(value) => setFilters({...filters, status: value as FilterStatus})}
                        />
                        <Button type="primary" size="large" onClick={openModal}>
                            {t('tasks.list.addButton')}
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
        </>
    );
};