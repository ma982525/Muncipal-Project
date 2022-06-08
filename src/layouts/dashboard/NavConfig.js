// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} sx={{':hover':{color:'primary'}}}/>;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: getIcon('eva:shopping-bag-fill'),
  // },
  {
    title: 'Issues',
    path: '/dashboard/issues/all',
    icon: getIcon('eva:alert-triangle-fill'),
  },
  {
    title: 'Past Issues',
    path: '/dashboard/issues/past',
    icon: getIcon('eva:file-text-fill'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },
  {
    title: 'Sub-Admins',
    path: '/dashboard/subAdmins',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Add Sub-Admin',
    path: '/register/subAdmin',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Area Details',
    path: '/dashboard/area',
    icon: getIcon('majesticons:map-marker-area'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
