import { lazy } from 'react';

// main page
const Broker = lazy(() => import('@routes/broker'));

//sub pages
const Dashboard = lazy(() => import('@routes/broker/subPages/Dashboard'));
const SurveyManagement = lazy(() => import('@routes/broker/subPages/SurveyManagement'));
const AdminManagement = lazy(() => import('@routes/broker/subPages/AdminManagement'));
const Feedbacks = lazy(() => import('@routes/broker/subPages/Feedbacks'));
const Support = lazy(() => import('@routes/broker/subPages/Support'));
const Settings = lazy(() => import('@routes/broker/subPages/Settings'));
const ContactUs = lazy(() => import('@routes/broker/subPages/ContactUs'));
const Logout = lazy(() => import('@routes/broker/subPages/Logout'));


// sub pages inside Broker Dashboard + Survey management
const Courses = lazy(() => import('@routes/broker/subPages/common/Courses'));
const BrokersPage = lazy(() => import('@routes/broker/subPages/common/BrokersPage'));
const Students = lazy(() => import('@routes/broker/subPages/common/Students'));
const Teachers = lazy(() => import('@routes/broker/subPages/common/Teachers'));
const Admins = lazy(() => import('@routes/broker/subPages/common/Admins'));
const Campaigns = lazy(() => import('@routes/broker/subPages/common/Campaigns'));
const WebsiteSurvey = lazy(() => import('@routes/broker/subPages/common/WebsiteSurvey'));
const TeacherSurvey = lazy(() => import('@routes/broker/subPages/common/TeacherSurvey'));
const StudentsSurvey = lazy(() => import('@routes/broker/subPages/common/StudentsSurvey'));
const NewSurvey = lazy(() => import('@routes/broker/subPages/common/NewSurvey'));

// sub pages only for broker dashboard
const SchoolsCompany = lazy(() => import('@routes/broker/subPages/brokerDashboard/SchoolsCompany'));
const AboutService = lazy(() => import('@routes/broker/subPages/brokerDashboard/AboutService'));
const Visitors = lazy(() => import('@routes/broker/subPages/brokerDashboard/Visitors'));

// sub pages inside Admin Management
const CreateNewAdmin = lazy(() => import('@routes/broker/subPages/adminManagement/CreateNewAdmin'));
const Schools = lazy(() => import('@routes/broker/subPages/adminManagement/Schools'));
const Companies = lazy(() => import('@routes/broker/subPages/adminManagement/Companies'));
const Subscriptions = lazy(() => import('@routes/broker/subPages/adminManagement/Subscriptions'));
const Kids = lazy(() => import('@routes/broker/subPages/adminManagement/Kids'));
const EmailsAndNotifications = lazy(() => import('@routes/broker/subPages/adminManagement/EmailsAndNotifications'));
const Prices = lazy(() => import('@routes/broker/subPages/adminManagement/Prices'));
const SingleTeacherPage = lazy(() => import('@routes/broker/subPages/adminManagement/SingleTeacherPage'));
const SingleStudentPage = lazy(() => import('@routes/broker/subPages/adminManagement/SingleStudentPage'));
const SingleBrokerPage = lazy(() => import('@routes/broker/subPages/adminManagement/SingleBrokerPage'));

export {
  Broker,

  // universal pages - common
  Dashboard,
  SurveyManagement,
  AdminManagement,
  Feedbacks,
  Support,
  Settings,
  ContactUs,
  Logout,

  // dashboard
  Courses,
  BrokersPage,
  Students,
  Teachers,
  Admins,
  Campaigns,
  WebsiteSurvey,
  TeacherSurvey,
  StudentsSurvey,
  NewSurvey,
  SchoolsCompany,
  AboutService,
  Visitors,

  // admin management
  CreateNewAdmin,
  Schools,
  Companies,
  Subscriptions,
  Kids,
  EmailsAndNotifications,
  Prices,
  SingleTeacherPage,
  SingleStudentPage,
  SingleBrokerPage,
}
