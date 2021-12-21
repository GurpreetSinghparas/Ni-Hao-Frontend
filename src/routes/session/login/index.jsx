import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import CommonForm from '@components/common/commonForm';
import Input from '@commonElements/inputField';

// svg imports
import EyeIcon from '@svg/eye';

const LoginForm = () => (
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
      <Link to="/forgot-password" className="text_gray2 f_14 ms-auto d-block text-end mb-3">
        Forgot Password?
      </Link>
      <Link
        to="/home"
        role="button"
        className="btn btn-primary fw_bold f_16 signup_blue_btn w-100 mb-3"
        type="button"
      >
        LOGIN
      </Link>
      <div className="or_lines position-relative">
        <p className="f_14 text_blue2 text-center mb-0">Or</p>
      </div>
    </form>
  </Fragment>
);

const Login = () => {
  return <CommonForm form={<LoginForm />} heading="Welcome back to" />;
};

export default Login;
