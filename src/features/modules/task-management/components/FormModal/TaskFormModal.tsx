import { Modal, Form, Input, Select, Button } from 'antd';
import type { Task, TaskStatus } from '../../models/Task';
import { STATUS_OPTIONS } from '../../../../../core/constants';
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
        <Modal title="Nueva tarea" open={isOpen} onCancel={onClose} footer={null}>
            <Form form={form} layout="vertical" onFinish={handleFinish}>

                <Form.Item name="title" label="Título" rules={[{ required: true, message: 'Por favor, escribe un título' }]}>
                    <Input placeholder="Escribe aquí tu tarea" />
                </Form.Item>

                <Form.Item name="description" label="Descripción">
                    <Input.TextArea rows={3} placeholder="Detalles de la tarea..." />
                </Form.Item>

                <Form.Item name="status" label="Estado" initialValue="pendiente">
                    <Select
                        options={STATUS_OPTIONS}
                    />
                </Form.Item>

                <Form.Item style={styles.submitButton}>
                    <Button type="primary" htmlType="submit">
                        Guardar Tarea
                    </Button>
                </Form.Item>
            </Form>
        </Modal>

    )
}