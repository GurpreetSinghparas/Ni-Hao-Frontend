import { Routes, Route } from 'react-router-dom';

import { IndexPage } from '@components/asyncComponents';
import routerServices from '../services/_routerServices';
import { Fragment } from 'react';
import OurCousesWithoutLogin from '../routes/ourCoursesWithoutLogin';

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
