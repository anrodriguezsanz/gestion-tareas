import { useAtom } from 'jotai';
import { Table, Tag } from 'antd';
import { tasksAtom } from '../utils/store';

export const TaskList = () => {
  // Extraemos la lista de tareas del átomo 
  const [tasks] = useAtom(tasksAtom);

  // Definimos las columnas de la tabla
  const columns = [
    { title: 'Título', dataIndex: 'title', key: 'title' },
    { title: 'Descripción', dataIndex: 'description', key: 'description' },
    { title: 'Estado', dataIndex: 'status', key: 'status',
      // Este render es un truco para pintar "etiquetas" de colores según el texto
      render: (status: string) => {
        const color = status === 'completada' ? 'green' : 'volcano';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      }
    },
    { title: '', description: '', key:'' }
  ];

  // Pintamos la tabla de Ant Design pasándole los datos y las columnas
  return <Table dataSource={tasks} columns={columns} rowKey="id" />;
};