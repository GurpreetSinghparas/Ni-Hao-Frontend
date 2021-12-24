import React, { Fragment } from 'react';
import SideBarLogo from '@images/sidebar-logo.png';
import NiHaoIcon from '@images/ni-hao-icon.png';
import ToggleArrow from '@images/toggle-arrow.png';

// import NiHaoIcon from '@images/ni-hao-icon.png';
// import NiHaoIcon from '@images/ni-hao-icon.png';
// import NiHaoIcon from '@images/ni-hao-icon.png';

import DashboardIcon from '@svg/dashboard-icon.svg';
import SurveyIcon from '@svg/survey-icon.svg';
import FeedbackIcon from '@svg/feedback-icon.svg';
import AdminIcon from '@svg/admin-icon.svg';
import SupportIcon from '@svg/support-icon.svg';
import SettingIcon from '@svg/setting-icon.svg';

import ContactIcon from '@svg/contact-icon.svg';
import LogoutIcon from '@svg/logout-icon.svg';


const Broker = () => {
  return (
    <Fragment>
      <div class="wrapper">
        {/* sidebar */}
        <nav id="sidebar">
          <div class="sidebar-header">
            <div class="header_column position-relative">
              <h3>
                <img src={SideBarLogo} alt="SideBarLogo" />
              </h3>
              <strong>
                <img src={NiHaoIcon} alt="NiHaoIcon" />
              </strong>
              <div class="toggler" id="sidebarCollapse">
                <button type="button">
                  <img src={ToggleArrow} alt="ToggleArrow" />
                </button>
              </div>
              <div class="toggler_hide d-none" id="sidebarCollapse2">
                <button type="button">
                  <img src={ToggleArrow} alt="ToggleArrow" />
                </button>
              </div>
            </div>
          </div>
          <ul class="list-unstyled components">
            <li class="active">
              <a
                href="#dashboard"
                data-bs-toggle="collapse"
                class="dropdown-toggle"
                data-bs-target="#dashboard"
              >
                <span class="sidebar_icon me-2">
                  <img src={DashboardIcon} alt="DashboardIcon" />
                </span>
                <span class="side-text">Dashboard</span>
              </a>
              <ul class="collapse list-unstyled" id="dashboard">
                <li>
                  <a href="#">Website Survey</a>
                </li>
                <li>
                  <a href="#">Teacher Survey</a>
                </li>
                <li>
                  <a href="#">Students Survey</a>
                </li>
                <li>
                  <a href="#">New Survey</a>
                </li>
                <li>
                  <a href="#">Students</a>
                </li>
                <li>
                  <a href="#">Schools / Company</a>
                </li>
                <li>
                  <a href="#">Teachers</a>
                </li>
                <li>
                  <a href="#">Brokers</a>
                </li>
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">Admins</a>
                </li>
                <li>
                  <a href="#">About Service</a>
                </li>
                <li>
                  <a href="#">Visitors</a>
                </li>
                <li>
                  <a href="#">Campaigns</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#survey"
                data-bs-toggle="collapse"
                class="dropdown-toggle"
                data-bs-target="#survey"
              >
                <span class="sidebar_icon me-2">
                  <img src={SurveyIcon} alt="SurveyIcon" />
                </span>
                <span class="side-text">Survey Management</span>
              </a>
              <ul class="collapse list-unstyled" id="survey">
                <li>
                  <a href="#">Website Survey</a>
                </li>
                <li>
                  <a href="#">Teacher Survey</a>
                </li>
                <li>
                  <a href="#">Students Survey</a>
                </li>
                <li>
                  <a href="#">New Survey</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#admin"
                data-bs-toggle="collapse"
                class="dropdown-toggle"
                data-bs-target="#admin"
              >
                <span class="sidebar_icon me-2">
                  <img src={AdminIcon} alt="AdminIcon" />
                </span>
                <span class="side-text">Admin Management</span>
              </a>
              <ul class="collapse list-unstyled" id="admin">
                <li>
                  <a href="#">Create New Admin</a>
                </li>
                <li>
                  <a href="#">Schools</a>
                </li>
                <li>
                  <a href="#">Companies</a>
                </li>
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">Subscriptions</a>
                </li>
                <li>
                  <a href="#">Brokers</a>
                </li>
                <li>
                  <a href="#">Students</a>
                </li>
                <li>
                  <a href="#">Kids</a>
                </li>
                <li>
                  <a href="#">Teachers</a>
                </li>
                <li>
                  <a href="#">Emails & Notifications</a>
                </li>
                <li>
                  <a href="#">Prices</a>
                </li>
                <li>
                  <a href="#">Single Teacher Page</a>
                </li>
                <li>
                  <a href="#">Single Student Page</a>
                </li>
                <li>
                  <a href="#">Single Broker Page</a>
                </li>
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">Admins</a>
                </li>
                <li>
                  <a href="#">Campaigns</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span class="sidebar_icon me-2">
                  <img src={FeedbackIcon} alt="FeedbackIcon" />
                </span>
                <span class="side-text">Feedbacks</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="sidebar_icon me-2">
                  <img src={SupportIcon} alt="SupportIcon" />
                </span>
                <span class="side-text">Support</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="sidebar_icon me-2">
                  <img src={SettingIcon} alt="SettingIcon" />
                </span>
                <span class="side-text">Settings</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="sidebar_icon me-2">
                  <img src={ContactIcon} alt="ContactIcon" />
                </span>
                <span class="side-text">Contact Us</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="sidebar_icon me-2">
                  <img src={LogoutIcon} alt="LogoutIcon" />
                </span>
                <span class="side-text">Logout</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* page content  */}
        <div id="content">
          <div class="content_wrapper">
            {/* top-nav */}
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
                <button
                  class="btn btn-dark d-inline-block d-lg-none ml-auto"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="fas fa-align-justify"></i>
                </button>
                <h4 class="fw-bold mb-0">Brokers </h4>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="nav navbar-nav ms-auto">
                    <li class="nav-item active me-3">
                      <a class="nav-link notify text-center position-relative" href="#">
                        <img src="assets/img/notification-icon.svg" alt="icon" />
                        <span class="notify_point position-absolute"></span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <div class="dropdown">
                        <button
                          class="dropdown-toggle btn"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img class="me-1" src="assets/img/user-img.png" alt="image" />
                          <span>
                            Belle
                            <img class="ps-5" src="assets/img/user-drop.png" alt="icon" />
                          </span>
                        </button>
                        <ul
                          class="dropdown-menu top_drop rounded-3 border-0 shadow-lg"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a class="dropdown-item large bg-transparent px-3" href="#">
                              <img src="assets/img/profile-icon.svg" alt="image" width="17px" />{' '}
                              Profile
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item large bg-transparent px-3" href="#">
                              <img src="assets/img/logout-red.svg" alt="image" width="17px" />{' '}
                              Logout
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/*top-nav */}

            {/* survey type start */}
            <div class="row">
              <div class="custom_card">
                <div class="custom_card_hd d-flex justify-content-between mb-0 align-items-center">
                  <h5 class="hd_grey_cl mb-0">All Users List with the broker requests</h5>
                </div>
                <div class="custom_card_body">
                  <div class="table-responsive pb-3 table-scroll">
                    <table id="student-table" class="table">
                      <thead>
                        <tr>
                          <th>Broker Id </th>
                          <th>Users</th>
                          <th>Country</th>
                          <th>Type of </th>
                          <th>View Shared Links </th>
                          <th>View Plan To Promote us </th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#5345345</td>
                          <td>
                            <div class="img-block d-flex">
                              <img
                                class="rounded-circle"
                                width="35"
                                height="35"
                                src="assets/img/student-img.png"
                                alt=""
                              />
                              <span class="ps-2">John Deo</span>
                            </div>
                          </td>
                          <td>USA</td>
                          <td>
                            <span class="green_text">Student </span>{' '}
                          </td>
                          <td>
                            <a href="https://marvelapp.com">https://marvelapp.com....</a>
                          </td>
                          <td>
                            <div class="dec_pargh">
                              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                              consectetur{' '}
                            </div>
                          </td>
                          <td>
                            <a href="javascript:;" class="d-flex align-items-center">
                              <span class="green-circle"></span>Activated
                            </a>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <button type="button" class="btn but-accept but-width">
                                <span class="badge bg-white text-white rounded-pill">
                                  <img src="assets/img/thick_green.svg" />
                                </span>{' '}
                                Accept
                              </button>
                              <button type="button" class="btn btn-danger but-width ms-1">
                                <span class="badge bg-white text-white rounded-pill">
                                  <img src="assets/img/close_red.svg" />
                                </span>{' '}
                                Reject
                              </button>

                              <div class="dropdown">
                                <button
                                  class="dropdown-toggle border-0 bg-transparent"
                                  id="dropdownMenuButton2"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <img src="assets/img/menu-bar.svg" />
                                </button>
                                <ul
                                  class="dropdown-menu dropdown-menu-dark bg-white rounded-3 shadow-lg border-0"
                                  aria-labelledby="dropdownMenuButton2"
                                >
                                  <li>
                                    <a
                                      class="dropdown-item active large bg-transparent px-3 text-dark"
                                      href="#"
                                    >
                                      Activate
                                    </a>
                                  </li>
                                  <li>
                                    <hr class="dropdown-divider" />
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item large bg-transparent px-3 text-dark"
                                      href="#"
                                    >
                                      Deactivate
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>#5345345</td>
                          <td>
                            <div class="img-block d-flex">
                              <img
                                class="rounded-circle"
                                width="35"
                                height="35"
                                src="assets/img/student-img.png"
                                alt=""
                              />
                              <span class="ps-2">John Deo</span>
                            </div>
                          </td>
                          <td>USA</td>
                          <td>
                            <span class="green_text">Student </span>{' '}
                          </td>
                          <td>
                            <a href="https://marvelapp.com">https://marvelapp.com....</a>
                          </td>
                          <td>
                            <div class="dec_pargh">
                              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                              consectetur{' '}
                            </div>
                          </td>
                          <td>
                            <a href="javascript:;" class="d-flex align-items-center">
                              <span class="green-circle"></span>Activated
                            </a>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <button type="button" class="btn but-accept but-width">
                                <span class="badge bg-white text-white rounded-pill">
                                  <img src="assets/img/thick_green.svg" />
                                </span>{' '}
                                Accept
                              </button>
                              <button type="button" class="btn btn-danger but-width ms-1">
                                <span class="badge bg-white text-white rounded-pill">
                                  <img src="assets/img/close_red.svg" />
                                </span>{' '}
                                Reject
                              </button>

                              <div class="dropdown">
                                <button
                                  class="dropdown-toggle border-0 bg-transparent"
                                  id="dropdownMenuButton2"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <img src="assets/img/menu-bar.svg" />
                                </button>
                                <ul
                                  class="dropdown-menu dropdown-menu-dark bg-white rounded-3 shadow-lg border-0"
                                  aria-labelledby="dropdownMenuButton2"
                                >
                                  <li>
                                    <a
                                      class="dropdown-item active large bg-transparent px-3 text-dark"
                                      href="#"
                                    >
                                      Activate
                                    </a>
                                  </li>
                                  <li>
                                    <hr class="dropdown-divider" />
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item large bg-transparent px-3 text-dark"
                                      href="#"
                                    >
                                      Deactivate
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>#5345345</td>
                          <td>
                            <div class="img-block d-flex">
                              <img
                                class="rounded-circle"
                                width="35"
                                height="35"
                                src="assets/img/student-img.png"
                                alt=""
                              />
                              <span class="ps-2">John Deo</span>
                            </div>
                          </td>
                          <td>USA</td>
                          <td>
                            <span class="green_text">Student </span>{' '}
                          </td>
                          <td>
                            <a href="https://marvelapp.com">https://marvelapp.com....</a>
                          </td>
                          <td>
                            <div class="dec_pargh">
                              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                              consectetur{' '}
                            </div>
                          </td>
                          <td>
                            <a href="javascript:;" class="d-flex align-items-center">
                              <span class="green-circle"></span>Activated
                            </a>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <button type="button" class="btn but-accept but-width">
                                <span class="badge bg-white text-white rounded-pill">
                                  <img src="assets/img/thick_green.svg" />
                                </span>{' '}
                                Accept
                              </button>
                              <button type="button" class="btn btn-danger but-width ms-1">
                                <span class="badge bg-white text-white rounded-pill">
                                  <img src="assets/img/close_red.svg" />
                                </span>{' '}
                                Reject
                              </button>

                              <div class="dropdown">
                                <button
                                  class="dropdown-toggle border-0 bg-transparent"
                                  id="dropdownMenuButton2"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <img src="assets/img/menu-bar.svg" />
                                </button>
                                <ul
                                  class="dropdown-menu dropdown-menu-dark bg-white rounded-3 shadow-lg border-0"
                                  aria-labelledby="dropdownMenuButton2"
                                >
                                  <li>
                                    <a
                                      class="dropdown-item active large bg-transparent px-3 text-dark"
                                      href="#"
                                    >
                                      Activate
                                    </a>
                                  </li>
                                  <li>
                                    <hr class="dropdown-divider" />
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item large bg-transparent px-3 text-dark"
                                      href="#"
                                    >
                                      Deactivate
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>#5345345</td>
                          <td>
                            <div class="img-block d-flex">
                              <img
                                class="rounded-circle"
                                width="35"
                                height="35"
                                src="assets/img/student-img.png"
                                alt=""
                              />
                              <span class="ps-2">John Deo</span>
                            </div>
                          </td>
                          <td>USA</td>
                          <td>
                            <span class="green_text">Student </span>{' '}
                          </td>
                          <td>
                            <a href="https://marvelapp.com">https://marvelapp.com....</a>
                          </td>
                          <td>
                            <div class="dec_pargh">
                              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                              consectetur{' '}
                            </div>
                          </td>
                          <td>
                            <a href="javascript:;" class="d-flex align-items-center">
                              <span class="green-circle"></span>Activated
                            </a>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <button type="button" class="btn but-accept but-width">
                                <span class="badge bg-white text-white rounded-pill">
                                  <img src="assets/img/thick_green.svg" />
                                </span>{' '}
                                Accept
                              </button>
                              <button type="button" class="btn btn-danger but-width ms-1">
                                <span class="badge bg-white text-white rounded-pill">
                                  <img src="assets/img/close_red.svg" />
                                </span>{' '}
                                Reject
                              </button>

                              <div class="dropdown">
                                <button
                                  class="dropdown-toggle border-0 bg-transparent"
                                  id="dropdownMenuButton2"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <img src="assets/img/menu-bar.svg" />
                                </button>
                                <ul
                                  class="dropdown-menu dropdown-menu-dark bg-white rounded-3 shadow-lg border-0"
                                  aria-labelledby="dropdownMenuButton2"
                                >
                                  <li>
                                    <a
                                      class="dropdown-item active large bg-transparent px-3 text-dark"
                                      href="#"
                                    >
                                      Activate
                                    </a>
                                  </li>
                                  <li>
                                    <hr class="dropdown-divider" />
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item large bg-transparent px-3 text-dark"
                                      href="#"
                                    >
                                      Deactivate
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Broker;
