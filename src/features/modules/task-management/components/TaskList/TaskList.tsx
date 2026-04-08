import { Table } from 'antd';
import type { Task } from '../../models/Task';
import { StatusTag } from '../StatusTag/StatusTag';
import { ActionButtons } from '../ActionButtons/ActionButtons';

interface TaskListProps {
  tasks: Task[];
  onToggleStatus: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TaskList = ({ tasks, onToggleStatus, onDelete }: TaskListProps) => {

  // Define table columns
  const columns = [
    { title: 'Título', dataIndex: 'title', key: 'title' },
    { title: 'Descripción', dataIndex: 'description', key: 'description' },
    {
      title: 'Estado', dataIndex: 'status', key: 'status',
      render: (status: string) => <StatusTag status={status} />
    },
    {
      title: 'Acciones', key: 'actions',
      render: (_: unknown, record: Task) => <ActionButtons record={record} onToggleStatus={onToggleStatus} onDelete={onDelete} />
    }
  ];

  return <Table dataSource={tasks} columns={columns} rowKey="id" />;
};