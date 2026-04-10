import { Modal, Form, Input, Select, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import type { Task, TaskStatus } from '../../../../shared/models/Task';
import { getStatusOptions } from '../../constants/constants.tasks';
import { TaskFormModalStyles as styles } from './styles';

interface TaskFormValues {
    title: string;
    description: string;
    status: TaskStatus;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (taskData: Omit<Task, 'id'>) => void;
}

export const TaskFormModal = ({ isOpen, onClose, onSubmit }: ModalProps) => {

    const [form] = Form.useForm();
    const { t } = useTranslation();

    // Función que se ejecuta al pulsar el botón de guardar
    const handleFinish = (values: TaskFormValues) => {
        const taskData: Omit<Task, 'id'> = {
            title: values.title,
            description: values.description,
            status: values.status,
        };
        
        form.resetFields();
        onSubmit(taskData);
        onClose();
    }

    return (
        <Modal title={t('tasks.form.title')} open={isOpen} onCancel={onClose} footer={null}>
            <Form form={form} layout="vertical" onFinish={handleFinish}>

                <Form.Item 
                    name="title" 
                    label={t('tasks.form.fields.title')} 
                    rules={[{ required: true, message: t('tasks.form.fields.titleRequired') }]}
                >
                    <Input placeholder={t('tasks.form.fields.titlePlaceholder')} />
                </Form.Item>

                <Form.Item name="description" label={t('tasks.form.fields.description')}>
                    <Input.TextArea rows={3} placeholder={t('tasks.form.fields.descriptionPlaceholder')} />
                </Form.Item>

                <Form.Item name="status" label={t('tasks.form.fields.status')} initialValue="pendiente">
                    <Select
                        options={getStatusOptions(t)}
                    />
                </Form.Item>

                <Form.Item style={styles.submitButton}>
                    <Button type="primary" htmlType="submit">
                        {t('tasks.form.submit')}
                    </Button>
                </Form.Item>
            </Form>
        </Modal>

    )
}