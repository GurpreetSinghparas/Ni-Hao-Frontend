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
} from '@components/asyncComponents';
import DefaultLayout from './defaultLayout';

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
      <Route path="/*" element={<DefaultLayout />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup_student" element={<SignUpStudent />} />
      <Route path="/signup_company" element={<SignUpCompany />} />
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/plan-page" element={<Plan />} />
    </Routes>
  );
};

export default App;
