// common components imports
import Header from '@common/header';
import Footer from '@common/footer';

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

      <Footer />

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
