import { Typography, Button } from 'antd';
import { TaskList } from '../modules/task-management/components/TaskList.tsx';
import { TaskFormModal } from '../modules/task-management/components/TaskFormModal.tsx';
import { useState } from 'react';

export const TaskManagementPage = () => {

    const { Title } = Typography;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <Title level={1} style={{ margin: '20px' }}>Lista de tareas</Title>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '20px' }}>
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