import { Space, Button, App } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Task } from '../../models/Task';
import { DETAILS_PATH, PENDING_STATUS } from '../../../../../core/constants';

interface ActionButtonsProps {
    record: Task;
    onToggleStatus: (id: number) => void;
    onDelete: (id: number) => void;
}

export const ActionButtons = ({ record, onToggleStatus, onDelete }: ActionButtonsProps) => {
    
    const { modal } = App.useApp();
    const { t } = useTranslation();
    
    const handleDelete = () => {
        modal.confirm({
            title: t('tasks.delete.confirmTitle'),
            content: t('tasks.delete.confirmContent', { title: record.title }),
            okText: t('tasks.delete.okText'),
            cancelText: t('tasks.delete.cancelText'),
            onOk: () => onDelete(record.id),
        });
    };

    const statusText = record.status === PENDING_STATUS 
        ? t('tasks.status.completed').toLowerCase() 
        : t('tasks.status.pending').toLowerCase();

    return (
        <Space size='small'>
            <Button type='primary' onClick={() => onToggleStatus(record.id)}>
                {t('tasks.actions.markAs')} {statusText}
            </Button>
            <Link to={`${DETAILS_PATH}${record.id}`}>
                <Button>{t('tasks.actions.viewDetails')}</Button>
            </Link>
            <Button onClick={handleDelete}>
                {t('tasks.actions.delete')}
            </Button>
        </Space>
    );
}