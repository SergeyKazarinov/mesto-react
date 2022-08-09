import React, {useEffect, useRef, useState} from "react";
import PopupWithForm from "./PopupWithForm";
import FieldSet from "./Fieldset";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const inputRef = useRef();
  const [isLinkValid, setIsLinkValid] = useState (false);
  const [isButtonValid, setIsButtonValid] = useState (false);

  useEffect(() => {
    inputRef.current.value='';
    setIsLinkValid(false);
  }, [isOpen])

  useEffect(() => {
    isLinkValid ? setIsButtonValid(true) : setIsButtonValid(false);
  }, [isLinkValid]);

  function handleClick(e) {
    e.preventDefault();
    onUpdateAvatar(inputRef.current.value);
    inputRef.current.value='';
  }

  function handleLinkChange() {
    if(inputRef.current.validity.valid) {
      setIsLinkValid(true);
    }
    else {
      setIsLinkValid(false);
    }
  }

  return(
    <PopupWithForm 
          name="avatar" 
          title="Обновить аватар" 
          titleBtn="Сохранить" 
          isOpen={isOpen}
          onClose={onClose}
          onClick={handleClick}
          isValid={isButtonValid}
        >
          <FieldSet 
            inputType="url"
            inputClassType="link"
            placeholder="Ссылка на картинку"
            id="input-avatar"
            inputRef={inputRef}
            isOpen={isOpen}
            onChange={handleLinkChange}
          />
        </PopupWithForm>
  )
}

export default EditAvatarPopup;