import { Typography, Button } from 'antd';
import { TaskList } from '../modules/task-management/components/TaskList.tsx';
import { TaskFormModal } from '../modules/task-management/components/TaskFormModal.tsx';
import { useState } from 'react';
import { themeConfig } from '../../core/theme/theme'; // Ajusta la ruta a tu carpeta core
import { FilterBar } from '../modules/task-management/components/FilterBar.tsx';


export const TaskManagementPage = () => {

    const { Title } = Typography;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <Title level={1} style={{ margin: '60px', textAlign: 'center', fontFamily: themeConfig.token.colorSecondary }}>Lista de tareas</Title>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px' }}>
                <FilterBar />
                <Button type="primary" size="large" onClick={() => setIsModalOpen(true)}>
                    Añadir Tarea
                </Button>
            </div>
            <TaskList />
            <TaskFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};