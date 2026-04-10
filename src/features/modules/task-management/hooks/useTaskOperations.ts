import { useAtom } from 'jotai';
import { tasksAtom } from '../utils/store';
import { taskService } from '../services/TaskService';
import type { Task } from '../../../shared/models/Task';
import { COMPLETED_STATUS, PENDING_STATUS } from '../../../shared/constants/constants';

export const useTaskOperations = () => {

    const [tasks, setTasks] = useAtom(tasksAtom);

    // Update tasks on state and persist to localStorage
    const updateAndPersist = (newTasks: Task[]) => {
        setTasks(newTasks); 
        taskService.saveTasks(newTasks);
    };

    // Toggles a task status between pending and completed
    const toggleTaskStatus = (id: number) => {
        const updatedTasks = tasks.map((task) => 
            task.id === id 
                ? { ...task, status: (task.status === PENDING_STATUS ? COMPLETED_STATUS : PENDING_STATUS) as Task['status'] } 
                : task
        );
        updateAndPersist(updatedTasks);
    };
    
    // Find a task by ID
    const getTaskById = (id: number): Task | undefined => {
        return tasks.find(task => task.id === id);
    };
    
    // Adds a new task
    const addTask = (taskData: Omit<Task, 'id'>) => {
        const newTask: Task = {
            ...taskData,
            id: taskService.generateId(tasks)
        };
        const updatedTasks = [...tasks, newTask];
        updateAndPersist(updatedTasks);
    };

    // Deletes a task
    const deleteTask = (id: number) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        updateAndPersist(updatedTasks);
    };

    return {
        toggleTaskStatus,
        deleteTask,
        addTask,
        getTaskById
    };
};