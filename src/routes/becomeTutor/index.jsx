import { Fragment } from 'react';
import { Link } from 'react-router-dom';

// common components imports
import Header from '@common/header';
import Footer from '@common/footer';

// images imports
import youngChinese from '@images/young-chineses.png';
import youngBusiness from '@images/young-business.png';
import youngGirl from '@images/young-girl.png';
import getPaid from '@images/Get_Paid.svg';
import tutorAnytime from '@images/tutor_anytime.svg';
import makeGlobal from '@images/make_global.svg';

const BecomeTuTor = () => {
  return (
    <Fragment>
      <Header className="welcome_header_bg teacher-dash" />
      <section className="inner-carousel">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={youngChinese} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fw_bold f_54">
                  Tutoring Chinese With <br />
                  <span className="fw_regular fw_che_regular">ni-hao-world</span>{' '}
                </h5>
                <p className="f_24">Get Paid To Chat With People From Around The World.</p>
                <Link
                  className="btn btn-outline-secondary fw_bold theme_btn rounded-3 f_16 mt-2 get_btn"
                  role="button"
                  to="/tutor-part/teacher_login"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src={youngBusiness} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fw_bold f_54">
                  Tutoring Chinese With
                  <br />
                  <span className="fw_regular fw_che_regular">ni-hao-world</span>{' '}
                </h5>
                <p className="f_24">Get Paid To Chat With People From Around The World.</p>
                <Link
                  className="btn btn-outline-secondary fw_bold theme_btn rounded-3 f_16 mt-2 get_btn"
                  role="button"
                  to="#"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src={youngGirl} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fw_bold f_54">
                  Tutoring Chinese With
                  <br />
                  <span className="fw_regular fw_che_regular">ni-hao-world</span>{' '}
                </h5>
                <p className="f_24">Get Paid To Chat With People From Around The World.</p>
                <Link
                  className="btn btn-outline-secondary fw_bold theme_btn rounded-3 f_16 mt-2 get_btn"
                  role="button"
                  to="#"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="ambassador_service teacher_dash_card">
        <div className="center_heading text-center mx-auto mb-5">
          <h2 className="fw_bold text_blue">
            Tutoring Chinese WITH <span className="fw_regular fw_che_regular">Ni-hao-world</span>
          </h2>
          <p className="text_gray">
            No Teaching Certificate, Bachelor’s Degree Or Prior Teaching Experience Needed.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 px-4">
              <div className="card text-center border-0 position-relative teacher_dash">
                <div className="card-body p-0">
                  <div className="img_new">
                    <img src={getPaid} alt="" />
                  </div>
                  <div className="inner-card">
                    <h5 className="card-title fw_bold my-3 text_blue">Get Paid Weekly</h5>
                    <p className="card-text text_gray">
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Quis Fermentum
                      Tellus, Eget Pharetra Ante. Morbi Sed Ligula Scelerisque{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 px-4">
              <div className="card text-center border-0 position-relative teacher_dash">
                <div className="card-body p-0">
                  <div className="img_new">
                    <img src={tutorAnytime} alt="" />
                  </div>
                  <div className="inner-card">
                    <h5 className="card-title fw_bold my-3 text_blue">Tutor Anytime, Anywhere</h5>
                    <p className="card-text text_gray">
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Quis Fermentum
                      Tellus, Eget Pharetra Ante. Morbi Sed Ligula Scelerisque, Sodales{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 px-4">
              <div className="card text-center border-0 position-relative remove_border_right teacher_dash">
                <div className="card-body p-0">
                  <div className="img_new">
                    <img src={makeGlobal} alt="" />
                  </div>
                  <div className="inner-card">
                    <h5 className="card-title fw_bold my-3 text_blue">Make A Global Impact</h5>
                    <p className="card-text text_gray">
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Quis Fermentum
                      Tellus, Eget Pharetra Ante. Morbi Sed Ligula Scelerisque{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12 text-center">
              <Link
                className="btn btn-outline-secondary fw_bold theme_btn rounded-3 f_16 mt-2 get_btn"
                role="button"
                to="/tutor-part/teacher_login"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
export default BecomeTuTor;
