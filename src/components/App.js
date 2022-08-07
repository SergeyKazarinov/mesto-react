import React, {useState, useEffect} from "react";
import FieldSet from "./Fieldset";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import api from "./Api";
import {CurrentUserContext} from './CurrentUserContext';
import EditProfilePopup from "./EditProfilePopup";

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

  function handleUpdateUser(userData) {
    api.patchUserInfo(userData)
      .then((res) => {
        console.log(res);
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  } 

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        /> 

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
          onClose = {() => setSelectCard({isOpen: false, card: {}})}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;