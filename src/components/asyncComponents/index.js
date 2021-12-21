import { lazy } from 'react';

const IndexPage = lazy(() => import('@routes/indexPage'));
const OurCousesWithoutLogin = lazy(() => import('@routes/ourCoursesWithoutLogin/index'));
const SignUp = lazy(() => import('@routes/session/sign-up'));
const Login = lazy(() => import('@routes/session/login'));

const AsyncStudentDashboard = lazy(() => import('@routes/dashboard/studentDashboard'));
const AsyncLogin = lazy(() => import('@routes/session/login'));

export { IndexPage, OurCousesWithoutLogin, AsyncStudentDashboard, AsyncLogin, SignUp, Login };
