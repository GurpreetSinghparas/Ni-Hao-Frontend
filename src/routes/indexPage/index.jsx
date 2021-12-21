import { Fragment } from 'react';
// common components imports
import Header from '@components/common/header';
import IndexFooter from '@components/common/indexFooter';

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

      <IndexFooter />
    </Fragment>
  );
};

export default IndexPage;
