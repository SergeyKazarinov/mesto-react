import React, {useState} from "react";
import FieldSet from "./Fieldset";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectCard] = useState({isOpen: false, card: {}});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectCard({isOpen: false, card: {}});
  }

  function handleCardClick(card) {
    setSelectCard({isOpen: true, card: card});
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm 
        name="edit-profile" 
        title="Редактировать профиль" 
        titleBtn="Сохранить" 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <FieldSet 
          inputType="text"
          inputClassType="name"
          placeholder="Ваше имя"
          id="input-title"
          minLength="2"
          maxLength="40"
        />

        <FieldSet 
          inputType="text"
          inputClassType="job"
          placeholder="Информация о работе"
          id="input-job"
          minLength="2"
          maxLength="200"
        />
      </PopupWithForm>

    <PopupWithForm 
      name="add-image" 
      title="Новое место" 
      titleBtn="Создать" 
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
    >
      <FieldSet 
        inputType="text"
        inputClassType="place"
        placeholder="Название"
        id="input-name"
        minLength="2"
        maxLength="30"
      />

      <FieldSet 
        inputType="url"
        inputClassType="link"
        placeholder="Ссылка на картинку"
        id="input-link"
      />
    </PopupWithForm>

    <PopupWithForm 
      name="avatar" 
      title="Обновить аватар" 
      titleBtn="Сохранить" 
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
    >
      <FieldSet 
        inputType="url"
        inputClassType="link"
        placeholder="Ссылка на картинку"
        id="input-avatar"
      />
    </PopupWithForm>

    <PopupWithForm 
      name="delete" 
      title="Вы уверены?" 
      titleBtn="Да"
    >
    </PopupWithForm>
    <ImagePopup 
      card = {selectedCard}
      onClose = {closeAllPopups}
    />
    </div>
  );
}

export default App;
