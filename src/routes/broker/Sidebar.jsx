import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import brokerPageLayout from './brokerPageLayout.json';

import SideBarLogo from '@images/sidebar-logo.png';
import NiHaoIcon from '@images/ni-hao-icon.png';
import ToggleArrow from '@images/toggle-arrow.png';

import DashboardIcon from '@svg/dashboard-icon.svg';
import SurveyIcon from '@svg/survey-icon.svg';
import FeedbackIcon from '@svg/feedback-icon.svg';
import AdminIcon from '@svg/admin-icon.svg';
import SupportIcon from '@svg/support-icon.svg';
import SettingIcon from '@svg/setting-icon.svg';

import ContactIcon from '@svg/contact-icon.svg';
import LogoutIcon from '@svg/logout-icon.svg';

const Sidebar = () => {
  console.log('sidebarData brokerPageLayout', brokerPageLayout);
  return (
    <Fragment>
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
              {brokerPageLayout[0].dashboardRoutes.map(({ id, name, route }) => (
                <li key={id}>
                  <Link to={route}>{name}</Link>
                </li>
              ))}
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
              {brokerPageLayout[1].SurveyRoutes.map(({ id, name, route }) => (
                <li key={id}>
                  <Link to={route}>{name}</Link>
                </li>
              ))}
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
              {brokerPageLayout[2].AdminRoutes.map(({ id, name, route }) => (
                <li key={id}>
                  <Link to={route}>{name}</Link>
                </li>
              ))}
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
    </Fragment>
  );
};

export default Sidebar;
