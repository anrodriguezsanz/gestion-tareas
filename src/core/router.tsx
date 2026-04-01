import { createBrowserRouter } from 'react-router-dom';
import { TaskManagementPage } from '../features/pages/task-management';

export const router = createBrowserRouter([
  {
    path: '/', // Cuando el usuario entre a la raíz de la web...
    element: <TaskManagementPage /> // ...enséñale esta página
  }
]);