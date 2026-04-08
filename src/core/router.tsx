import { createBrowserRouter } from 'react-router-dom';
import { TaskManagementPage } from '../features/pages/task-management';
import { TaskDetailsPage } from '../features/pages/task-details';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TaskManagementPage /> 
  },
  {
  path: '/task/:id', 
  element: <TaskDetailsPage /> 
}
]);