import PropTypes from 'prop-types';

export const Button = ({ btnName }) => {
  return <button className="button">{btnName}</button>;
};
Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;
