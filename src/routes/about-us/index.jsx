import { Fragment, useEffect } from 'react';
import Slider from 'react-slick';

// common components imports
import Header from '@common/header';
import Footer from '@common/footer';
import MessageUs from '@common/messageUs';

// image imports
import aboutUs from '@images/about-us-img.png';
import ourVision from '@images/our-vision-img.png';
import service1 from '@images/service1.png';
import service2 from '@images/service2.png';
import service3 from '@images/service3.png';
import service4 from '@images/service4.png';
import dummy_img from '@images/dummy_img.png';
import blog from '@images/blog.png';
import blog2 from '@images/blog2.png';
import blog3 from '@images/blog3.png';

// svg
import RightArrowIcon from '@svg/rightArrow';
import TranslateIcon from '@svg/translate';
import GlobalIcon from '@svg/global';
import ContactIcon from '@svg/contact';
import CommentIcon from '@svg/comment';
import UserIcon from '@svg/user';
import CalendarAboutIcon from '@svg/calendarAbout';

const AboutUs = () => {
  useEffect(() => {
    if (document.body) {
      document.body.classList.add('pt_6');
      const slider = document.querySelector('.slick-slider');
      if (slider !== null) {
        slider.classList.add('mb-5');
      }
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const loop6 = [0, 1, 2, 3, 4, 5, 6];
  return (
    <Fragment>
      <Header className="welcome_header_bg h-auto fixed-top" />

      <section className="login_welcome section_padding">
        <div className="container position-relative">
          <div className="text-center text-white">
            <h2>
              About <span className="fw_che_regular">ni-heo-world</span>
            </h2>
            <h4>Aliquam vehicula iaculis eros id sodales.</h4>
          </div>
        </div>
      </section>

      <section className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="about_img mb-4">
                <img src={aboutUs} alt="img" className="img-fluid" />
              </div>

              <div>
                <h5 className="about_heading">Future Target</h5>
                <h3 className="text_blue3 fw_bold f_30">OUR VISION</h3>
                <p className="text_blue3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incidt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation o laboris nisi ut liquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                  <br />
                  <br />
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciis unde aperiam, eaque ipsa quae ab illo inventore.
                </p>
              </div>
            </div>

            <div className="col-sm-6 d-flex flex-column-reverse">
              <div className="about_img">
                <img src={ourVision} alt="img" className="img-fluid" />
              </div>
              <div>
                <h5 className="about_heading">Know More</h5>
                <h3 className="text_blue3 fw_bold f_30">ABOUT US</h3>
                <p className="text_blue3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incidt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation o laboris nisi ut liquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                  <br />
                  <br />
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciis unde aperiam, eaque ipsa quae ab illo inventore.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 mt-5">
              <h5 className="about_heading">What We Do?</h5>
              <h3 className="text_blue3 fw_bold f_30">OUR SERVICES</h3>
              <p className="text_blue3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                <br />
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciis unde aperiam, eaque ipsa quae ab illo inventore.
              </p>
              <p className="text_blue3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                <br />
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciis unde aperiam, eaque ipsa quae ab illo inventore.
              </p>

              <p className="text_blue3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                <br />
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciis unde aperiam, eaque ipsa quae ab illo inventore.
              </p>

              <h6 className="logout_color fw_bold f_18">
                Contact With Us
                <span className="ms-2">
                  <RightArrowIcon />
                </span>
              </h6>
            </div>

            <div className="col-sm-3 mt-5">
              <div className="service_first mb-3">
                <img src={service1} alt="img" className="img-fluid" />
                <h5 className="text_blue3 fw_bold f_24">Our Service 1</h5>
                <p className="f_14 text_blue3 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adiing elit, sed do eiusmod tempor
                  incididunt utabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation
                </p>
              </div>
              <div className="service_third mb-3">
                <img src={service3} alt="img" className="img-fluid" />
                <h5 className="text_blue3 fw_bold f_24">Our Service 3</h5>
                <p className="f_14 text_blue3 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adiing elit, sed do eiusmod tempor
                  incididunt utabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation
                </p>
              </div>
            </div>

            <div className="col-sm-3 mt-5">
              <div className="service_third mb-3 mt-2">
                <img src={service2} alt="img" className="img-fluid" />
                <h5 className="text_blue3 fw_bold f_24">Our Service 2</h5>
                <p className="f_14 text_blue3 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adiing elit, sed do eiusmod tempor
                  incididunt utabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation
                </p>
              </div>
              <div className="service_fourth my-3">
                <img src={service4} alt="img" className="img-fluid" />
                <h5 className="text_blue3 fw_bold f_24">Our Service 4</h5>
                <p className="f_14 text_blue3 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adiing elit, sed do eiusmod tempor
                  incididunt utabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_padding bg_light_blue">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="about_stat text-center">
                <span>
                  <TranslateIcon />
                </span>
                <h2 className="fw_bold text_blue3 f_30">130 +</h2>
                <p>Language available to learn</p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="about_stat text-center">
                <span>
                  <GlobalIcon />
                </span>
                <h2 className="fw_bold text_blue3 f_30">10,000 +</h2>
                <p>Language Teachers from 120 Countries</p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="about_stat text-center">
                <span>
                  <ContactIcon />
                </span>
                <h2 className="fw_bold text_blue3 f_30">5,000,000 +</h2>
                <p>Language Teachers from 180 Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_padding">
        <div className="container">
          <div className="our_team_slider mb-4">
            <h5 className="about_heading">What We Do?</h5>
            <h3 className="text_blue3 fw_bold f_30">OUR TEAM</h3>

            <Slider {...settings}>
              {loop6.map((item) => (
                <div className="item" key={item}>
                  <div className="team_card">
                    <div className="team_img w-50">
                      <img src={dummy_img} alt="img" className="img-fluid" />
                    </div>
                    <div className="team_info w-50 p-3">
                      <span className="logout_color f_12">Chinese Teacher</span>
                      <h5 className="f_20 fw_bold text_blue3">Lian Ming</h5>
                      <p className="f_14">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac odio id
                        massa dignissim venenatis. Phasellus tempor ornare turpis, quis eleifend
                        metus venenatis mattis.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="our_team_slider">
            <h5 className="about_heading">Blog</h5>
            <h3 className="text_blue3 fw_bold f_30">OUR BLOGS</h3>

            <div className="row">
              <div className="col-sm-4">
                <div className="blog_card">
                  <div className="blog_img">
                    <img src={blog} alt="img" className="img-fluid" />
                    <span className="text-white">
                      <CommentIcon /> 1 Comment
                    </span>
                  </div>
                  <div className="blog_info p-3 pb-0">
                    <p className="fw_bold text_blue f_12 mb-0">
                      <span className="me-1">
                        <UserIcon />
                      </span>
                      Klinixer{' '}
                    </p>
                    <p className="fw_bold text_blue f_12  mb-0">
                      <span className="me-1">
                        <CalendarAboutIcon />
                      </span>
                      Jul 08,2021{' '}
                    </p>
                  </div>
                  <div className="blog_description p-3">
                    <h5 className="fw_bold text_blue f_16">
                      How About Fall Cleaning? 8 Tips To Get Ready For The Winter
                    </h5>
                    <p className="f_14 text_blue mb-0">
                      We provide janitorial and specialized cleaning services for all types and
                      sizes of complexes from small ….
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="blog_card">
                  <div className="blog_img">
                    <img src={blog2} alt="img" className="img-fluid" />
                    <span className="text-white">
                      <CommentIcon /> 1 Comment
                    </span>
                  </div>
                  <div className="blog_info p-3 pb-0">
                    <p className="fw_bold text_blue f_12 mb-0">
                      <span className="me-1">
                        <UserIcon />
                      </span>
                      Klinixer{' '}
                    </p>
                    <p className="fw_bold text_blue f_12  mb-0">
                      <span className="me-1">
                        <CalendarAboutIcon />
                      </span>
                      Jul 08,2021{' '}
                    </p>
                  </div>
                  <div className="blog_description p-3">
                    <h5 className="fw_bold text_blue f_16">
                      How About Fall Cleaning? 8 Tips To Get Ready For The Winter
                    </h5>
                    <p className="f_14 text_blue mb-0">
                      We provide janitorial and specialized cleaning services for all types and
                      sizes of complexes from small ….
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="blog_card">
                  <div className="blog_img">
                    <img src={blog3} alt="img" className="img-fluid" />
                    <span className="text-white">
                      <CommentIcon /> 1 Comment
                    </span>
                  </div>
                  <div className="blog_info p-3 pb-0">
                    <p className="fw_bold text_blue f_12 mb-0">
                      <span className="me-1">
                        <UserIcon />
                      </span>
                      Klinixer{' '}
                    </p>
                    <p className="fw_bold text_blue f_12  mb-0">
                      <span className="me-1">
                        <CalendarAboutIcon />
                      </span>
                      Jul 08,2021{' '}
                    </p>
                  </div>
                  <div className="blog_description p-3">
                    <h5 className="fw_bold text_blue f_16">
                      How About Fall Cleaning? 8 Tips To Get Ready For The Winter
                    </h5>
                    <p className="f_14 text_blue mb-0">
                      We provide janitorial and specialized cleaning services for all types and
                      sizes of complexes from small ….
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <MessageUs />
    </Fragment>
  );
};

export default AboutUs;
