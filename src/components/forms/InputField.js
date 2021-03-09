import React from "react";

const InputField = () => {
  return (
    <div className="form-group">
      <label className="form-group__label" htmlFor="email-1">
        email address
      </label>
      <div className="form-group__input">
        <input
          type="email"
          name="email-1"
          id="email-1"
          required="required"
          placeholder="design@randstad.com"
        />
      </div>
    </div>
  );
};

export default InputField;
