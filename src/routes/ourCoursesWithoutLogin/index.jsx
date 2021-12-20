import { Link } from 'react-router-dom';

import Header from '@components/common/header';
import CourseCard from './courseCard';
import {
  examPreparation,
  expressYourself,
  fundamentalOfChinese,
  professionalDevelopment,
  summaries,
} from './ourCoursesContants';

const OurCousesWithoutLogin = () => {
  const renderFundamentalOfChineseCourses = () => {
    return fundamentalOfChinese.map(
      ({ courseClassName, svg, img, title, description, level, lessons }, idx) => (
        <div className="col-sm-4 mb-3" key={idx}>
          <CourseCard
            courseClassName={courseClassName}
            svg={svg}
            img={img}
            title={title}
            description={description}
            level={level}
            lessons={lessons}
          />
        </div>
      ),
    );
  };

  const renderProfessionalCourses = () => {
    return professionalDevelopment.map(
      ({ courseClassName, svg, img, title, description, level, lessons }, idx) => (
        <div className="col-sm-4 mb-3" key={idx}>
          <CourseCard
            courseClassName={courseClassName}
            svg={svg}
            img={img}
            title={title}
            description={description}
            level={level}
            lessons={lessons}
          />
        </div>
      ),
    );
  };

  const renderExpressYourselfCourses = () => {
    return expressYourself.map(
      ({ courseClassName, svg, img, title, description, level, lessons }, idx) => (
        <div className="col-sm-4 mb-3" key={idx}>
          <CourseCard
            courseClassName={courseClassName}
            svg={svg}
            img={img}
            title={title}
            description={description}
            level={level}
            lessons={lessons}
          />
        </div>
      ),
    );
  };

  const renderExamPreprationCourses = () => {
    return examPreparation.map(
      ({ courseClassName, svg, img, title, description, level, lessons }, idx) => (
        <div className="col-sm-4 mb-3" key={idx}>
          <CourseCard
            courseClassName={courseClassName}
            svg={svg}
            img={img}
            title={title}
            description={description}
            level={level}
            lessons={lessons}
          />
        </div>
      ),
    );
  };

  const renderSummariesCourses = () => {
    return summaries.map(
      ({ courseClassName, svg, img, title, description, level, lessons }, idx) => (
        <div className="col-sm-4 mb-3" key={idx}>
          <CourseCard
            courseClassName={courseClassName}
            svg={svg}
            img={img}
            title={title}
            description={description}
            level={level}
            lessons={lessons}
          />
        </div>
      ),
    );
  };

  return (
    <div className="background_gray pt_9">
      <Header />

      <section className="section_padding">
        <div className="container">
          <div className="mb-5">
            <h2 className="f_28 text_blue fw_bold mb-3">Discover Courses</h2>
            <h4 className="text_blue f_22 fw_bold mb-1">Fundamental Of Chinese Fluency</h4>
            <p className="text_blue">
              Gain Confidence And Fluency In Conversational Chinese, From The Basic Of Smalltalks To
              Crafting Well-Formed Opinions.
            </p>
            <div className="row">{renderFundamentalOfChineseCourses()}</div>
          </div>

          <div className="mb-5">
            <h4 className="text_blue f_22 fw_bold mb-1">Professional Development</h4>
            <p className="text_blue">
              Effective Cross-Cultural Communication, Both Verbal And Non-Verbal, Is A Powerful Tool
              For Career Growth.
            </p>
            <div className="row">{renderProfessionalCourses()}</div>
          </div>

          <div className="mb-5">
            <h4 className="text_blue f_22 fw_bold mb-1">Express Yourself</h4>
            <p className="text_blue">
              Effective Cross-Cultural Communication, Both Verbal And Non-Verbal, Is A Powerful Tool
              For Career Growth.
            </p>
            <div className="row">{renderExpressYourselfCourses()}</div>
          </div>

          <div className="mb-5">
            <h4 className="text_blue f_22 fw_bold mb-1">Exam Preparation</h4>
            <p className="text_blue">Exam Preparation</p>
            <div className="row">{renderExamPreprationCourses()}</div>
          </div>

          <div className="mb-5">
            <h4 className="text_blue f_22 fw_bold mb-1">Summaries</h4>
            <p className="text_blue ">
              Gain Confidence And Fluency In Conversational Chinese, From The Basic Of Small Talks
              To Crafting Well-Formed Opinions.
            </p>
            <div className="row">{renderSummariesCourses()}</div>
          </div>
        </div>
      </section>

      {/* <!-- Footer section starts --> */}

      <footer className="mt-0">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-3">
            <ul className="list-unstyled d-flex mb-0">
              <li className="mb-0">
                <Link to="/privacy-policy" className="text_black f_14 me-3">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-0">
                <Link to="/terms&conditions" className="text_black f_14 me-3">
                  Terms And Conditions
                </Link>
              </li>
              <li className="mb-0">
                <Link to="/#" className="text_black f_14 me-3">
                  Jobs
                </Link>
              </li>
              <li className="mb-0">
                <Link to="/contact-us" className="text_black f_14 me-3">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="list-unstyled d-flex social_btns mb-0">
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
                      />
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
                        />
                        <path
                          id="Path_36171"
                          data-name="Path 36171"
                          d="M85.027,32a.617.617,0,1,0,.617.617A.617.617,0,0,0,85.027,32Z"
                          transform="translate(-61.936 -15.169)"
                          fill="#fff"
                        />
                        <path
                          id="Path_36172"
                          data-name="Path 36172"
                          d="M41.4,39.331a1.9,1.9,0,1,1-1.9,1.9,1.9,1.9,0,0,1,1.9-1.9m0-.861a2.765,2.765,0,1,0,1.958.808A2.765,2.765,0,0,0,41.4,38.47Z"
                          transform="translate(-21.094 -20.943)"
                          fill="#fff"
                        />
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
            <p className="text_black mb-0 f_14">
              @Copyright By <span className="fw_che_regular text_blue2">Ni-Hao-World</span> &nbsp; |
              &nbsp; ALL RIGHTS RESERVED
            </p>
          </div>
        </div>

        {/* <!-- Download Apps section ends --> */}
      </footer>

      {/* <!-- Footer section ends --> */}

      <div className="whts_app">
        <button className="btn btn-outline-secondary fw_bold whts_app_btn">
          <span className="me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37.265"
              viewBox="0 0 37 37.265"
            >
              <g id="_x36__stroke" transform="translate(0.24 0.015)">
                <g id="WhatsApp" transform="translate(-0.015 -0.015)">
                  <rect
                    id="Rectangle_5026"
                    data-name="Rectangle 5026"
                    width="37"
                    height="37"
                    transform="translate(-0.225 0.265)"
                    fill="none"
                  />
                  <path
                    id="WhatsApp_1_"
                    d="M13.193,9.3c-.355-.85-.624-.883-1.162-.9-.183-.011-.387-.021-.613-.021a2.657,2.657,0,0,0-1.873.657,5.847,5.847,0,0,0-1.873,4.456c0,2.627,1.915,5.167,2.174,5.523s3.734,5.823,9.115,8.052c4.208,1.744,5.456,1.582,6.414,1.378,1.4-.3,3.153-1.335,3.595-2.583a4.547,4.547,0,0,0,.312-2.541c-.129-.226-.484-.355-1.022-.624s-3.153-1.561-3.648-1.733a1.022,1.022,0,0,0-1.313.4,22.469,22.469,0,0,1-1.431,1.895,1.157,1.157,0,0,1-1.291.2,13.492,13.492,0,0,1-4.294-2.648,16.283,16.283,0,0,1-2.97-3.692c-.312-.538-.032-.851.215-1.141.269-.334.527-.57.8-.883a3.207,3.207,0,0,0,.592-.84,1.093,1.093,0,0,0-.075-.99C14.711,12.993,13.635,10.366,13.193,9.3ZM18.305,0A18.3,18.3,0,0,0,3.487,29.042l-2.282,6.8L8.243,33.6A18.307,18.307,0,1,0,18.316,0h-.011Z"
                    transform="translate(0 0)"
                    fill="#67c15e"
                    fillRule="evenodd"
                  />
                </g>
              </g>
            </svg>
          </span>
          Message Us
        </button>
      </div>

      {/* <!-- Option 1: Bootstrap Bundle with Popper --> */}
      {/* <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.js"></script>
        <script src="js/main.js"></script>
        <script src="js/jquery.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script>
            $(document).ready(function () {
                $(".owl-carousel").owlCarousel({
                    loop: true,
                    margin: 10,
                    responsiveclassName: true,
                    dots: false,
                    nav: true,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: 1,
                            loop: true,
                        },
                        600: {
                            items: 2,
                            loop: true,
                        },
                        1000: {
                            items: 3,
                            loop: true,
                        },
                    },
                });
            });
        </script>
        <script>
            $(function () {
                $(window).on("scroll", function () {
                    if ($(window).scrollTop() > 80) {
                        $(".navbar").addclassName("nav_active");
                    } else {
                        $(".navbar").removeclassName("nav_active");
                    }
                });
            });
            $(".dropdown").click(function (e) {
                e.stopPropagation();
            });
            var nav = document.querySelector(".my-nav");
            nav.addEventListener(
                "toggle",
                function (event) {
                    // Only run if the dropdown is open
                    if (!event.target.open) return;

                    // Get all other open dropdowns and close them
                    var dropdowns = nav.querySelectorAll(".dropdown[open]");
                    Array.prototype.forEach.call(dropdowns, function (dropdown) {
                        if (dropdown === event.target) return;
                        dropdown.removeAttribute("open");
                    });
                },
                true
            );
        </script> */}
    </div>
  );
};

export default OurCousesWithoutLogin;
