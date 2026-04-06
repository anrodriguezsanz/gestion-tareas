import { Modal, Form, Input, Select, Button } from 'antd';
import { useAtom } from 'jotai';
import { tasksAtom } from '../utils/store';
import type { Task } from '../models/Task';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const TaskFormModal = ({ isOpen, onClose }: Props) => {

    const [tasks, setTasks] = useAtom(tasksAtom);
    const [form] = Form.useForm();

    // Función que se ejecuta al pulsar el botón de guardar
    const handleFinish = (values: any) => {
        // Crea una nueva tarea con los datos del form
        const newTask: Task = {
            id: Date.now(), // Un truco rápido para generar un ID numérico único
            title: values.title,
            description: values.description,
            status: values.status,
        };

        // Añade la tarea a la lista de tareas que ya había
        setTasks([...tasks, newTask]);

        form.resetFields();
        onClose();

    }

    return (

        <Modal title="Nueva Tarea" open={isOpen} onCancel={onClose} footer={null}>
            <Form form={form} layout="vertical" onFinish={handleFinish}>

                <Form.Item name="title" label="Título" rules={[{ required: true, message: 'Por favor, escribe un título' }]}>
                    <Input placeholder="Escribe aquí tu tarea" />
                </Form.Item>

                <Form.Item name="description" label="Descripción">
                    <Input.TextArea rows={3} placeholder="Detalles de la tarea..." />
                </Form.Item>

                <Form.Item name="status" label="Estado" initialValue="pendiente">
                    <Select
                        options={[
                            { value: 'pendiente', label: 'Pendiente' },
                            { value: 'completada', label: 'Completada' }
                        ]}
                    />
                </Form.Item>

                <Form.Item style={{ textAlign: 'right', marginBottom: 0 }}>
                    <Button type="primary" htmlType="submit">
                        Guardar Tarea
                    </Button>
                </Form.Item>
            </Form>
        </Modal>

    )
}