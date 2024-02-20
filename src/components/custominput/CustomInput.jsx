import "./CustomInput.css";

function CustomInput({ placeholder }) {
  return (
    <div>
      <input type="text" placeholder={placeholder ?? ""} />;
    </div>
  );
}

export default CustomInput;
