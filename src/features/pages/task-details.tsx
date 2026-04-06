import { Card, Button, Tag, Typography } from 'antd';
import { useAtomValue } from 'jotai';
import { tasksAtom } from '../modules/task-management/utils/store';
import { useParams, Link } from 'react-router-dom';


export const TaskDetailsPage = () => {

    const { Title, Paragraph } = Typography;
    const { id } = useParams();
    const tasks = useAtomValue(tasksAtom);
    const task = tasks.find(t => t.id === Number(id));

    if (!task) {
        return <p>No se ha podido encontrar la tarea</p>;
    }

    return (
        <>
            <Card title={`Detalle de la tarea #${task.id}`}>
                <Title level={2}>{task.title}</Title>
                <Tag color={task.status === 'completada' ? 'green' : 'volcano'} >
                    {task.status.toUpperCase()}
                </Tag>
                <Title level={4}>Descripción:</Title>
                <Paragraph>{task.description || 'Sin descripción'}</Paragraph>
            </Card>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '20px' }}>
                <Link to={'/'}>
                    <Button type="primary" size="large">
                        Volver atrás
                    </Button>
                </Link>
            </div>
        </>
    )
}