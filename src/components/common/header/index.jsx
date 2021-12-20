import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropsTypes from 'prop-types';
import Logo from '@assets/images/ni-hao-logo.png';
import Button from '../elements/button';

const Header = ({ className }) => {
  const { pathname } = useLocation();

  const myFunction = () => {
    const navbar = document.querySelector('#navbar');
    if (navbar !== null) {
      if (window.pageYOffset > 80) {
        navbar.classList.add('nav_active');
      } else {
        navbar.classList.remove('nav_active');
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', () => myFunction());
  }, []);
  return (
    <header className={`${className ? className : 'fixed-top'}`}>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-none">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="img" className="img-fluid" />
          </Link>
          <Button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 custom_nav">
              <li className="nav-item">
                <Link
                  to="/our-courses"
                  className={`nav-link pe-4 ${
                    pathname === '/our-courses' || pathname === '/signup' || pathname === '/login'
                      ? 'active'
                      : ''
                  }`}
                >
                  Our Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pe-4" to="/plan-page">
                  Prices
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/kids" className="nav-link">
                  For Kids
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <select
                className="form-select custom_lang_select bg-none me-3"
                aria-label="Default select example"
                defaultValue="0"
              >
                <option value="0"> English</option>
                <option value="1">Arabic</option>
                <option value="2"> Chinese </option>
              </select>
              <Link
                to="/login"
                className="btn btn-outline-success login_btn fw_bold me-3"
                role="button"
              >
                Login
              </Link>
              <div className="dropdown signup_btn">
                <Button
                  className="btn btn-secondary dropdown-toggle fw_bold"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Signup
                </Button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <Link className="dropdown-item" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/signup_student">
                      As Student
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item border_bottom_none" to="/signup_company">
                      As An Employee
                    </Link>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  className: PropsTypes.string,
};

export default Header;
