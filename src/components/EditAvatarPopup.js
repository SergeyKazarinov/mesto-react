import React, {useRef} from "react";
import PopupWithForm from "./PopupWithForm";
import FieldSet from "./Fieldset";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const inputRef = useRef();
  
  console.log()
  function handleClick(e) {
    e.preventDefault();
    onUpdateAvatar(inputRef.current.value);
    inputRef.current.value='';
  }


  return(
    <PopupWithForm 
          name="avatar" 
          title="Обновить аватар" 
          titleBtn="Сохранить" 
          isOpen={isOpen}
          onClose={onClose}
          onClick={handleClick}
        >
          <FieldSet 
            inputType="url"
            inputClassType="link"
            placeholder="Ссылка на картинку"
            id="input-avatar"
            inputRef={inputRef}
          />
        </PopupWithForm>
  )
}

export default EditAvatarPopup;