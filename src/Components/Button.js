import PropTypes from 'prop-types';

export const Button = ({ btnName, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {btnName}
    </button>
  );
};
Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;
