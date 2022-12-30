import './button.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
  payment_inverted: 'payment_inverted',
};

const Button = ({ children, buttonType, isLoading ,...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {isLoading ? <div className = "button-spiner"></div> : children } 
    </button>
  );
};

export default Button;
