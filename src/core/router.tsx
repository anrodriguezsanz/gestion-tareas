import { createBrowserRouter } from 'react-router-dom';
import { TaskManagementPage } from '../features/pages/task-management';
import { TaskDetailsPage } from '../features/pages/task-details';

export const router = createBrowserRouter([
  {
    path: '/', // Cuando el usuario entre a la raíz de la web...
    element: <TaskManagementPage /> // ...enséñale esta página
  },
  {
  path: '/task/:id', // El ":id" es un comodín (parámetro dinámico)
  element: <TaskDetailsPage /> 
}
]);