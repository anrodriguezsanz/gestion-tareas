import { useAtom, useAtomValue } from 'jotai';
import { Table, Tag, Button, Space } from 'antd';
import { tasksAtom, filterAtom } from '../utils/store';
import type { Task } from '../models/Task';
import { themeConfig } from '../../../../core/theme/theme'; // Ajusta la ruta a tu carpeta core
import { Link } from 'react-router-dom';

export const TaskList = () => {
  // Extraemos la lista de tareas del átomo 
  const [tasks, setTasks] = useAtom(tasksAtom);

  const filters = useAtomValue(filterAtom); // Traemos lo que el usuario busca

  // LÓGICA DE FILTRADO: Creamos una lista nueva "en el aire"
  const filteredTasks = tasks.filter(task => {
    const cumpleNombre = task.title.toLowerCase().includes(filters.search.toLowerCase());
    const cumpleEstado = filters.status === 'todas' || task.status === filters.status;
    
    return cumpleNombre && cumpleEstado; // Si cumple ambas, se queda
  });

  // Función para togglear el status de cada tarea
  const toggleTaskStatus = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: (task.status === 'pendiente' ? 'completada' : 'pendiente') as Task['status'],

        }
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }

  // Definimos las columnas de la tabla
  const columns = [
    { title: 'Título', dataIndex: 'title', key: 'title' },
    { title: 'Descripción', dataIndex: 'description', key: 'description' },
    {
      title: 'Estado', dataIndex: 'status', key: 'status', width: 120,
      // Este render es un truco para pintar "etiquetas" de colores según el texto
      render: (status: string) => {
        const color = status === 'completada' ? 'green' : 'volcano';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      }
    },
    {
      title: 'Acciones', dataIndex: 'actions', key: 'actions', width: 180,
      render: (_: any, record: Task) => (
        <Space size='small'>
          <Button
            type='primary'
            onClick={() => toggleTaskStatus(record.id)}>
            {record.status === 'pendiente' ? 'Completar' : 'Pendiente'}
          </Button>
          <Link to={`/task/${record.id}`}>
            <Button>
              Ver detalles
            </Button>
          </Link>
          <Button style={{
            backgroundColor: themeConfig.token.colorSecondary,
            color: themeConfig.token.colorSecondaryFont
          }}>
            Modificar
          </Button>

        </Space>
      ),
    }
  ];

  // Pintamos la tabla de Ant Design pasándole los datos y las columnas
  return (
    <Table dataSource={filteredTasks} columns={columns} rowKey="id" />
  )
};