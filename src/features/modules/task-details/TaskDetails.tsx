import { Card, Button, Typography } from 'antd';

import { useParams, Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { HOME_PATH } from '../../shared/constants/constants.ts';

import { taskManagementStyles as styles } from '../../shared/styles/tasks.styles.ts';

import { StatusTag } from '../../shared/components/StatusTag/StatusTag.tsx';

import { Navbar } from '../../shared/components/Navbar/Navbar.tsx';

import { useTaskOperations } from '../task-management/hooks/useTaskOperations.ts';



export const TaskDetails = () => {



    const { Title, Paragraph } = Typography;

    const { t } = useTranslation();

    const { id } = useParams();

    const { getTaskById } = useTaskOperations();

    const task = getTaskById(Number(id));



    if (!task) {

        return <p>{t('errors.taskNotFound')}</p>;

    }



    return (

        <>

            <Navbar />

            <div style={styles.pageWrapper}>

                <div style={styles.container}>

                    <Card title={`${t('tasks.details.title')} #${task.id}`}>

                        <Title level={2} style={styles.detailTitle}>{task.title}</Title>

                        <div style={styles.detailTagWrapper}>

                            <StatusTag status={task.status} />

                        </div>

                        <Title level={4} style={styles.detailSubtitle}>{t('tasks.details.descriptionLabel')}</Title>

                        <Paragraph>{task.description || t('tasks.details.noDescription')}</Paragraph>

                    </Card>

                    <div style={styles.detailBackButton}>

                        <Link to={HOME_PATH}>

                            <Button type="primary" size="large">

                                {t('tasks.actions.back')}

                            </Button>

                        </Link>

                    </div>

                </div>

            </div>

        </>

    )

}