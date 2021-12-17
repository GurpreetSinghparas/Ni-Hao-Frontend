import PropTypes from 'prop-types';

const Input = ({ type, className, placeholder, value, onChange, ...rest }) => {
  return (
    <input
      type={type ? type : 'text'}
      className={className ? className : 'form-control'}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  rest: PropTypes.object,
};

export default Input;
