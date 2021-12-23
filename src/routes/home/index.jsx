import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// common components imports
import Header from '@common/header';
import Footer from '@common/footer';
import MessageUs from '@common/messageUs';

// common elements imports
import Button from '../../components/common/elements/button';
import Input from '../../components/common/elements/inputField';

// image imports
import teacher_img from '@images/teacher_img.png';

// svg imports
import PracticePlayIcon from '../../assets/svg/practicePlay';
import ActiveHeartIcon from '../../assets/svg/activeHeart';
import SearchTutorIcon from '../../assets/svg/searchHome';
import ClearCloseIcon from '../../assets/svg/close';
import HeartActiveIcon from '../../assets/svg/heartIcon';
import ChinaFlagIcon from '../../assets/svg/chinaFlag';
import ActiveStarIcon from '../../assets/svg/activeStar';
import GraduationCapIcon from '../../assets/svg/graduationCap';
import MessageIcon from '../../assets/svg/message';
import CalendarHomePageIcon from '../../assets/svg/calendarHomepage';
import DialorIcon from '../../assets/svg/dialor';

const Home = () => {
  const [showFavourite, setShowFavourite] = useState(false);

  useEffect(() => {
    if (document) {
      const root = document.querySelector('#root');
      if (root !== null) root.classList.add('background_gray');
    }
  }, []);
  return (
    <Fragment>
      <Header />
      {/* <!-- Filters section Starts --> */}
      <section className="login_welcome section_padding mt-5">
        <div className="container position-relative">
          <div className="text-center mb-5">
            <h2 className="fw_regular text-white f_32 mb-3">
              <span className="fw_bold">Welcome Back </span> Amanda To Ni-Hao-World
            </h2>
            <Button
              className="btn btn-secondary chinese_btn text_dark me-3"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#practice_popup"
            >
              <span className="me-1">
                <PracticePlayIcon />
              </span>
              Practice Chinese
            </Button>
            <Button className="btn btn-outline-secondary white_outline_btn" type="button">
              Day 2 of 5 - 30 minutes
            </Button>
          </div>
        </div>
      </section>
      {/* <!-- Filters section Ends --> */}

      {/* <!-- Profiles Section Starts --> */}
      <section className="">
        <div className="container">
          <div className="filters_cards">
            <div className="d-flex align-items-center">
              <h3 className="text_blue fw_bold mb-0 me-4">Find a Tutor</h3>
              <div className="filters_tabs">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <Button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                      onClick={() => setShowFavourite(false)}
                    >
                      All
                    </Button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                      onClick={() => setShowFavourite(true)}
                    >
                      Online
                    </Button>
                  </li>
                  {showFavourite && (
                    <li className="nav-item" role="presentation" id="kk">
                      <Button
                        className="nav-link"
                        id="pills-heart-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-heart"
                        type="button"
                        role="tab"
                        aria-controls="pills-heart"
                        aria-selected="false"
                      >
                        <span className="online_icon_active">
                          <ActiveHeartIcon />
                        </span>
                      </Button>
                    </li>
                  )}
                  <li className="nav-item" role="presentation">
                    <Button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                      onClick={() => setShowFavourite(false)}
                    >
                      Favorites
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <form className="d-flex">
                <div className="mb-3 filters_search position-relative me-3">
                  <Input
                    type="email"
                    className="form-control ps-4"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Name, Language, hobby"
                  />
                  <span>
                    <SearchTutorIcon />
                  </span>
                </div>
                <ul className="d-flex align-items-center ps-0 position-relative">
                  <li className="nav-item dropdown me-3">
                    <Button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Lesson level
                    </Button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <span className="clear_filter f-14">
                        <ClearCloseIcon />
                        Clear
                      </span>
                      <li>
                        <label className="checkbox-container">
                          Beginner
                          <Input type="checkbox" checked="checked" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          Intermediate
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          Advanced
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown me-3">
                    <Button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Ni Hao World Course
                    </Button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <span className="clear_filter f-14">
                        <ClearCloseIcon />
                        Clear
                      </span>
                      <li>
                        <label className="checkbox-container">
                          Basic Knowledge and Words
                          <Input type="checkbox" checked="checked" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          Basic Conversation Topics
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          Intermediate Conversation Topics
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          Advanced Conversation Topics
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          Chinese Conversation
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          Business Chinese
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          Advanced Business Chinese
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          Workshop
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>

                      <li>
                        <label className="checkbox-container">
                          The Exciting World of Startups and Big markets in China for the traders
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>

                      <li>
                        <label className="checkbox-container">
                          Life in the Internet Age
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>

                      <li>
                        <label className="checkbox-container">
                          Caring for Our Planet
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>

                      <li>
                        <label className="checkbox-container">
                          Healthy Mind & Healthy Body
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>

                      <li>
                        <label className="checkbox-container">
                          Hobbies and skills
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>

                      <li>
                        <label className="checkbox-container">
                          Raising Children
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>

                      <li>
                        <label className="checkbox-container">
                          Exam Preparation
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>

                      <li>
                        <label className="checkbox-container">
                          Summaries
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown me-3">
                    <Button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Second Language
                    </Button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <span className="clear_filter f-14">
                        <ClearCloseIcon />
                        Clear
                      </span>

                      <li>
                        <label className="checkbox-container">
                          Northern China Accent
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          English
                          <Input type="checkbox" checked="checked" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          Arabic
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          French
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown me-3">
                    <Button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Tutor Personality
                    </Button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <span className="clear_filter f-14">
                        <ClearCloseIcon />
                        Clear
                      </span>
                      <li>
                        <label className="checkbox-container">
                          Kind And Patient
                          <Input type="checkbox" checked="checked" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          Fun And Gregarious
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          Scholarly And Knowledgeable
                          <Input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown has-megamenu">
                    <Button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Availability
                    </Button>
                    <div className="dropdown-menu megamenu" role="menu">
                      <div className="row g-3">
                        <div className="col-sm-6">
                          <div className="content">
                            <div className="calendar-container">
                              <div className="calendar">
                                <div className="year-header">
                                  <span className="left-button fa fa-chevron-left" id="prev">
                                    {' '}
                                  </span>
                                  <span className="year" id="label">
                                    2021
                                  </span>
                                  <span className="right-button fa fa-chevron-right" id="next">
                                    {' '}
                                  </span>
                                </div>
                                <table className="months-table w-100">
                                  <tbody>
                                    <tr className="months-row">
                                      <td className="month">Jan</td>
                                      <td className="month">Feb</td>
                                      <td className="month">Mar</td>
                                      <td className="month">Apr</td>
                                      <td className="month">May</td>
                                      <td className="month">Jun</td>
                                      <td className="month">Jul</td>
                                      <td className="month">Aug</td>
                                      <td className="month">Sep</td>
                                      <td className="month">Oct</td>
                                      <td className="month active-month">Nov</td>
                                      <td className="month">Dec</td>
                                    </tr>
                                  </tbody>
                                </table>

                                <table className="days-table w-100">
                                  <tbody>
                                    <tr>
                                      <td className="day">Sun</td>
                                      <td className="day">Mon</td>
                                      <td className="day">Tue</td>
                                      <td className="day">Wed</td>
                                      <td className="day">Thu</td>
                                      <td className="day">Fri</td>
                                      <td className="day">Sat</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="frame">
                                  <table className="dates-table w-100">
                                    <tbody className="tbody">
                                      <tr className="table-row"></tr>
                                      <tr className="table-row">
                                        <td className="table-date nil"></td>
                                        <td className="table-date">
                                          <span>1</span>
                                        </td>
                                        <td className="table-date">
                                          <span>2</span>
                                        </td>
                                        <td className="table-date">
                                          <span>3</span>
                                        </td>
                                        <td className="table-date">
                                          <span>4</span>
                                        </td>
                                        <td className="table-date">
                                          <span>5</span>
                                        </td>
                                        <td className="table-date">
                                          <span>6</span>
                                        </td>
                                      </tr>
                                      <tr className="table-row">
                                        <td className="table-date">7</td>
                                        <td className="table-date">8</td>
                                        <td className="table-date">9</td>
                                        <td className="table-date">10</td>
                                        <td className="table-date">11</td>
                                        <td className="table-date">12</td>
                                        <td className="table-date">13</td>
                                      </tr>
                                      <tr className="table-row">
                                        <td className="table-date">14</td>
                                        <td className="table-date">15</td>
                                        <td className="table-date">16</td>
                                        <td className="table-date">17</td>
                                        <td className="table-date">18</td>
                                        <td className="table-date">19</td>
                                        <td className="table-date">20</td>
                                      </tr>
                                      <tr className="table-row">
                                        <td className="table-date">21</td>
                                        <td className="table-date">22</td>
                                        <td className="table-date">23</td>
                                        <td className="table-date">24</td>
                                        <td className="table-date">25</td>
                                        <td className="table-date">26</td>
                                        <td className="table-date active-date">27</td>
                                      </tr>
                                      <tr className="table-row">
                                        <td className="table-date">28</td>
                                        <td className="table-date">29</td>
                                        <td className="table-date">30</td>
                                        <td className="table-date nil"></td>
                                        <td className="table-date nil"></td>
                                        <td className="table-date nil"></td>
                                        <td className="table-date nil"></td>
                                      </tr>
                                      <tr className="table-row">
                                        <td className="table-date nil"></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end col-3 --> */}
                        <div className="col-sm-3"></div>
                        {/* <!-- end col-3 --> */}
                      </div>
                      {/* <!-- end row --> */}
                    </div>
                    {/* <!-- dropdown-mega-menu.// --> */}
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <div className="tab-content mt-5" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row">
                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                      </div>
                      <div className="profile_details">
                        <Link to="/tutor-details">
                          <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        </Link>
                        <span className="heart_icon">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon /> China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1">Busy In 5 Minute</p>
                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Link
                          to="/messages"
                          role="button"
                          className="btn btn-outline-primary fw_bold message_btn"
                        >
                          <span className="me-2">
                            <MessageIcon />
                          </span>
                          Message
                        </Link>
                        <Link
                          to="/tutor-details"
                          role="button"
                          className="btn btn-outline-secondary fw_bold schedule_btn"
                        >
                          <span className="me-2">
                            <CalendarHomePageIcon />
                          </span>
                          Schedule
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <Link to="/tutor-details">
                          <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        </Link>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="hours_text mb-1">
                        500+ <span>Hours</span>
                      </p>
                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Link
                          to="/tutor-details"
                          role="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Link>
                        <Link
                          to="/video_call_setup"
                          role="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>

                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>

                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1 not_visible">Busy In 5 Minute</p>
                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                      </div>

                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>

                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1">Busy In 5 Minute</p>

                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold message_btn"
                        >
                          <span className="me-2">
                            <MessageIcon />
                          </span>
                          Message
                        </Button>
                        <Link
                          to="/tutor-details"
                          type="button"
                          className="btn btn-outline-secondary fw_bold schedule_btn"
                        >
                          <span className="me-2">
                            <CalendarHomePageIcon />
                          </span>
                          Schedule
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>

                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>

                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1 not_visible">Busy In 5 Minute</p>

                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1 not_visible">Busy In 5 Minute</p>

                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row">
                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>

                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1 not_visible">Busy In 5 Minute</p>
                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="hours_text mb-1">
                        500+ <span>Hours</span>
                      </p>
                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1 not_visible">Busy In 5 Minute</p>
                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn "
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1 not_visible">Busy In 5 Minute</p>
                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1 not_visible">Busy In 5 Minute</p>

                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1 not_visible">Busy In 5 Minute</p>

                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-heart"
              role="tabpanel"
              aria-labelledby="pills-heart-tab"
            >
              <div className="row">
                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>

                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1 not_visible">Busy In 5 Minute</p>
                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="hours_text mb-1">
                        500+ <span>Hours</span>
                      </p>
                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1 not_visible">Busy In 5 Minute</p>
                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1 not_visible">Busy In 5 Minute</p>
                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1 not_visible">Busy In 5 Minute</p>

                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1 not_visible">Busy In 5 Minute</p>

                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="row">
                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1">Busy In 5 Minute</p>
                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold message_btn"
                        >
                          <span className="me-2">
                            <MessageIcon />
                          </span>
                          Message
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold schedule_btn"
                        >
                          <span className="me-2">
                            <CalendarHomePageIcon />
                          </span>
                          Schedule
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="hours_text mb-1">
                        500+ <span>Hours</span>
                      </p>
                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1 not_visible">Busy In 5 Minute</p>
                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1">Busy In 5 Minute</p>

                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold message_btn"
                        >
                          <span className="me-2">
                            <MessageIcon />
                          </span>
                          Message
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold schedule_btn"
                        >
                          <span className="me-2">
                            <CalendarHomePageIcon />
                          </span>
                          Schedule
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1 not_visible">Busy In 5 Minute</p>

                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mb-4">
                  <div className="profile_card position-relative">
                    <div className="d-flex">
                      <div className="profile_img me-2">
                        <img src={teacher_img} alt="img" className="img-fluid" />
                        <span className="profile_online"></span>
                      </div>
                      <div className="profile_details">
                        <h5 className="text-dark fw_bold mb-0">Zheng Shuang</h5>
                        <span className="heart_icon_active">
                          <HeartActiveIcon />
                        </span>

                        <div className="d-flex ">
                          <span className="country_info text_gray d-block">
                            <ChinaFlagIcon />
                            China
                          </span>

                          <div className="ratings mb-1 d-block ms-3">
                            <span className="star_active">
                              <ActiveStarIcon />
                            </span>
                            <span>4.8</span>
                          </div>
                        </div>

                        <span className="country_info text_gray d-block">
                          English , Arabic , French
                        </span>
                        <span className="categories d-block mt-2 mb-3">
                          <span>500+ Chats</span>
                          <span>
                            <GraduationCapIcon />
                            Teaching Certificate
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="profile_description">
                      <p className="busy_text mb-1 not_visible">Busy In 5 Minute</p>

                      <p className="text_gray f_14">
                        Greetings! My Name Is Zheng .I Was Born, Raised And Educated In Canada. I
                        Would Like To Make Your Learning Journey A Pleasant One!
                      </p>
                      <div className="profile_btns d-flex justify-content-between mb-2">
                        <Button
                          type="button"
                          className="btn btn-outline-primary fw_bold schedule_btn"
                        >
                          Profile
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline-secondary fw_bold call_btn"
                        >
                          <span className="me-2">
                            <DialorIcon />
                          </span>
                          CALL
                        </Button>
                      </div>
                    </div>
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

export default Home;
