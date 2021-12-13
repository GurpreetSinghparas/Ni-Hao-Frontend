import { Routes, Route } from 'react-router-dom';

import { IndexPage } from '@components/asyncComponents';
import routerServices from '../services/_routerServices';

const DefaultLayout = () => {
  const renderRoutes = () => {
    const filteredRoute = routerServices['student'];

    return filteredRoute.map((route, key) => {
      return <Route key={key} path={route.path} element={<route.element />} />;
    });
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        {renderRoutes()}
      </Routes>
    </div>
  );
};

export default DefaultLayout;
