import React, { useRef, useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import FieldSet from "./Fieldset";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const linkInputRef = useRef();
  const nameInputRef = useRef();
  const [isLinkValid, setIsLinkValid] = useState (false);
  const [isNameValid, setIsNameValid] = useState (false);
  const [isButtonValid, setIsButtonValid] = useState (false);
  const [buttonSubmitName, setButtonSubmitName] = useState('Создать')

  useEffect(() => {
    nameInputRef.current.value='';
    linkInputRef.current.value='';
    setIsLinkValid(false);
    setIsNameValid(false);
    setButtonSubmitName('Создать')
  }, [isOpen])

  function handleSubmit(e) {
    e.preventDefault();
    setButtonSubmitName('Сохранение...')
    onAddPlace({
      link: linkInputRef.current.value,
      name: nameInputRef.current.value
    });
  }

  function handleLinkChange() {
    if(linkInputRef.current.validity.valid) {
      setIsLinkValid(true);
    }
    else {
      setIsLinkValid(false);
    }
  }

  function handleNameChange() {
    if(nameInputRef.current.validity.valid) {
      setIsNameValid(true);
    }
    else {
      setIsNameValid(false);
    }
  }

  useEffect(() => {
      setIsButtonValid(isLinkValid && isNameValid);
  }, [isNameValid, isLinkValid])

  return(
    <PopupWithForm 
          name="add-image" 
          title="Новое место" 
          titleBtn={buttonSubmitName}
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
          isValid={isButtonValid}
        >
          <FieldSet 
            inputType="text"
            inputClassType="place"
            placeholder="Название"
            id="input-name"
            minLength="2"
            maxLength="30"
            inputRef={nameInputRef}
            onChange={handleNameChange}
            isOpen={isOpen}
          />

          <FieldSet 
            inputType="url"
            inputClassType="link"
            placeholder="Ссылка на картинку"
            id="input-link"
            inputRef={linkInputRef}
            onChange={handleLinkChange}
            isOpen={isOpen}
          />
        </PopupWithForm>
  )
}

export default AddPlacePopup;