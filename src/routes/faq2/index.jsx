import { Fragment, useEffect } from 'react';

// common components imports
import Header from '@common/header';
import Footer from '@common/footer';
import MessageUs from '@common/messageUs';

const Faq2 = () => {
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
        <h5>FAQ -ni-hao-world</h5>
      </section>

      <section className="mt-4 terms_text site_map">
        <div className="container">
          <nav
            // style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item fw_bold text_blue2">
                <a href="#">ni-hao-world</a>
              </li>
              <li className="breadcrumb-item " aria-current="page">
                ni-hao-world Basics
              </li>
              <li className="breadcrumb-item " aria-current="page">
                {' '}
                The ni-hao-world Method
              </li>
            </ol>
          </nav>

          <div className="row">
            <div className="col-8">
              <h5 className="fw_bold "> How Does ni-hao-world teach Chinese ? </h5>
              <p className="mb-3">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vestibulum Rutrum
                Condimentum Urna. Vivamus Ut Quam Efficitur, Scelerisque Purus In, Rhoncus Tellus.
                Etiam Commodo Hendrerit Felis, Sit Amet Tristique Magna Congue Eget. Morbi{' '}
              </p>
              <ul>
                <li>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vestibulum Rutrum </li>
                <li>
                  Etiam Venenatis Scelerisque Posuere. Aliquam Tristique, Ipsum Vitae Sodales
                  Convallis, Justo Massa Placerat Libero, Et Tincidunt Odio Nulla Vel Lorem.{' '}
                </li>
                <li>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vestibulum Rutrum </li>
                <li>
                  Fusce Eleifend Magna Nibh, Volutpat Elementum Lectus Varius Quis. Proin Volutpat
                  Semper Ipsum Id Dignissim.{' '}
                </li>
                <li>
                  Aliquam Id Arcu Pellentesque, Aliquam Felis Ac, Congue Lectus. In Sodales Sit Amet
                  Orci Eu Sollicitudin.{' '}
                </li>
                <li>
                  Nulla Mattis Lorem At Congue Vehicula. Cras Elementum Fermentum Porta. Sed Mattis
                  Metus Vel Erat Consectetur Varius{' '}
                </li>
                <li>
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Morbi Suscipit Gravida
                  Odio Vitae Consectetur.{' '}
                </li>
              </ul>

              <h5 className="fw_bold "> Dress Like You Would For Any Class </h5>
              <p className="mb-3">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Dignissim Non Eros
                Quis Posuere. Maecenas Neque Justo, Convallis Eget Orci Et, Efficitur Placerat
                Velit. Class Aptent Taciti Sociosqu Ad Litora Torquent Per Conubia Nostra, Per
                Inceptos Himenaeos.
              </p>

              <h5 className="fw_bold "> Practice In A Quiet Place</h5>
              <p className="mb-3">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Dignissim Non Eros
                Quis Posuere. Maecenas Neque Justo, Convallis Eget Orci Et, Efficitur Placerat
                Velit. Class Aptent Taciti Sociosqu Ad Litora Torquent Per Conubia Nostra, Per
                Inceptos Himenaeos. Quisque Blandit Commodo Libero, Elementum Rhoncus Tellus
                Pharetra Non.
              </p>

              <h5 className="fw_bold "> Religion, Politics, Or Other Controversial Subjects </h5>
              <p className="mb-3">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Dignissim Non Eros
                Quis Posuere. Maecenas Neque Justo, Convallis Eget Orci Et, Efficitur Placerat
                Velit. Class Aptent Taciti Sociosqu Ad Litora Torquent Per Conubia Nostra, Per
                Inceptos Himenaeos. Quisque Blandit Commodo Libero, Elementum Rhoncus Tellus
                Pharetra Non.
              </p>

              <h5 className="fw_bold ">Always Ask For Permission Before Sharing Videos</h5>
              <p className="mb-3">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Dignissim Non Eros
                Quis Posuere. Maecenas Neque Justo, Convallis Eget Orci Et, Efficitur Placerat
                Velit. Class Aptent Taciti Sociosqu Ad Litora Torquent Per Conubia Nostra, Per
                Inceptos Himenaeos. Quisque Blandit Commodo Libero, Elementum Rhoncus Tellus
                Pharetra Non.
              </p>

              <h5 className="fw_bold ">No Substance Use During Lessons</h5>
              <p className="mb-3">
                Aliquam Nunc Tortor, Semper Vel Malesuada In, Molestie Eu Magna. Orci Varius Natoque
                Penatibus Et Magnis Dis Parturient Montes, Nascetur Ridiculus Mus.{' '}
              </p>
            </div>

            <div className="col-4">
              <ul className="fw_bold  site_map_info">
                {' '}
                Articles in this section
                <li className="fw_regular"> How does ni-hao-world Code of Conduct ?</li>
                <li className="fw_regular"> Are online lessons better than in-person lessons?</li>
                <li className="fw_regular"> Is ni-hao-world the best program for my child?</li>
                <li className="fw_regular">
                  {' '}
                  Four different ways to take a lesson on ni-hao-world
                </li>
                <li className="fw_regular">How does ni-hao-world Code of Conduct ?</li>
                <li className="fw_regular"> How Can I Track My Support Tickets?</li>
                <li className="fw_regular">Can I speak with as many tutors as I want?</li>
                <li className="fw_regular"> How to Use ni-hao-world Courses </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <MessageUs />
    </Fragment>
  );
};

export default Faq2;
