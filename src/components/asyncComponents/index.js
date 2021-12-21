import { lazy } from 'react';

const IndexPage = lazy(() => import('@routes/indexPage'));
const SignUp = lazy(() => import('@routes/session/signup'));
const SignUpStudent = lazy(() => import('@routes/session/signup-student'));
const SignUpCompany = lazy(() => import('@routes/session/signup-company'));
const Login = lazy(() => import('@routes/session/login'));
const Welcome = lazy(() => import('@routes/welcome'));
const OurCousesWithoutLogin = lazy(() => import('@routes/ourCoursesWithoutLogin/index'));

const AsyncStudentDashboard = lazy(() => import('@routes/dashboard/studentDashboard'));
const AsyncLogin = lazy(() => import('@routes/session/login'));

export {
  IndexPage,
  OurCousesWithoutLogin,
  AsyncStudentDashboard,
  AsyncLogin,
  SignUp,
  Login,
  Welcome,
  SignUpStudent,
  SignUpCompany,
};
