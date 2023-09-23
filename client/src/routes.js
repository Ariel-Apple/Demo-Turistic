import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pagesAdmin/BlogPage';
import UserPage from './pagesAdmin/UserPage';
import LoginPage from './pagesAdmin/LoginPage';
import Page404 from './pagesAdmin/Page404';
import ProductsPage from './pagesAdmin/ProductsPage';
import DashboardAppPage from './pagesAdmin/DashboardAppPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true }, 
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
         /* { element: <Navigate to="/dashboard/app" />, index: true },  */
   /*      { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },  */
      ],
    },
    {
     /*  path: '*',
      element: <Navigate to="/404" replace />, */
    },
  ]);

  return routes;
}
