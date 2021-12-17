import { Link } from 'react-router-dom';
import chineseImmersion from '@assets/images/chinese_immersion_img.png';

const ChineseImmersion = () => {
  return (
    <section className="section_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <img src={chineseImmersion} alt="img" className="img-fluid" />
          </div>
          <div className="col-sm-7 align-self-center">
            <div className="banner_text px-5">
              <h1 className="fw_bold text_blue">
                Chinese Immersion From
                <br />
                Anywhere
              </h1>
              <p className="f_18 text_black">
                Build Chinese Proficiency And Confidence Through Real Conversations With Friendly
                Tutors From The China , US, UK, Australia, And More. All You Need Is Your Device!.
              </p>
              <Link
                to="/signup"
                className="btn btn-outline-secondary fw_bold theme_btn"
                role="button"
                id="button-addon2"
              >
                Start Learing Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChineseImmersion;
