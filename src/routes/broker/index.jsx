import React, { Fragment } from 'react';
import Sidebar from './Sidebar';

import ThickGreenIcon from '@svg/thick_green.svg';
import CloseRedIcon from '@svg/close_red.svg';
import ProfileIcon from '@svg/profile-icon.svg';
import LogoutRedIcon from '@svg/logout-red.svg';
import NotificationIcon from '@svg/notification-icon.svg';
import MenuBarIcon from '@svg/menu-bar.svg';

import UserDrop from '@images/user-drop.png';
import StudentImage from '@images/student-img.png';
import UserImage from '@images/user-img.png';

const Broker = () => {
  return (
    <Fragment>
      <div class="wrapper">
        {/* sidebar */}
        <Sidebar />

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
                        <img src={NotificationIcon} alt="NotificationIcon" />
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
                          <img class="me-1" src={UserImage} alt="UserImage" />
                          <span>
                            Belle
                            <img class="ps-5" src={UserDrop} alt="UserDrop  " />
                          </span>
                        </button>
                        <ul
                          class="dropdown-menu top_drop rounded-3 border-0 shadow-lg"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a class="dropdown-item large bg-transparent px-3" href="#">
                              <img src={ProfileIcon} alt="ProfileIcon" width="17px" />{' '}
                              Profile
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item large bg-transparent px-3" href="#">
                              <img src={LogoutRedIcon} alt="LogoutRedIcon" width="17px" />{' '}
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
                                src={StudentImage}
                                alt="StudentImage"
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
                                  <img src={ThickGreenIcon} alt="ThickGreenIcon" />
                                </span>{' '}
                                Accept
                              </button>
                              <button type="button" class="btn btn-danger but-width ms-1">
                                <span class="badge bg-white text-white rounded-pill">
                                  <img src={CloseRedIcon} alt="CloseRedIcon" />
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
                                  <img src={MenuBarIcon} alt="MenuBarIcon" />
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
                                src={StudentImage}
                                alt="StudentImage"
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
                                  <img src={ThickGreenIcon} alt="ThickGreenIcon" />
                                </span>{' '}
                                Accept
                              </button>
                              <button type="button" class="btn btn-danger but-width ms-1">
                                <span class="badge bg-white text-white rounded-pill">
                                  <img src={CloseRedIcon} alt="CloseRedIcon" />
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
                                  <img src={MenuBarIcon} alt="MenuBarIcon" />
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
                                src={StudentImage}
                                alt="StudentImage"
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
                                  <img src={ThickGreenIcon} alt="ThickGreenIcon" />
                                </span>{' '}
                                Accept
                              </button>
                              <button type="button" class="btn btn-danger but-width ms-1">
                                <span class="badge bg-white text-white rounded-pill">
                                  <img src={CloseRedIcon} alt="CloseRedIcon" />
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
                                  <img src={MenuBarIcon} alt="MenuBarIcon" />
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
                                src={StudentImage}
                                alt="StudentImage"
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
                                  <img src={ThickGreenIcon} alt="ThickGreenIcon" />
                                </span>{' '}
                                Accept
                              </button>
                              <button type="button" class="btn btn-danger but-width ms-1">
                                <span class="badge bg-white text-white rounded-pill">
                                  <img src={CloseRedIcon} alt="CloseRedIcon" />
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
                                  <img src={MenuBarIcon} alt="MenuBarIcon" />
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
