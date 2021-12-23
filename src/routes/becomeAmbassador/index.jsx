import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

// common components imports
import Header from '@common/header';
import Footer from '@common/footer';
import MessageUs from '@common/messageUs';

// images imports
import commission from '@images/commission.svg';
import pay from '@images/pay.svg';
import worldClass from '@images/World-Class.svg';
import top1 from '@images/top_1.jpg';
import top2 from '@images/top_2.jpg';
import top3 from '@images/top_3.jpg';
import top4 from '@images/top_4.jpg';
import top5 from '@images/top_5.jpg';
import top6 from '@images/top_6.jpg';
import social_fb from '@images/social_fb.svg';
import social_twitter from '@images/social_twitter.svg';
import social_linkedin from '@images/social_linkedin.svg';

import sign_icon from '@images/sign_icon.png';
import share_icon from '@images/share_icon.png';
import earning_big from '@images/earning_big.png';

const BecomeAmbassador = () => {
  useEffect(() => {
    if (document) {
      const root = document.querySelector('#root');
      if (root !== null) root.classList.add('pt_6');
    }
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Fragment>
      <Header />
      {/* <!-- ambassador banner section starts --> */}

      <section className="ambassador_banner">
        <div className="container">
          <div className="bannerText text-center mx-auto rounded-5 text-white position-relative">
            <h2 className="f_32 mb-3 fw_bold">
              Become a <span className="fw_regular fw_che_regular">ni-hao-world</span> Ambassador
            </h2>
            <p>
              Join a community of ambassadors, influencers, and professionals working to change the
              world of English learning. Earn every time someone from your network tries
              ni-hao-world
            </p>
            <Link
              className="btn btn-outline-secondary fw_bold theme_btn ms-auto rounded-3 f_16 mt-2"
              role="button"
              to="/#"
            >
              Join Now
              <span className="ms-1">
                <svg width="22.518" height="10.907" viewBox="0 0 22.518 10.907">
                  <g
                    id="right-arrow_10_"
                    data-name="right-arrow (10)"
                    transform="translate(0 -132)"
                  >
                    <g id="Group_37060" data-name="Group 37060" transform="translate(0 132)">
                      <path
                        id="Path_28511"
                        data-name="Path 28511"
                        d="M22.26,136.831h0l-4.6-4.574a.88.88,0,0,0-1.241,1.247l3.086,3.071H.88a.88.88,0,1,0,0,1.759H19.508L16.422,141.4a.88.88,0,0,0,1.241,1.247l4.6-4.574h0A.88.88,0,0,0,22.26,136.831Z"
                        transform="translate(0 -132)"
                        fill="#fff"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- Ambassador service section starts --> */}
      <section className="ambassador_service">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center border-0 position-relative">
                <div className="card-body">
                  <img src={commission} alt="commission" />
                  <h5 className="card-title fw_bold my-3 text_blue">Earn after every referral</h5>
                  <p className="card-text text_gray">
                    Make $4 every time someone you referred spends over $20 on Cambly. 5 friends
                    referred = $20!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center border-0 position-relative">
                <div className="card-body">
                  <img src={pay} alt="pay" />
                  <h5 className="card-title fw_bold my-3 text_blue">Hassle-free Payment</h5>
                  <p className="card-text text_gray">
                    Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right
                    Freelancers Find Place Best.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center border-0 position-relative remove_border_right">
                <div className="card-body">
                  <img src={worldClass} alt="World-Class" />
                  <h5 className="card-title fw_bold my-3 text_blue">World-Class Support</h5>
                  <p className="card-text text_gray">
                    Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right
                    Freelancers Find Place Best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Ambassador service Full Image section starts --> */}

      <section className="ambassador_service_full fullBg1 d-flex align-items-center">
        <div className="container g-0">
          <div className="flat_card w-50 p-4 text_blue">
            <h2 className="f_28 mb-3 fw_bold">
              Your audience will love{' '}
              <span className="fw_regular fw_che_regular">ni-hao-world</span>
            </h2>
            <p className="mb-2">
              Each new user is joining a community of thousands of English learners from 200+
              countries.
            </p>
            <p>Some things our students love:</p>
            <ul className="list-unstyled check_bullet">
              <li>
                10,000+ native English speaking tutors from the USA, Canada, UK, and Australia
              </li>
              <li>1-on-1 lessons that are tailored to each student’s exact needs</li>
              <li>
                Study anytime, anywhere - students can book lessons in advance or call a tutor on
                demand from any device!
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="ambassador_service_full fullBg2 d-flex align-items-center">
        <div className="container g-0">
          <div className="flat_card w-50 p-4 text_blue ms-auto">
            <h2 className="f_28 mb-3 fw_bold">Are you a good fit?</h2>
            <p>Our most successful ambassadors have two things…</p>
            <ul className="list-unstyled check_bullet">
              <li>
                <h6 className="fw_bold text_blue f_18">An engaged audience</h6>
                You are a charismatic leader with a large presence in social media or your local
                community.
              </li>
              <li>
                <h6 className="fw_bold text_blue f_18">
                  Excitement About <span className="fw_regular fw_che_regular">ni-hao-world</span>
                </h6>
                You have practiced with tutors on{' '}
                <span className="fw_regular fw_che_regular">ni-hao-world</span> and get what makes
                our platform the best way to learn Chinese !
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- Meet Our Top Ambassador section starts --> */}

      <section className="topAmbassador">
        <div className="container">
          <div className="center_heading text-center mx-auto mb-5">
            <h2 className="fw_bold text_blue">Meet Our Top Ambassador</h2>
            <p className="text_gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel laoreet turpis. Sed
              sollicitudin, elit a commodo condimentum
            </p>
          </div>

          <div className="ambassador_slider">
            {/* <div className="owl-carousel owl-theme mb-4"> */}
            <Slider {...settings}>
              {/* <!-- Item start --> */}
              <div className="item">
                <div className="d-flex flex-column ambassador_column">
                  <div className="media d-flex">
                    <div className="media-left me-4">
                      <img src={top1} className="media-object" />
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading text_blue fw_bold mb-0">Mark book</h4>
                      <h6 className="text_blue">Student broker</h6>
                      <ul className="list-unstyled ambassador_social d-flex mt-3">
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_fb} />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_twitter} />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_linkedin} />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- ambassador_column end --> */}
                <div className="d-flex flex-column ambassador_column">
                  <div className="media d-flex">
                    <div className="media-left me-4">
                      <img src={top4} className="media-object" />
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading text_blue fw_bold mb-0">Michiel J</h4>
                      <h6 className="text_blue">Student broker</h6>
                      <ul className="list-unstyled ambassador_social d-flex mt-3">
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_fb} />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_twitter} />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_linkedin} />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Item start --> */}
              <div className="item">
                <div className="d-flex flex-column ambassador_column">
                  <div className="media d-flex">
                    <div className="media-left me-4">
                      <img src={top2} className="media-object" />
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading text_blue fw_bold mb-0">Jane Smith</h4>
                      <h6 className="text_blue">Student broker</h6>
                      <ul className="list-unstyled ambassador_social d-flex mt-3">
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_fb} />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_twitter} />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_linkedin} />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- ambassador_column end --> */}
                <div className="d-flex flex-column ambassador_column">
                  <div className="media d-flex">
                    <div className="media-left me-4">
                      <img src={top5} className="media-object" />
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading text_blue fw_bold mb-0">Lady Kim</h4>
                      <h6 className="text_blue">Student broker</h6>
                      <ul className="list-unstyled ambassador_social d-flex mt-3">
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_fb} />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_twitter} />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_linkedin} />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Item start --> */}
              <div className="item">
                <div className="d-flex flex-column ambassador_column">
                  <div className="media d-flex">
                    <div className="media-left me-4">
                      <img src={top3} className="media-object" />
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading text_blue fw_bold mb-0">John Deo</h4>
                      <h6 className="text_blue">Student broker</h6>
                      <ul className="list-unstyled ambassador_social d-flex mt-3">
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_fb} />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_twitter} />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_linkedin} />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- ambassador_column end --> */}
                <div className="d-flex flex-column ambassador_column">
                  <div className="media d-flex">
                    <div className="media-left me-4">
                      <img src={top6} className="media-object" />
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading text_blue fw_bold mb-0">Mark book</h4>
                      <h6 className="text_blue">Student broker</h6>
                      <ul className="list-unstyled ambassador_social d-flex mt-3">
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_fb} />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_twitter} />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <img className="img-fluid" src={social_linkedin} />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            {/* </div> */}
          </div>
        </div>
      </section>

      <section className="ambassador_service get_started">
        <div className="center_heading text-center mx-auto mb-5">
          <h2 className="fw_bold text_blue">Get started now</h2>
          <p className="text_gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel laoreet turpis. Sed
            sollicitudin, elit a commodo condimentum
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center border-0 position-relative">
                <div className="card-body">
                  <img src={sign_icon} alt="" />
                  <h5 className="card-title fw_bold my-3 text_blue">Sign up</h5>
                  <p className="card-text text_gray">
                    Registering only takes a minute and you’ll be notified after a quick approval
                    process
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center border-0 position-relative">
                <div className="card-body">
                  <img src={share_icon} alt="" />
                  <h5 className="card-title fw_bold my-3 text_blue">
                    Share <span className="fw_regular fw_che_regular">ni-hao-world</span>
                  </h5>
                  <p className="card-text text_gray">
                    Use your personalized referral link to share Cambly on the platforms of your
                    choice
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center border-0 position-relative remove_border_right">
                <div className="card-body">
                  <img src={earning_big} alt="" />
                  <h5 className="card-title fw_bold my-3 text_blue">Start earning big!</h5>
                  <p className="card-text text_gray">
                    Every referral action instantly credits your account, ready for the next monthly
                    payout
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <Link
                className="btn btn-outline-secondary fw_bold theme_btn rounded-3 f_16 mt-2 get_btn"
                role="button"
                to="/#"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MessageUs />
    </Fragment>
  );
};

export default BecomeAmbassador;
