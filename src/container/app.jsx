import { Routes, Route } from 'react-router-dom';
import { SignUp, Login } from '@components/asyncComponents';
import DefaultLayout from './defaultLayout';
// import Login from '../routes/session/login';

const App = () => {
  // Todo Token Check
  return (
    <Routes>
      <Route path="/*" element={<DefaultLayout />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
