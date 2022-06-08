import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import AllIssues from './pages/AllIssues';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
// import Products from './pages/Products';
import AdminDashboard from './pages/Dashboard/DashboardApp';
import RegisterSubAdmin from './pages/RegisterSubAdmin';
import PastIssues from './pages/PastIssues';
import AreaDetails from './pages/AreaDetails';
import SubAdminDashboard from './pages/Dashboard/SubAdminDashboard';
import UserDashboard from './pages/Dashboard/UserDashboard';

// ----------------------------------------------------------------------

export default function Router() {
  const dash="admin";
  let dashboard;
  if(dash==="admin"){
    dashboard = <AdminDashboard/> 
  }
  else if(dash==="subadmin"){
    dashboard= <SubAdminDashboard/>
  }
  else{
    dashboard= <UserDashboard/>
  }
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: dashboard },
        { path: 'subAdmins', element: <User /> },
        // { path: 'products', element: <Products /> },
        { path: 'issues/all', element: <AllIssues /> },        
        { path: 'issues/past', element: <PastIssues /> },     
        { path: 'area', element: <AreaDetails /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },        
        { path: 'register/subAdmin', element: <RegisterSubAdmin /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
