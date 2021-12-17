import { Fragment } from 'react';
// common components imports
import Header from '@components/common/header';
import Footer from '@components/common/footer';

// components imports
import PrivateTutor from './privateTutorSection';
import ChineseImmersion from './chineseImmersionSection';
import DoMore from './doMoreSection/index';
import Plans from './plansSection/index';
import Organization from './organisationSection';

const IndexPage = () => {
  return (
    <Fragment>
      <Header />

      {/* <!-- PrivateTutor Banner Section --> */}
      <PrivateTutor />

      {/* <!-- Chinese Section --> */}
      <ChineseImmersion />

      {/* <!-- Banner Section --> */}
      <DoMore />

      {/* <!-- Plans sections --> */}
      <Plans />

      {/* <!-- Organisation section --> */}
      <Organization />

      <Footer />
    </Fragment>
  );
};

export default IndexPage;
