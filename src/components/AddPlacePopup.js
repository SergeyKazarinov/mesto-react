import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import FieldSet from "./Fieldset";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const linkInputRef = useRef();
  const nameInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      link: linkInputRef.current.value,
      name: nameInputRef.current.value
    });
    nameInputRef.current.value='';
    linkInputRef.current.value='';
  }

  return(
    <PopupWithForm 
          name="add-image" 
          title="Новое место" 
          titleBtn="Создать" 
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
        >
          <FieldSet 
            inputType="text"
            inputClassType="place"
            placeholder="Название"
            id="input-name"
            minLength="2"
            maxLength="30"
            inputRef={nameInputRef}
          />

          <FieldSet 
            inputType="url"
            inputClassType="link"
            placeholder="Ссылка на картинку"
            id="input-link"
            inputRef={linkInputRef}
          />
        </PopupWithForm>
  )
}

export default AddPlacePopup;