import { useState } from 'react';
import { Link } from 'react-router-dom';

// common components imports
import Button from '@commonElements/button';
import Input from '@commonElements/inputField';

// constants
import { plansPerDayOptions, plansMonthOptions, plansWeekOptions } from './planContants';
const Plans = () => {
  const [weeklySchedule, setweeklySchedule] = useState('perday');
  const [activePlan, setActivePlan] = useState('flexRadioDefault15');

  const renderDayWeekPlan = () => {
    if (weeklySchedule === 'perday') {
      return (
        <div
          className={`tab-pane fade ${weeklySchedule === 'perday' ? 'show active' : ''}`}
          id="pills-home2"
          role="tabpanel"
          aria-labelledby="pills-home-tab2"
        >
          {plansPerDayOptions.map((dayPLan, idx) => (
            <div className="form-check ps-0" key={idx}>
              <Input
                className="form-check-input btn-check"
                type="radio"
                name="flexRadioDefault"
                id={dayPLan.id}
                onChange={() => setActivePlan(dayPLan.id)}
                checked={activePlan === dayPLan.id ? true : false}
              />
              <label className="form-check-label position-relative w-100" htmlFor={dayPLan.id}>
                {dayPLan.minutes}
                <span className="checkbox_tick">{dayPLan.radio}</span>
              </label>
            </div>
          ))}
        </div>
      );
    } else
      return (
        <div
          className={`tab-pane fade ${weeklySchedule === 'perweek' ? 'show active' : ''}`}
          id="pills-profile2"
          role="tabpanel"
          aria-labelledby="pills-profile-tab2"
        >
          {plansWeekOptions.map((weekPlan, idx) => (
            <div className="form-check ps-0" key={idx}>
              <input
                className="form-check-input btn-check"
                type="radio"
                name="flexRadioDefault"
                id={weekPlan.id}
                onChange={() => setActivePlan(weekPlan.id)}
                checked={activePlan === weekPlan.id ? true : false}
              />
              <label className="form-check-label position-relative w-100" htmlFor={weekPlan.id}>
                {weekPlan.week}
                <span className="checkbox_tick">{weekPlan.radio}</span>
              </label>
            </div>
          ))}
        </div>
      );
  };

  const renderMonthPlan = () => {
    return plansMonthOptions.map((monthplan, idx) => (
      <div className="form-check ps-0" key={idx}>
        <Input
          className="form-check-input btn-check"
          type="radio"
          name="flexRadioDefault"
          id={monthplan.id}
          onChange={() => setActivePlan(monthplan.id)}
          checked={activePlan === monthplan.id ? true : false}
        />
        <label className="form-check-label w-100 d-flex align-items-center" htmlFor={monthplan.id}>
          <span className="checkbox_tick2 me-4">{monthplan.radio}</span>
          <div className="d-flex justify-content-between align-items-center flex-grow-1">
            <p className="f_20 fw_regular mb-0 d-flex flex-column">
              {monthplan.month}
              {monthplan.savePercent && (
                <span className="plan_savings">Save {monthplan.savePercent}</span>
              )}
            </p>
            <p className="f_16 fw_regular mb-0 d-flex align-items-center text_blue">
              <span className="plan_charges">{monthplan.dollar}</span> / Month
            </p>
          </div>
        </label>
      </div>
    ));
  };

  return (
    <section className="section_padding">
      <div className="container">
        <div className="banner_text px-5 text-center mb-5">
          <h1 className="fw_bold text_blue">A Plan For Everyone</h1>
          <p className="f_18 text_black">Choose Your Plan.</p>
        </div>
        <div className="row mb-5">
          <div className="col-sm-6">
            <div className="plan_card">
              <p className="f_18 text_black text-center mb-3">Set A Weekly Schedule</p>
              <div className="text-center">
                <ul className="nav nav-pills mb-5 plan_nav_tabs" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <Button
                      className={`nav-link d-flex align-items-center ${
                        weeklySchedule === 'perday' ? 'active' : ''
                      }`}
                      id="pills-home-tab2"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home2"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected={weeklySchedule === 'perday' ? true : false}
                      onClick={() => setweeklySchedule('perday')}
                    >
                      Per Day
                    </Button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Button
                      className={`nav-link d-flex align-items-center ${
                        weeklySchedule === 'perweek' ? 'active' : ''
                      }`}
                      id="pills-profile-tab2"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile2"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected={weeklySchedule === 'perweek' ? true : false}
                      onClick={() => setweeklySchedule('perweek')}
                    >
                      Per Week
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="pills-tabContent">
                {renderDayWeekPlan()}
              </div>
            </div>
          </div>
          <div className="col-sm-6 ps-5 align-self-center">
            <div className="plan_right_side">
              {renderMonthPlan()}
              <p className="f_16 text_blue text-center">
                Change, Pause Or Cancel Your Plan At Any Time.
              </p>
            </div>
          </div>
        </div>
        <div className="d-block text-center">
          <Link
            className="btn btn-outline-secondary fw_bold theme_btn ms-auto "
            role="button"
            to="/signup"
          >
            Sign Up
            <span className="ms-4">
              <svg width="22.518" height="10.907" viewBox="0 0 22.518 10.907">
                <g id="right-arrow_10_" data-name="right-arrow (10)" transform="translate(0 -132)">
                  <g id="Group_37060" data-name="Group 37060" transform="translate(0 132)">
                    <path
                      id="Path_28511"
                      data-name="Path 28511"
                      d="M22.26,136.831h0l-4.6-4.574a.88.88,0,0,0-1.241,1.247l3.086,3.071H.88a.88.88,0,1,0,0,1.759H19.508L16.422,141.4a.88.88,0,0,0,1.241,1.247l4.6-4.574h0A.88.88,0,0,0,22.26,136.831Z"
                      transform="translate(0 -132)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Plans;
