import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/_Layout';
import CreateEmployee from './pages/CreateEmployee';
import CurrentEmployees from './pages/CurrentEmployees';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import { useLayoutEffect } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        errorElement: <Error404 />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'create-employee',
            element: <CreateEmployee />,
          },
          {
            path: 'employees-list',
            element: <CurrentEmployees />,
          },
          {
            path: '*',
            element: <Error404 />,
          },
        ],
      },
    ],
  },
]);

export default function Router() {
  useLayoutEffect(() => {
    import('./styles/css/index.css');
  }, []);
  return <RouterProvider router={router} />;
}
