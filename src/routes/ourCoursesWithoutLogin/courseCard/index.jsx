import PropTypes from 'prop-types';

const CoursesCard = ({ courseClassName, svg, img, title, description, level, lessons }) => {
  return (
    <div
      className={`${
        courseClassName ? courseClassName : 'course_card_curve2'
      } p-2 position-relative`}
    >
      <div className="course_shapes ms-3 mb-5">
        <img src={svg} alt="img" className="img-fluid" />
      </div>
      <div className="course_img">
        <img src={img} alt="img" className="img-fluid" />
      </div>
      <div className="course_info">
        <p className="fw_bold text-white mb-0">{title}</p>
        <span className="f_12 text-white d-block mb-3">{description}</span>
        <div className="d-flex align-items-center">
          <h5 className="f_12 text-white mb-0 me-3">{level}</h5>
          <ul className="ps-1 mb-0">
            <li className="f_12 text-white">{lessons}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

CoursesCard.propTypes = {
  courseClassName: PropTypes.string,
  svg: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  lessons: PropTypes.string.isRequired,
};

export default CoursesCard;
