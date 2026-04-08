import { Card, Button, Typography } from 'antd';
import { useParams, Link } from 'react-router-dom';
import { HOME_PATH, TASK_NOT_FOUND } from '../../core/constants';
import { taskManagementStyles as styles } from './styles';
import { StatusTag } from '../modules/task-management/components/StatusTag/StatusTag';
import { useTaskOperations } from '../modules/task-management/hooks/useTaskOperations';

export const TaskDetailsPage = () => {

    const { Title, Paragraph } = Typography;
    const { id } = useParams();
    const { getTaskById } = useTaskOperations();
    const task = getTaskById(Number(id));

    if (!task) {
        return <p>{TASK_NOT_FOUND}</p>;
    }

    return (
        <div style={styles.pageWrapper}>
            <div style={styles.container}>
                <Card title={`Detalle de la tarea #${task.id}`}>
                    <Title level={2} style={styles.detailTitle}>{task.title}</Title>
                    <div style={styles.detailTagWrapper}>
                        <StatusTag status={task.status} />
                    </div>
                    <Title level={4} style={styles.detailSubtitle}>Descripción:</Title>
                    <Paragraph>{task.description || 'Sin descripción'}</Paragraph>
                </Card>
                <div style={styles.detailBackButton}>
                    <Link to={HOME_PATH}>
                        <Button type="primary" size="large">
                            Volver atrás
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}