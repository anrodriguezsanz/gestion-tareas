import { Space, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import type { Task } from '../../models/Task';
import { DETAILS_PATH, COMPLETED_STATUS, PENDING_STATUS } from '../../../../../core/constants';

interface ActionButtonsProps {
    record: Task;
    onToggleStatus: (id: number) => void;
    onDelete: (id: number) => void;
}

export const ActionButtons = ({ record, onToggleStatus, onDelete }: ActionButtonsProps) => {
    
    const handleDelete = () => {
        Modal.confirm({
            title: '¿Estás seguro de eliminar esta tarea?',
            content: `Se eliminará la tarea: "${record.title}"`,
            okText: 'Eliminar',
            cancelText: 'Cancelar',
            onOk: () => onDelete(record.id),
        });
    };

    return (
        <Space size='small'>
            <Button type='primary' onClick={() => onToggleStatus(record.id)}>
                Marcar como {record.status === PENDING_STATUS ? COMPLETED_STATUS.toLowerCase() : PENDING_STATUS.toLowerCase()}
            </Button>
            <Link to={`${DETAILS_PATH}${record.id}`}>
                <Button>Ver detalles</Button>
            </Link>
            <Button onClick={handleDelete}>
                Eliminar
            </Button>
        </Space>
    );
}