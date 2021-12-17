import dummy_img from '@assets/images/dummy_img.png';
import dummy_img2 from '@assets/images/dummy_img2.png';
import dummy_img3 from '@assets/images/dummy_img3.png';

const Organization = () => {
  return (
    <section className="section_padding organisation_bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 mt-8">
            <div className="organisation_bg_section text-center">
              <img src={dummy_img} alt="img" className="img-fluid mb-3" />
              <p className="f_18 text_blue fw_bold mb-1">For Individuals</p>
              <p className="f_14 mb-1">
                Empower Your Team With Practical, Real-World Chinese Skill
              </p>
              <button className="btn fw_bold mx-auto d-block text_blue2" type="button">
                View Detail
                <span className="ms-2">
                  <svg width="18.151" height="8.792" viewBox="0 0 18.151 8.792">
                    <g
                      id="right-arrow_11_"
                      data-name="right-arrow (11)"
                      transform="translate(0 -132)"
                    >
                      <g id="Group_37065" data-name="Group 37065" transform="translate(0 132)">
                        <path
                          id="Path_28513"
                          data-name="Path 28513"
                          d="M17.943,135.894h0l-3.7-3.687a.709.709,0,0,0-1,1.005l2.487,2.475H.709a.709.709,0,0,0,0,1.418H15.725l-2.487,2.475a.709.709,0,0,0,1,1.005l3.7-3.687h0A.71.71,0,0,0,17.943,135.894Z"
                          transform="translate(0 -132)"
                          fill="#0a9ef8"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="organisation_bg_section text-center">
              <img src={dummy_img2} alt="img" className="img-fluid mb-3" />
              <p className="f_18 text_blue fw_bold mb-1">For Organizations</p>
              <p className="f_14 mb-1">
                Empower Your Team With Practical, Real-World Chinese Skill They Need To Excel In
                Global Business.
              </p>
              <button className="btn fw_bold mx-auto d-block text_blue2" type="button">
                View Detail
                <span className="ms-2">
                  <svg width="18.151" height="8.792" viewBox="0 0 18.151 8.792">
                    <g
                      id="right-arrow_11_"
                      data-name="right-arrow (11)"
                      transform="translate(0 -132)"
                    >
                      <g id="Group_37065" data-name="Group 37065" transform="translate(0 132)">
                        <path
                          id="Path_28513"
                          data-name="Path 28513"
                          d="M17.943,135.894h0l-3.7-3.687a.709.709,0,0,0-1,1.005l2.487,2.475H.709a.709.709,0,0,0,0,1.418H15.725l-2.487,2.475a.709.709,0,0,0,1,1.005l3.7-3.687h0A.71.71,0,0,0,17.943,135.894Z"
                          transform="translate(0 -132)"
                          fill="#0a9ef8"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="col-sm-4 mt-8">
            <div className="organisation_bg_section text-center">
              <img src={dummy_img3} alt="img" className="img-fluid mb-3" />
              <p className="f_18 text_blue fw_bold mb-1">For Schools</p>
              <p className="f_14 mb-1">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc A Varius Justo.
                Pellentesque Ut.
              </p>
              <button className="btn fw_bold mx-auto d-block text_blue2" type="button">
                View Detail
                <span className="ms-2">
                  <svg width="18.151" height="8.792" viewBox="0 0 18.151 8.792">
                    <g
                      id="right-arrow_11_"
                      data-name="right-arrow (11)"
                      transform="translate(0 -132)"
                    >
                      <g id="Group_37065" data-name="Group 37065" transform="translate(0 132)">
                        <path
                          id="Path_28513"
                          data-name="Path 28513"
                          d="M17.943,135.894h0l-3.7-3.687a.709.709,0,0,0-1,1.005l2.487,2.475H.709a.709.709,0,0,0,0,1.418H15.725l-2.487,2.475a.709.709,0,0,0,1,1.005l3.7-3.687h0A.71.71,0,0,0,17.943,135.894Z"
                          transform="translate(0 -132)"
                          fill="#0a9ef8"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;
