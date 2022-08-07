import React, {useState, useContext} from "react";
import PopupWithForm from "./PopupWithForm";
import FieldSet from "./Fieldset";
import { CurrentUserContext } from "../context/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }


  return(
    <PopupWithForm 
      name="edit-profile" 
      title="Редактировать профиль" 
      titleBtn="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      >
      <FieldSet 
        inputType="text"
        inputClassType="name"
        placeholder="Ваше имя"
        id="input-title"
        minLength="2"
        maxLength="40"
        value={name}
        onChange={handleNameChange}
      />

      <FieldSet 
        inputType="text"
        inputClassType="job"
        placeholder="Информация о работе"
        id="input-job"
        minLength="2"
        maxLength="200"
        value={description}
        onChange={handleDescriptionChange}
      />
    </PopupWithForm>
  )
}

export default EditProfilePopup;