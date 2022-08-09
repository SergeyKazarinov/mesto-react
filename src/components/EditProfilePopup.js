import React, {useState, useContext, useEffect} from "react";
import PopupWithForm from "./PopupWithForm";
import FieldSet from "./Fieldset";
import { CurrentUserContext } from "../context/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);
  const [isAboutValid, setIsAboutValid] = useState (false);
  const [isNameValid, setIsNameValid] = useState (false);
  const [isButtonValid, setIsButtonValid] = useState (false);
  const [buttonSubmitName, setButtonSubmitName] = useState('Сохранить')

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
    setIsAboutValid(true);
    setIsNameValid(true);
    setButtonSubmitName('Сохранить');
  }, [currentUser, !isOpen]); 

  function handleNameChange(e) {
    setName(e.target.value);
    if(e.target.validity.valid) {
      setIsNameValid(true);
    }
    else {
      setIsNameValid(false);
    }
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
    if(e.target.validity.valid) {
      setIsAboutValid(true);
    }
    else {
      setIsAboutValid(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setButtonSubmitName('Сохранение...')
    onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
      setIsButtonValid(isAboutValid && isNameValid);
  }, [isNameValid, isAboutValid])

  return(
    <PopupWithForm 
      name="edit-profile" 
      title="Редактировать профиль" 
      titleBtn={buttonSubmitName}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isButtonValid}
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
        isOpen={isOpen}
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
        isOpen={isOpen}
      />
    </PopupWithForm>
  )
}

export default EditProfilePopup;