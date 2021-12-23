import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import { IndexPage, OurCousesWithoutLogin, Home, TutorDetails } from '@components/asyncComponents';
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
        <Route path="/home" element={<Home />} />
        <Route path="/tutor-details" element={<TutorDetails />} />
        {renderRoutes()}
      </Routes>
    </Fragment>
  );
};

export default DefaultLayout;
