import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Header from '@components/common/header';
import Input from '@commonElements/inputField';

import loginImg from '@assets/images/login_img.png';

const Login = () => {
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
              <div className="col-sm-6 pe-0">
                <div className="login_box_height">
                  <div className="login_text">
                    <h4 className="fw_bold f_22 mb-4">
                      Welcome back to{' '}
                      <span className="fw_che_regular text_blue2">ni-hao-world</span>
                    </h4>
                    <form action="" className="custom_form">
                      <div className="form-floating mb-4  ">
                        <Input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Username/Email</label>
                      </div>
                      <div className="form-floating mb-4">
                        <Input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <span className="eye_icon">
                          <svg width="17.039" height="9.76" viewBox="0 0 17.039 9.76">
                            <g id="noun_Eye_2885546" opacity="0.56">
                              <path
                                id="Path_25285"
                                data-name="Path 25285"
                                d="M13.52,22c5.153,0,8.52,4.88,8.52,4.88s-3.366,4.88-8.52,4.88S5,26.88,5,26.88,8.366,22,13.52,22Zm0,1.394a3.644,3.644,0,0,1,3.786,3.486,3.644,3.644,0,0,1-3.786,3.486A3.644,3.644,0,0,1,9.733,26.88a3.644,3.644,0,0,1,3.786-3.486Zm0,1.569a1.924,1.924,0,1,1,0,3.834,1.924,1.924,0,1,1,0-3.834Z"
                                transform="translate(-5 -22)"
                                fill-rule="evenodd"
                                opacity="0.61"
                              />
                            </g>
                          </svg>
                        </span>
                        <label for="floatingPassword">Password</label>
                      </div>
                      <Link
                        to="/forgot-password"
                        className="text_gray2 f_14 ms-auto d-block text-end mb-3"
                      >
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
                  </div>
                  <div className="signup_social_icons ps-2 pe-0 d-flex justify-content-center">
                    <button type="button" className="btn btn-primary login_google_btn me-3">
                      <span className="me-1">
                        <svg id="google" width="15.992" height="15.414" viewBox="0 0 15.992 15.414">
                          <path
                            id="Path"
                            d="M3.348,3.414a4.334,4.334,0,0,1,.245-1.431L.84,0a7.359,7.359,0,0,0,0,6.825L3.59,4.838a4.317,4.317,0,0,1-.242-1.424"
                            transform="translate(0 4.293)"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path-2"
                            data-name="Path"
                            d="M7.344,3.153a4.912,4.912,0,0,1,3.012,1.015l2.381-2.241A8.442,8.442,0,0,0,7.344,0,8.218,8.218,0,0,0,0,4.293L2.754,6.276a4.8,4.8,0,0,1,4.59-3.122"
                            transform="translate(0.838 0)"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path-3"
                            data-name="Path"
                            d="M7.344,3.122A4.8,4.8,0,0,1,2.754,0L0,1.982A8.218,8.218,0,0,0,7.344,6.276a8.062,8.062,0,0,0,5.33-1.921L10.061,2.448a5.285,5.285,0,0,1-2.717.674"
                            transform="translate(0.838 9.138)"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path-4"
                            data-name="Path"
                            d="M7.809,1.4A6.042,6.042,0,0,0,7.623,0H0V2.978H4.387a3.469,3.469,0,0,1-1.671,2.3L5.33,7.187A7.451,7.451,0,0,0,7.809,1.4"
                            transform="translate(8.182 6.306)"
                            fill="#fff"
                          ></path>
                        </svg>
                      </span>{' '}
                      Google
                    </button>
                    <button type="button" className="btn btn-primary login_fb_btn me-3">
                      <span className="me-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="7.454"
                          height="14.906"
                          viewBox="0 0 7.454 14.906"
                        >
                          <path
                            id="facebook"
                            d="M12.28,2.475h1.361V.1A17.572,17.572,0,0,0,11.658,0C9.7,0,8.352,1.234,8.352,3.5V5.59H6.187v2.65H8.352v6.667h2.655V8.24h2.078l.33-2.65H11.006V3.765C11.007,3,11.213,2.475,12.28,2.475Z"
                            transform="translate(-6.187)"
                            fill="#fff"
                          ></path>
                        </svg>
                      </span>{' '}
                      Facebook
                    </button>
                    <button type="button" className="btn btn-primary login_apple_btn me-3">
                      <span className="me-1">
                        <svg
                          id="apple_4_"
                          data-name="apple (4)"
                          width="13.695"
                          height="16.696"
                          viewBox="0 0 13.695 16.696"
                        >
                          <path
                            id="Path_28738"
                            data-name="Path 28738"
                            d="M50.562,130.808c-2.485-.014-4.54-5.087-4.54-7.67,0-4.22,3.166-5.144,4.386-5.144a5.046,5.046,0,0,1,1.655.407,3.7,3.7,0,0,0,.945.271,2.94,2.94,0,0,0,.678-.22,5.433,5.433,0,0,1,2.043-.494h0a4.188,4.188,0,0,1,3.5,1.77l.256.384-.368.278a3.1,3.1,0,0,0-1.484,2.552,2.881,2.881,0,0,0,1.607,2.663c.23.139.469.281.469.594,0,.2-1.628,4.584-3.992,4.584a3.21,3.21,0,0,1-1.348-.327,2.733,2.733,0,0,0-1.2-.289,3.086,3.086,0,0,0-.95.257,4.654,4.654,0,0,1-1.648.384Z"
                            transform="translate(-46.022 -114.111)"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path_28739"
                            data-name="Path 28739"
                            d="M258.291,0c.062,2.22-1.526,3.76-3.112,3.664A3.538,3.538,0,0,1,258.291,0Z"
                            transform="translate(-248.334)"
                            fill="#fff"
                          ></path>
                        </svg>
                      </span>{' '}
                      Apple
                    </button>
                    <button type="button" className="btn btn-primary login_linkedin_btn">
                      <span className="me-1">
                        <svg
                          id="linkedin"
                          width="14.187"
                          height="14.188"
                          viewBox="0 0 14.187 14.188"
                        >
                          <path
                            id="Path_7"
                            data-name="Path 7"
                            d="M17.655,17.284h0v-5.2c0-2.545-.548-4.506-3.524-4.506A3.089,3.089,0,0,0,11.352,9.1h-.041V7.812H8.489v9.472h2.938v-4.69c0-1.235.234-2.429,1.763-2.429,1.507,0,1.529,1.409,1.529,2.508v4.612Z"
                            transform="translate(-3.471 -3.097)"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path_8"
                            data-name="Path 8"
                            d="M.4,7.977H3.338v9.472H.4Z"
                            transform="translate(-0.162 -3.261)"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path_9"
                            data-name="Path 9"
                            d="M1.7,0a1.712,1.712,0,1,0,1.7,1.7A1.7,1.7,0,0,0,1.7,0Z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </span>{' '}
                      Linkedin
                    </button>
                  </div>
                  <p className="f_14 text-center mt-4 mb-0 login_sign_text">
                    New To Ni-Hao-World ?<Link to="/signup"> Sign Up</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
