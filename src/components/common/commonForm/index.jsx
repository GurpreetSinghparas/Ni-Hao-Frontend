import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

// common elements imports
import Header from '@components/common/header';

//image imports
import loginImg from '@assets/images/login_img.png';

// svg imports
import GoogleIcon from '@svg/google';
import FacebookIcon from '@svg/facebook';
import AppleIcon from '@svg/apple';
import LinkedinIcon from '@svg/linkedin';

const CommonForm = ({ form, heading }) => {
  const { pathname } = useLocation();

  const renderIfNew = () => {
    if (pathname && pathname === '/login')
      return (
        <p className="f_14 text-center mt-4 mb-0 login_sign_text">
          New To Ni-Hao-World ?<Link to="/signup"> Sign Up</Link>
        </p>
      );
    return (
      <p className="f_14 text-center mt-4 mb-0 login_sign_text">
        Not New To Ni-Hao-World? <Link to="/login">Log In</Link>
      </p>
    );
  };

  return (
    <Fragment>
      <Header className="welcome_header_bg" />
      <section className="mt-4">
        <div className="container">
          <div className="login_card">
            <div className="row">
              <div className="col-sm-6">
                <div className="login_img position-relative">
                  <img src={loginImg} alt="img" className="img-fluid" />
                  <div className="text-center login_img_text">
                    <h2 className="fw_bold mb-1">Welcome!</h2>
                    <p>
                      Start Learning Chinese with
                      <br />
                      <span className="fw_che_regular">ni-hao-world</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={`col-sm-6  ${pathname === '/welcome' ? '' : 'pe-0'}`}>
                <div className={`${pathname === '/welcome' ? '' : 'login_box_height'}`}>
                  <div className="login_text">
                    <h4 className="fw_bold f_22 mb-4">
                      {heading ? heading : 'Sign Up. Speak Out. Make Your Future With'}{' '}
                      <span className="fw_che_regular text_blue2">ni-hao-world</span>
                    </h4>
                    {form}
                  </div>
                  <div className="signup_social_icons px-2 pe-0 d-flex justify-content-center">
                    <button type="button" className="btn btn-primary login_google_btn me-3">
                      <span className="me-1">
                        <GoogleIcon />
                      </span>{' '}
                      Google
                    </button>
                    <button type="button" className="btn btn-primary login_fb_btn me-3">
                      <span className="me-1">
                        <FacebookIcon />
                      </span>{' '}
                      Facebook
                    </button>
                    <button type="button" className="btn btn-primary login_apple_btn me-3">
                      <span className="me-1">
                        <AppleIcon />
                      </span>{' '}
                      Apple
                    </button>
                    <button type="button" className="btn btn-primary login_linkedin_btn">
                      <span className="me-1">
                        <LinkedinIcon />
                      </span>{' '}
                      Linkedin
                    </button>
                  </div>
                  {renderIfNew()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CommonForm;
