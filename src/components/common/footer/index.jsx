import { Link } from 'react-router-dom';

// svg imports
import YoutubeIcon from '@svg/youtube';
import FacebookIcon from '@svg/facebook';
import InstagramIcon from '@svg/instagram';
import LinkedinIcon from '@svg/linkedin';
import TwitterIcon from '@svg/twitter';

const Footer = () => {
  return (
    <footer className="mt-0">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <ul className="list-unstyled d-flex mb-0">
            <li className="mb-0">
              <Link to="/privacy-policy" className="text_black f_14 me-3">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-0">
              <Link to="/terms&conditions" className="text_black f_14 me-3">
                Terms And Conditions
              </Link>
            </li>
            <li className="mb-0">
              <Link to="/#" className="text_black f_14 me-3">
                Jobs
              </Link>
            </li>
            <li className="mb-0">
              <Link to="/contact-us" className="text_black f_14 me-3">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="list-unstyled d-flex social_btns mb-0">
            <li className="mb-0">
              <Link to="/" className="text_black f_16">
                <span className="google_btn">
                  <YoutubeIcon />
                </span>
              </Link>
            </li>

            <li className="mb-0">
              <Link to="/" className="text_black f_16">
                <span className="fb_btn">
                  <FacebookIcon />
                </span>
              </Link>
            </li>

            <li className="mb-0">
              <Link to="/" className="text_black f_16">
                <span className="insta_btn">
                  <InstagramIcon />
                </span>
              </Link>
            </li>

            <li className="mb-0">
              <Link to="/" className="text_black f_16">
                <span className="linkedin_btn">
                  <LinkedinIcon />
                </span>
              </Link>
            </li>

            <li className="mb-0">
              <Link to="/" className="text_black f_16">
                <span className="twitter_btn">
                  <TwitterIcon />
                </span>
              </Link>
            </li>
          </ul>
          <p className="text_black mb-0 f_14">
            @Copyright By <span className="fw_che_regular text_blue2">Ni-Hao-World</span> &nbsp; |
            &nbsp; ALL RIGHTS RESERVED
          </p>
        </div>
      </div>

      {/* <!-- Download Apps section ends --> */}
    </footer>
  );
};

export default Footer;
