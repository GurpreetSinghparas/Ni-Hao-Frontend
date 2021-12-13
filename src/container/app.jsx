// import { StudentDashboard } from '@components/asyncComponents';

import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './defaultLayout';

const App = () => {
  // Todo Token Check
  return (
    <Routes>
      <Route path="/*" element={<DefaultLayout />} />
    </Routes>
  );
};

export default App;
