import { Routes, Route } from 'react-router-dom';
import {
  SignUp,
  Login,
  Welcome,
  SignUpStudent,
  SignUpCompany,
  AboutUs,
} from '@components/asyncComponents';
import DefaultLayout from './defaultLayout';

const App = () => {
  // Todo Token Check
  return (
    <Routes>
      <Route path="/*" element={<DefaultLayout />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup_student" element={<SignUpStudent />} />
      <Route path="/signup_company" element={<SignUpCompany />} />
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default App;
