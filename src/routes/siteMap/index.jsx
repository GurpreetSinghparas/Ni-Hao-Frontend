import { Fragment, useEffect } from 'react';

// common components imports
import Header from '@common/header';
import Footer from '@common/footer';
import MessageUs from '@common/messageUs';

const SiteMap = () => {
  useEffect(() => {
    if (document) {
      const root = document.querySelector('#root');
      if (root !== null) root.classList.add('pt_6');
    }
  }, []);
  return (
    <Fragment>
      <Header />
      <section className="terms_policies_box">
        <h5>Site Map</h5>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="faq_text">
                <h5 className="mb-3">ni-hao-world Basic</h5>
                <p className="mb-2">Donec et lectus quis erat porta malesuada ?</p>
                <p className="mb-2">Nunc ac pretium purus. Proin euismod imperdiet aliquet ? </p>
                <p className="mb-2">Nullam elementum nulla ut nibh finibus finibus.</p>
                <p className="mb-2">
                  Integer a neque nec arcu bibendum mattis non ac metus. Cras quis libero ac mi
                  imperdiet hendrerit.{' '}
                </p>
                <p className="mb-2">Donec et lectus quis erat porta malesuada ?</p>
                <p className="mb-4 fw_bold">See all 9 articles</p>

                <h5 className="mb-3">About Our Subscriptions</h5>
                <p className="mb-2">Donec et lectus quis erat porta malesuada ?</p>
                <p className="mb-2">Nunc ac pretium purus. Proin euismod imperdiet aliquet ? </p>
                <p className="mb-2">Nullam elementum nulla ut nibh finibus finibus.</p>
                <p className="mb-2">
                  Integer a neque nec arcu bibendum mattis non ac metus. Cras quis libero ac mi
                  imperdiet hendrerit.{' '}
                </p>
                <p className="mb-2">Donec et lectus quis erat porta malesuada ?</p>
                <p className="mb-4 fw_bold">See all 12 articles</p>

                <h5 className="mb-3">Payment Questions</h5>
                <p className="mb-2">Donec et lectus quis erat porta malesuada ?</p>
                <p className="mb-2">Nunc ac pretium purus. Proin euismod imperdiet aliquet ? </p>
                <p className="mb-2">Nullam elementum nulla ut nibh finibus finibus.</p>
                <p className="mb-2">
                  Integer a neque nec arcu bibendum mattis non ac metus. Cras quis libero ac mi
                  imperdiet hendrerit.{' '}
                </p>
                <p className="mb-2">Donec et lectus quis erat porta malesuada ?</p>
                <p className="mb-4 fw_bold">See all 18 articles</p>

                <h5 className="mb-3">Video Recordings</h5>
                <p className="mb-2">Donec et lectus quis erat porta malesuada ?</p>
                <p className="mb-2">Nunc ac pretium purus. Proin euismod imperdiet aliquet ? </p>
                <p className="mb-2">Nullam elementum nulla ut nibh finibus finibus.</p>
                <p className="mb-2">
                  Integer a neque nec arcu bibendum mattis non ac metus. Cras quis libero ac mi
                  imperdiet hendrerit.{' '}
                </p>
                <p className="mb-2">Donec et lectus quis erat porta malesuada ?</p>
                <p className="mb-4 fw_bold">See all 10 articles</p>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="faq_text">
                <h5 className="mb-3">Scheduled Lessons</h5>
                <p className="mb-2">Donec et lectus quis erat porta malesuada ?</p>
                <p className="mb-2">Nunc ac pretium purus. Proin euismod imperdiet aliquet ? </p>
                <p className="mb-2">Nullam elementum nulla ut nibh finibus finibus.</p>
                <p className="mb-2">
                  Integer a neque nec arcu bibendum mattis non ac metus. Cras quis libero ac mi
                  imperdiet hendrerit.{' '}
                </p>
                <p className="mb-2">Donec et lectus quis erat porta malesuada ?</p>
                <p className="mb-4 fw_bold">See all 9 articles</p>

                <h5 className="mb-3">ni-hao-world Courses</h5>
                <p className="mb-4">Donec et lectus quis erat porta malesuada ?</p>

                <h5 className="mb-3">FAQ</h5>
                <p className="mb-2">Donec et lectus quis erat porta malesuada ?</p>
                <p className="mb-2">Nunc ac pretium purus. Proin euismod imperdiet aliquet ? </p>
                <p className="mb-2">Nullam elementum nulla ut nibh finibus finibus.</p>
                <p className="mb-2">
                  Integer a neque nec arcu bibendum mattis non ac metus. Cras quis libero ac mi
                  imperdiet hendrerit.{' '}
                </p>
                <p className="mb-2">Donec et lectus quis erat porta malesuada ?</p>
                <p className="mb-4 fw_bold">See all 18 articles</p>

                <h5 className="mb-3">ni-hao-world Kids FAQ</h5>
                <p className="mb-2">Donec et lectus quis erat porta malesuada ?</p>
                <p className="mb-2">Nunc ac pretium purus. Proin euismod imperdiet aliquet ? </p>
                <p className="mb-4 fw_bold">See all 10 articles</p>

                <h5 className="mb-3">ni-hao-world Ambassador program</h5>
                <p className="mb-2">Donec et lectus quis erat porta malesuada ?</p>
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

export default SiteMap;
