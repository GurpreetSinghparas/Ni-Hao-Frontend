import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import { IndexPage, OurCousesWithoutLogin } from '@components/asyncComponents';
import routerServices from '../services/_routerServices';

const DefaultLayout = () => {
  const renderRoutes = () => {
    const filteredRoute = routerServices['student'];

    return filteredRoute.map((route, key) => {
      return <Route key={key} path={route.path} element={<route.element />} />;
    });
  };

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/our-courses" element={<OurCousesWithoutLogin />} />
        {renderRoutes()}
      </Routes>
    </Fragment>
  );
};

export default DefaultLayout;
