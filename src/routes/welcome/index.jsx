import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import CommonForm from '@components/common/commonForm';

const WelcomeForm = () => (
  <Fragment>
    <Link
      to="/signup"
      role="button"
      class="btn btn-primary fw_bold f_16 signup_blue_btn w-100 mb-3"
      type="button"
    >
      Sign Up
    </Link>
    <Link
      to="/signup_student"
      role="button"
      class="btn btn-primary fw_bold f_16 signup_white_btn w-100 text_blue mb-3"
      type="button"
    >
      Sign Up As Student
    </Link>
    <Link
      to="/signup_company"
      role="button"
      class="btn btn-primary fw_bold f_16 signup_white_btn w-100 text_blue mb-4"
      type="button"
    >
      Sign Up As An Employee
    </Link>
    <div className="or_lines position-relative">
      <p className="f_14 text_blue2 text-center mb-0">Or</p>
    </div>
  </Fragment>
);

const Welcome = () => {
  return <CommonForm form={<WelcomeForm />} heading="Sign Up. Speak Out. Make Your Future With" />;
};

export default Welcome;
