import PropTypes from 'prop-types';

const Button = ({ className, children, type, value, onClick, onChange, ...rest }) => {
  return (
    <button
      className={className ? className : 'btn btn-primary'}
      type={type ? type : 'button'}
      onClick={onClick}
      {...rest}
    >
      {value ? value : children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Element)]),
  rest: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
