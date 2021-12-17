import { Link } from 'react-router-dom';
import Input from '@components/common/elements/inputField';

const PrivateTutorSection = () => {
  return (
    <section className="banner_bg position-relative">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="banner_text">
              <h1 className="fw_bold text_blue">Say Hello To Your Private Chinese Tutor</h1>
              <p className="f_18 text_black">
                Become Fluent Faster Through One-On-One Video Chat Lessons Tailored To Your Goals.
              </p>
              <div className="input-group mb-3 home_input_group mt-4">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <Link
                  to="/welcome"
                  role="buttom"
                  className="btn btn-outline-secondary fw_bold"
                  type="button"
                  id="button-addon2"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateTutorSection;
