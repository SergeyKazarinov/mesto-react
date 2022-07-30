import React from "react";

function FieldSet({inputType, inputClassType, placeholder, id, minLength, maxLength}) {
  return(
    <fieldset className="form__set">
        <input 
          type={inputType}
          className={`form__input form__input_type_${inputClassType}`}
          placeholder={placeholder}
          // value=""
          id={id}
          minLength={minLength}
          maxLength={maxLength}
          required
          />
        <span className={`form__input-error ${id}-error`}></span>
      </fieldset>
  )
}

export default FieldSet;