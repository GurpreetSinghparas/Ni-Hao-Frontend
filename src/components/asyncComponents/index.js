import { lazy } from 'react';

const IndexPage = lazy(() => import('@routes/indexPage'));
const SignUp = lazy(() => import('@routes/session/signup'));
const SignUpStudent = lazy(() => import('@routes/session/signup-student'));
const SignUpCompany = lazy(() => import('@routes/session/signup-company'));
const Login = lazy(() => import('@routes/session/login'));
const Welcome = lazy(() => import('@routes/welcome'));
const OurCousesWithoutLogin = lazy(() => import('@routes/ourCoursesWithoutLogin/index'));
const AboutUs = lazy(() => import('@routes/about-us'));
const Plan = lazy(() => import('@routes/planPage'));
const SiteMap = lazy(() => import('@routes/siteMap'));
const Faq2 = lazy(() => import('@routes/faq2'));
const BecomeTutor = lazy(() => import('@routes/becomeTutor'));
const BecomeAmbassador = lazy(() => import('@routes/becomeAmbassador'));
const Home = lazy(() => import('@routes/home'));
const TutorDetails = lazy(() => import('@routes/tutorDetails'));

//
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
  AboutUs,
  Plan,
  SiteMap,
  Faq2,
  BecomeTutor,
  BecomeAmbassador,
  Home,
  TutorDetails,
};
