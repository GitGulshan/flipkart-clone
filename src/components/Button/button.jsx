import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Button.css";
import { fas } from "@fortawesome/free-solid-svg-icons";

function Button({ variant, text, prefixIcon, postfixIcon, style, onClick }) {
  return (
    <button className={variant} style={{ ...style }} onClick={onClick}>
      {prefixIcon ? (
        <FontAwesomeIcon icon={prefixIcon} style={{ marginRight: 10 }} />
      ) : null}
      {text}
      {postfixIcon ? (
        <FontAwesomeIcon icon={postfixIcon} style={{ marginLeft: 10 }} />
      ) : null}
    </button>
  );
}

export default Button;
