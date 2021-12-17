import { useEffect, useState } from 'react';

import { doMoreOptions, doMoreImagesOption } from './doMoreConstants';

const DoMore = () => {
  const [activeIndex, setActiveIndex] = useState('pills-home');
  const [doMoreImage, setDoMoreImage] = useState({});

  useEffect(() => {
    const doMoreImage = doMoreImagesOption.find((img) => img.id === activeIndex);
    if (doMoreImage) setDoMoreImage(doMoreImage);
  }, [activeIndex]);

  const renderDoMoreOptions = () => {
    return doMoreOptions.map((domore, idx) => (
      <li className="nav-item" role="presentation" key={idx}>
        <div
          className={`nav-link d-flex align-items-center ${activeIndex === idx ? 'active' : ''}`}
          id={domore.id}
          data-bs-toggle="pill"
          data-bs-target={`#${domore.dataBsTarget}`}
          type="button"
          role="tab"
          aria-controls={domore.ariaControls}
          aria-selected={activeIndex === domore.dataBsTarget ? true : false}
          onClick={() => setActiveIndex(domore.dataBsTarget)}
        >
          <span className="tab">{domore.icon}</span>
          <div>
            <h4 className="f_18 mb-1">{domore.heading}</h4>
            <p className="text_black mb-0">{domore.para}</p>
          </div>
        </div>
      </li>
    ));
  };

  const renderDoMoreImages = () => {
    if (Object.keys(doMoreImage).length) {
      return (
        <div
          className={'tab-pane fade active show'}
          id={doMoreImage.id}
          role="tabpanel"
          aria-labelledby={doMoreImage.arialabelledby}
        >
          <img src={doMoreImage.image} alt="img" className="img-fluid" />
        </div>
      );
    }

    // return doMoreImagesOption.map((doMoreImg, idx) => (
    //   <div
    //     key={idx}
    //     className={`tab-pane fade ${activeIndex === doMoreImg.id ? 'active show' : ''}`}
    //     id={doMoreImg.id}
    //     role="tabpanel"
    //     aria-labelledby={doMoreImg.arialabelledby}
    //   >
    //     <img src={doMoreImg.image} alt="img" className="img-fluid" />
    //   </div>
    // ));
  };

  return (
    <section className="section_padding bg_light_blue">
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <div className="banner_text px-5">
              <h1 className="fw_bold text_blue">
                Do More With <span className="fw_che_regular text_blue2">ni-hao-world</span>
              </h1>
              <p className="f_18 text_black">
                Unlock The Power Of Our Personalized Learning Experience To Achieve Your Chinese
                Learning Goals Faster.
              </p>
              <ul
                className="nav flex-column nav-pills mb-3 custom_nav_tabs"
                id="pills-tab"
                role="tablist"
              >
                {renderDoMoreOptions()}
              </ul>
            </div>
          </div>
          <div className="col-sm-5 align-self-center">
            <div className="tab-content" id="pills-tabContent">
              {renderDoMoreImages()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoMore;
