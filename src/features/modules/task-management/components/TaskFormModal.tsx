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

    // 3. Esta función se ejecuta solo cuando el usuario pulsa "Guardar" y no hay errores
    const handleFinish = (values: any) => {
        // Creamos la nueva tarea con los datos del formulario
        const newTask: Task = {
            id: Date.now(), // Un truco rápido para generar un ID numérico único
            title: values.title,
            description: values.description,
            status: values.status,
        };

        // Actualizamos Jotai: Cogemos las tareas que ya había (...tasks) y le añadimos la nueva
        setTasks([...tasks, newTask]);

        form.resetFields(); // Limpiamos las cajitas de texto
        onClose(); // Cerramos la ventana

    }

    return {

        <Modal>
        </Modal>

    }