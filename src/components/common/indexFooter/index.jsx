import { Link } from 'react-router-dom';
import download_img from '@assets/images/download_img.png';

const IndexFooter = () => {
  return (
    <footer>
      <div className="container">
        {/* <!-- Download Apps section starts --> */}
        <div className="download_bg">
          <div className="row pt-4">
            <div className="col-sm-6 text-center">
              <img src={download_img} alt="img" className="img-fluid" />
            </div>
            <div className="col-sm-6 align-self-center">
              <div className="banner_text mb-5">
                <h1 className="fw_bold text_blue">Download Our App</h1>
                <h2 className="f_26 text_blue">
                  <span className="fw_che_regular">ni-Hao-World</span> On The Go.
                </h2>
                <p className="f_18 text_blue">
                  Start Or Schedule Lessons Anytime, Anywhere With
                  <br />
                  Our Android And Iphone Apps.
                </p>
                <div className="download_btn d-flex">
                  {/* Todo Links */}
                  <Link
                    className="btn btn-primary ios_btn f_16 d-flex align-items-center me-3"
                    role="button"
                    to="/"
                  >
                    <span className="me-3">
                      <svg
                        id="apple-logo"
                        width="25.319"
                        height="31.057"
                        viewBox="0 0 25.319 31.057"
                      >
                        <g id="Group_14" data-name="Group 14">
                          <path
                            id="Path_3731"
                            data-name="Path 3731"
                            d="M17.38,0H17.6a6.65,6.65,0,0,1-1.675,5.012,5.191,5.191,0,0,1-4.57,2.145,6.451,6.451,0,0,1,1.7-4.856A7.363,7.363,0,0,1,17.38,0Z"
                            transform="translate(1.256)"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path_3732"
                            data-name="Path 3732"
                            d="M27.423,20.8v.061a18.069,18.069,0,0,1-2.586,4.985c-.986,1.357-2.194,3.183-4.352,3.183-1.864,0-3.1-1.2-5.013-1.231-2.021-.033-3.133,1-4.98,1.263h-.63a5.627,5.627,0,0,1-3.25-2.239A19.619,19.619,0,0,1,2.1,15.534v-1.39A9.1,9.1,0,0,1,6.078,6.673,6.711,6.711,0,0,1,10.584,5.63a11.335,11.335,0,0,1,2.208.633A6.1,6.1,0,0,0,15,6.924a5.3,5.3,0,0,0,1.548-.473,9.524,9.524,0,0,1,4.98-.884A6.91,6.91,0,0,1,26.6,8.595a6.515,6.515,0,0,0-3.31,6.464A6.673,6.673,0,0,0,27.423,20.8Z"
                            transform="translate(-2.104 1.998)"
                            fill="#fff"
                          ></path>
                        </g>
                      </svg>
                    </span>
                    <p className="d-flex flex-column align-items-start mb-0">
                      Free Download
                      <span>App Store</span>
                    </p>
                  </Link>
                  <Link
                    className="btn btn-primary ios_btn f_16 d-flex align-items-center"
                    role="button"
                    to="/"
                  >
                    <span className="me-3">
                      <svg
                        id="playstore"
                        width="26.372"
                        height="29.616"
                        viewBox="0 0 26.372 29.616"
                      >
                        <path
                          id="Path_3764"
                          data-name="Path 3764"
                          d="M14.113,32.485l-1.479,1.542L.974,46.189A2.714,2.714,0,0,1,.5,44.646V20.5a2.708,2.708,0,0,1,.546-1.644L12.634,30.943Zm0,0"
                          transform="translate(-0.5 -17.765)"
                          fill="#6aa9ff"
                        />
                        <path
                          id="Path_3765"
                          data-name="Path 3765"
                          d="M52.2,9.021l-4.262,4.446-2.682-2.8L35.121.1a2.7,2.7,0,0,1,2.093.269l8.039,4.641Zm0,0"
                          transform="translate(-33.119 -0.001)"
                          fill="#a8ebfa"
                        />
                        <path
                          id="Path_3766"
                          data-name="Path 3766"
                          d="M50.2,280.738l-7.052,4.071-8.039,4.641a2.724,2.724,0,0,1-1.365.371,2.689,2.689,0,0,1-.857-.141l10.261-10.7,2.682-2.8Zm0,0"
                          transform="translate(-31.014 -260.205)"
                          fill="#ff5b5b"
                        />
                        <path
                          id="Path_3767"
                          data-name="Path 3767"
                          d="M286.418,173.923l-4.38-2.529-4.608,4.806,4.716,4.919,4.273-2.467a2.73,2.73,0,0,0,0-4.729Zm0,0"
                          transform="translate(-261.411 -161.48)"
                          fill="#ff9f00"
                        />
                        <path
                          id="Path_3768"
                          data-name="Path 3768"
                          d="M211.752,229.362l-1.479,1.542V227.82Zm0,0"
                          transform="translate(-198.14 -214.642)"
                          fill="#2682ff"
                        />
                        <path
                          id="Path_3769"
                          data-name="Path 3769"
                          d="M212.955,95.08l-2.682-2.8V86.625l6.944,4.009Zm0,0"
                          transform="translate(-198.14 -81.614)"
                          fill="#76e2f8"
                        />
                        <path
                          id="Path_3770"
                          data-name="Path 3770"
                          d="M217.326,280.737l-7.052,4.071v-5.832l2.682-2.8Zm0,0"
                          transform="translate(-198.14 -260.204)"
                          fill="#ff3636"
                        />
                      </svg>
                    </span>
                    <p className="d-flex flex-column align-items-start mb-0">
                      GET IT ON
                      <span>Google Play</span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-sm-3">
            <p className="f_16 text_blue fw_bold">About</p>
            <ul className="list-unstyled">
              <li>
                <Link to="/about-us" className="text_black f_16">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text_black f_16">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/" className="text_black f_16">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/site_map" className="text_black f_16">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-3">
            <p className="f_16 text_blue fw_bold">Useful Links</p>
            <ul className="list-unstyled">
              <li>
                <Link to="/faq_2" className="text_black f_16">
                  Faq
                </Link>
              </li>
              <li>
                <Link to="/Become_Tutor" className="text_black f_16">
                  Become A Tutor
                </Link>
              </li>
              <li>
                <Link to="/Become-Ambassador" className="text_black f_16">
                  Become An Ambassador
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-3">
            <p className="f_16 text_blue fw_bold">Applicable Link</p>
            <ul className="list-unstyled">
              <li>
                <Link to="/help" className="text_black f_16">
                  <span className="fw_che_regular">Ni-Hao-World</span> Help Centre
                </Link>
              </li>
              <li>
                <Link to="/" className="text_black f_16">
                  <span className="fw_che_regular">Ni-Hao-World</span> (Ios)
                </Link>
              </li>
              <li>
                <Link to="/" className="text_black f_16">
                  <span className="fw_che_regular">Ni-Hao-World</span> (Android)
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-3">
            <p className="f_16 text_blue fw_bold">Social</p>
            <ul className="list-unstyled d-flex social_btns">
              <li className="mb-0">
                <Link to="/" className="text_black f_16">
                  <span className="google_btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7.275"
                      height="8.394"
                      viewBox="0 0 7.275 8.394"
                    >
                      <path
                        id="Path_36169"
                        data-name="Path 36169"
                        d="M53.5,49v8.394l7.275-4.2Z"
                        transform="translate(-53.5 -49)"
                        fill="#fff"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </li>

              <li className="mb-0">
                <Link to="/" className="text_black f_16">
                  <span className="fb_btn">
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
                  </span>
                </Link>
              </li>

              <li className="mb-0">
                <Link to="/" className="text_black f_16">
                  <span className="insta_btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.553"
                      height="10.553"
                      viewBox="0 0 10.553 10.553"
                    >
                      <g
                        id="iconfinder_2959748_instagram_photo_share_icon"
                        transform="translate(-15 -15)"
                      >
                        <path
                          id="Path_36170"
                          data-name="Path 36170"
                          d="M22.322,15.861a2.369,2.369,0,0,1,2.369,2.369v4.092a2.369,2.369,0,0,1-2.369,2.369H18.23a2.369,2.369,0,0,1-2.369-2.369V18.23a2.369,2.369,0,0,1,2.369-2.369h4.092m0-.861H18.23A3.24,3.24,0,0,0,15,18.23v4.092a3.24,3.24,0,0,0,3.23,3.23h4.092a3.24,3.24,0,0,0,3.23-3.23V18.23A3.24,3.24,0,0,0,22.322,15Z"
                          fill="#fff"
                        ></path>
                        <path
                          id="Path_36171"
                          data-name="Path 36171"
                          d="M85.027,32a.617.617,0,1,0,.617.617A.617.617,0,0,0,85.027,32Z"
                          transform="translate(-61.936 -15.169)"
                          fill="#fff"
                        ></path>
                        <path
                          id="Path_36172"
                          data-name="Path 36172"
                          d="M41.4,39.331a1.9,1.9,0,1,1-1.9,1.9,1.9,1.9,0,0,1,1.9-1.9m0-.861a2.765,2.765,0,1,0,1.958.808A2.765,2.765,0,0,0,41.4,38.47Z"
                          transform="translate(-21.094 -20.943)"
                          fill="#fff"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </Link>
              </li>

              <li className="mb-0">
                <Link to="/" className="text_black f_16">
                  <span className="linkedin_btn">
                    <svg id="linkedin" width="14.187" height="14.188" viewBox="0 0 14.187 14.188">
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
                  </span>
                </Link>
              </li>
              <li className="mb-0">
                <Link to="/" className="text_black f_16">
                  <span className="twitter_btn">
                    <svg width="15.71" height="12.765" viewBox="0 0 15.71 12.765">
                      <path
                        id="twitter_3_"
                        data-name="twitter (3)"
                        d="M15.71,49.511a6.715,6.715,0,0,1-1.856.509,3.2,3.2,0,0,0,1.417-1.78,6.436,6.436,0,0,1-2.042.78,3.221,3.221,0,0,0-5.571,2.2,3.316,3.316,0,0,0,.075.734,9.116,9.116,0,0,1-6.639-3.369,3.222,3.222,0,0,0,.99,4.3,3.181,3.181,0,0,1-1.455-.4v.035A3.236,3.236,0,0,0,3.209,55.7a3.215,3.215,0,0,1-.844.106,2.848,2.848,0,0,1-.61-.055,3.251,3.251,0,0,0,3.01,2.244A6.472,6.472,0,0,1,.771,59.363,6.033,6.033,0,0,1,0,59.319a9.067,9.067,0,0,0,4.941,1.445A9.1,9.1,0,0,0,14.108,51.6c0-.142,0-.28-.012-.416A6.425,6.425,0,0,0,15.71,49.511Z"
                        transform="translate(0 -48)"
                        fill="#fff"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="hr_edit" />
      <div className="container">
        <div className="d-flex justify-content-between align-items-center  py-3">
          <ul className="list-unstyled d-flex mb-0">
            <li className="mb-0">
              <Link to="/privacy-policy" className="text_black f_16 me-3">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-0">
              <Link to="/terms&conditions" className="text_black f_16 me-3">
                Terms And Conditions
              </Link>
            </li>
            <li className="mb-0">
              <Link to="/" className="text_black f_16 me-3">
                Jobs
              </Link>
            </li>
            <li className="mb-0">
              <Link to="/contact-us" className="text_black f_16 me-3">
                Contact
              </Link>
            </li>
          </ul>
          <p className="text_black mb-0">
            @Copyright By <span className="fw_che_regular text_blue2">Ni-Hao-World</span> &nbsp; |
            &nbsp; ALL RIGHTS RESERVED
          </p>
        </div>
      </div>

      {/* <!-- Download Apps section ends --> */}
    </footer>
  );
};

export default IndexFooter;
