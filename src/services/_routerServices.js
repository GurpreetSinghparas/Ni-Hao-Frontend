import { AsyncStudentDashboard } from '@components/asyncComponents';

const routerServices = {
  student: [
    {
      path: '/dashboard',
      element: AsyncStudentDashboard,
    },
  ],
};

export default routerServices;
