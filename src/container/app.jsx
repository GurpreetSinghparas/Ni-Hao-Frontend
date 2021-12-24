import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// async components imports
import {
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
} from '@components/asyncComponents';
import DefaultLayout from './defaultLayout';
import BrokerLayout from './brokerLayout';

const App = () => {
  const { pathname } = useLocation();
  // Todo Token Check
  useEffect(() => {
    const root = document.querySelector('#root');
    if (root !== null) {
      root.removeAttribute('class');
    }
  }, [pathname]);
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup_student" element={<SignUpStudent />} />
      <Route path="/signup_company" element={<SignUpCompany />} />
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/plan-page" element={<Plan />} />
      <Route path="/site_map" element={<SiteMap />} />
      <Route path="/faq_2" element={<Faq2 />} />
      <Route path="/become-tutor" element={<BecomeTutor />} />
      <Route path="/tutor-part/teacher_login" element={<div>Tutor-part/teacher_login</div>} />
      <Route path="/become-ambassador" element={<BecomeAmbassador />} />

      <Route path="/broker/*" element={<BrokerLayout />} />

      <Route path="/*" element={<DefaultLayout />} />
    </Routes>
  );
};

export default App;
