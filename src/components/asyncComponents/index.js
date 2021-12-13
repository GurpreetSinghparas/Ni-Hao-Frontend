import { lazy } from 'react';

const IndexPage = lazy(() => import('@routes/indexPage'));

const AsyncStudentDashboard = lazy(() => import('@routes/dashboard/studentDashboard'));

const AsyncLogin = lazy(() => import('@routes/session/login'));

export { IndexPage, AsyncStudentDashboard, AsyncLogin };
