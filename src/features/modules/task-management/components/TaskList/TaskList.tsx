import { Table } from 'antd';
import { useTranslation } from 'react-i18next';
import type { Task } from '../../models/Task';
import { StatusTag } from '../StatusTag/StatusTag';
import { ActionButtons } from '../ActionButtons/ActionButtons';

interface TaskListProps {
  tasks: Task[];
  onToggleStatus: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TaskList = ({ tasks, onToggleStatus, onDelete }: TaskListProps) => {

  const { t } = useTranslation();

  // Define table columns
  const columns = [
    { title: t('tasks.table.columns.title'), dataIndex: 'title', key: 'title' },
    { title: t('tasks.table.columns.description'), dataIndex: 'description', key: 'description' },
    {
      title: t('tasks.table.columns.status'), dataIndex: 'status', key: 'status',
      render: (status: string) => <StatusTag status={status} />
    },
    {
      title: t('tasks.table.columns.actions'), key: 'actions',
      render: (_: unknown, record: Task) => <ActionButtons record={record} onToggleStatus={onToggleStatus} onDelete={onDelete} />
    }
  ];

  return <Table dataSource={tasks} columns={columns} rowKey="id"/>;
};