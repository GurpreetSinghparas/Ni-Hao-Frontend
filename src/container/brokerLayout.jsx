import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Broker } from '@components/brokerComponents';
import {
  Dashboard,
  SurveyManagement,
  AdminManagement,
  Feedbacks,
  Support,
  Settings,
  ContactUs,
  Logout,

  Courses,
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
} from '@components/brokerComponents';

const BrokerLayout = () => {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Broker />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/survey-management" element={<SurveyManagement />} />
        <Route path="/admin-management" element={<AdminManagement />} />

        {/* universal routes */}
        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/support" element={<Support />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/website-survey" element={<WebsiteSurvey />} />

        <Route path="/teacher-survey" element={<TeacherSurvey />} />
        <Route path="/students-survey" element={<StudentsSurvey />} />
        <Route path="/new-survey" element={<NewSurvey />} />
        <Route path="/schools-company" element={<SchoolsCompany />} />
        <Route path="/about-service" element={<AboutService />} />
        <Route path="/visitors" element={<Visitors />} />


        {/* admin management */}
        <Route path="/create-new-admin" element={<CreateNewAdmin />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/emails-and-notifications" element={<EmailsAndNotifications />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/single-teacher-page" element={<SingleTeacherPage />} />
        <Route path="/single-student-page" element={<SingleStudentPage />} />
        <Route path="/single-broker-page" element={<SingleBrokerPage />} />


      </Routes>
    </Fragment>
  );
};

export default BrokerLayout;
