import React from "react";

function FieldSet({inputType, inputClassType, placeholder, id, minLength, maxLength, value, onChange}) {
  return(
    <fieldset className="form__set">
        <input 
          type={inputType}
          className={`form__input form__input_type_${inputClassType}`}
          placeholder={placeholder}
          value={value}
          id={id}
          minLength={minLength}
          maxLength={maxLength}
          onChange={onChange}
          required
          />
        <span className={`form__input-error ${id}-error`}></span>
      </fieldset>
  )
}

export default FieldSet;