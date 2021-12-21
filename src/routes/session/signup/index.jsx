import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import CommonForm from '@components/common/commonForm';
import Input from '@commonElements/inputField';

// svg imports
import EyeIcon from '@svg/eye';

const SingnUpForm = () => (
  <Fragment>
    <form className="custom_form">
      <div className="form-floating mb-4  ">
        <Input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Username/Email</label>
      </div>
      <div className="form-floating mb-4">
        <Input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <span className="eye_icon">
          <EyeIcon />
        </span>
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="form-floating mb-4">
        <Input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <span className="eye_icon">
          <EyeIcon />
        </span>
        <label htmlFor="floatingPassword">Confirm Password</label>
      </div>
      <div className="form-check d-flex">
        <Input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label
          className="form-check-label text_gray2 fw_regular mb-3 ms-3"
          htmlFor="flexCheckDefault"
        >
          By continue, I confirm that I have read and agree to the{' '}
          <Link to="/terms&conditions"> Terms and Conditions </Link> and{' '}
          <Link to="/privacy-policy"> Privacy Policy. </Link>
        </label>
      </div>
      <Link
        to="/home"
        role="button"
        className="btn btn-primary fw_bold f_16 signup_blue_btn w-100 mb-3"
        type="button"
      >
        CREATE ACCOUNT
      </Link>
      <div className="or_lines position-relative">
        <p className="f_14 text_blue2 text-center mb-0">Or</p>
      </div>
    </form>
  </Fragment>
);

const SignUp = () => {
  return <CommonForm form={<SingnUpForm />} heading="Sign Up. Speak Out. Make Your Future With" />;
};

export default SignUp;
