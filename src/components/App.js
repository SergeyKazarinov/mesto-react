import React, {useState, useEffect} from "react";
import FieldSet from "./Fieldset";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import api from "./utils/Api";
import {CurrentUserContext} from './CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectCard] = useState({isOpen: false, card: {}});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardClick(card) {
    setSelectCard({isOpen: true, card: card});
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main 
          onEditProfile={() => setIsEditProfilePopupOpen(true)} 
          onAddPlace={() => setIsAddPlacePopupOpen(true)} 
          onEditAvatar={() => setIsEditAvatarPopupOpen(true)}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm 
          name="edit-profile" 
          title="Редактировать профиль" 
          titleBtn="Сохранить" 
          isOpen={isEditProfilePopupOpen}
          onClose={() => setIsEditProfilePopupOpen(false)}
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
          onClose={() => setIsAddPlacePopupOpen(false)}
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
          onClose={() => setIsEditAvatarPopupOpen(false)}
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
          onClose = {() => setSelectCard({isOpen: false, card: {}})}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
