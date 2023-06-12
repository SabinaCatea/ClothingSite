import "./formInput.scss";

const FormInput = function ({ label, ...inputOptions }) {
  return (
    <div className="group">
      {/* <label>{label}</label> */}
      <input className="form-input" {...inputOptions} />
      {label && (
        <label
          className={`${
            inputOptions.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
