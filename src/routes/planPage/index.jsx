import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

// common components imports
import Header from '@common/header';
import Footer from '@common/footer';
import MessageUs from '@common/messageUs';
import RightArrowIcon from '../../assets/svg/rightArrow';

const PlanPage = () => {
  useEffect(() => {
    if (document) {
      const root = document.querySelector('#root');
      if (root !== null) root.classList.add('background_gray', 'pt_9');
    }
  }, []);

  return (
    <Fragment>
      <Header />
      <section className="section_padding">
        <div className="container">
          <div className="plans_box">
            <h3 className="fw_bold text_blue text-center">Plan For Every One</h3>
            <hr />
            <form className="px-5">
              <div className="mb-3 row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-12 col-form-label text_blue fw_bold f_22"
                >
                  Set a weekly schedule
                </label>
                <div className="col-sm-6 mb-4">
                  <select className="form-select bg-none me-3" aria-label="Default select example">
                    <option selected>30 Minutes Per Day</option>
                    <option value="1">45 Minutes Per Day</option>
                    <option value="1">60 Minutes Per Day</option>
                  </select>
                </div>
                <div className="col-sm-6 mb-4">
                  <select className="form-select bg-none me-3" aria-label="Default select example">
                    <option selected>3 Days Per Week</option>
                    <option value="1">4 Days Per Week</option>
                    <option value="1">5 Days Per Week</option>
                    <option value="1">6 Days Per Week</option>
                  </select>
                </div>

                <div className="col-sm-12">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-12 col-form-label text_blue fw_bold f_22"
                  >
                    Select a Commitment level
                  </label>

                  <div className="commint_level">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input btn-check"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        checked
                      />
                      <label
                        className="form-check-label position-relative w-100"
                        htmlFor="flexRadioDefault1"
                      >
                        1 Month
                      </label>
                    </div>

                    <div className="form-check ps-0">
                      <input
                        className="form-check-input btn-check"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label position-relative w-100"
                        htmlFor="flexRadioDefault2"
                      >
                        3 Month
                      </label>
                    </div>

                    <div className="form-check ps-0">
                      <input
                        className="form-check-input btn-check"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label position-relative w-100"
                        htmlFor="flexRadioDefault3"
                      >
                        12 Months
                        <span className="discount_text">25% off</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="plan_action_btn d-flex justify-content-between mt-5">
                    <button
                      className="btn btn-outline-secondary fw_bold plan_price_estimate w-100 me-4"
                      type="button"
                    >
                      $74 Per Month
                      <span className="discount_text">25% off</span>
                    </button>
                    <Link
                      to="/signup"
                      className="btn btn-outline-secondary fw_bold theme_btn2 w-100"
                      type="button"
                    >
                      Sign Up{' '}
                      <span className="next_btn">
                        <RightArrowIcon />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
      <MessageUs />
    </Fragment>
  );
};

export default PlanPage;
