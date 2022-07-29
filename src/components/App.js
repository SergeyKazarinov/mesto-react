import React, {useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);


  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={() => setIsEditProfilePopupOpen(true)} 
        onAddPlace={() => setIsAddPlacePopupOpen(true)} 
        onEditAvatar={() => setIsEditAvatarPopupOpen(true)}
      />
      <Footer />
      <PopupWithForm 
        name="edit-profile" 
        title="Редактировать профиль" 
        titleBtn="Сохранить" 
        isOpen={isEditProfilePopupOpen}
        onClose={() => setIsEditProfilePopupOpen(false)}
      >
      <fieldset className="form__set">
        <input
          type="text"
          className="form__input form__input_type_name"
          placeholder="Ваше имя"
          value=""
          id="input-title"
          // minlength="2"
          // maxlength="40"
          required
          />
        <span className="form__input-error input-title-error"></span>
      </fieldset>

      <fieldset className="form__set">
        <input
          type="text"
          className="form__input form__input_type_job"
          placeholder="Информация о работе"
          value=""
          id="input-job"
          // minlength="2"
          // maxlength="200"
          required
          />
        <span className="form__input-error input-job-error"></span>
      </fieldset>
    </PopupWithForm>

    <PopupWithForm 
    name="add-image" 
    title="Новое место" 
    titleBtn="Создать" 
    isOpen={isAddPlacePopupOpen}
    onClose={() => setIsAddPlacePopupOpen(false)}
    >
      <fieldset className="form__set">
        <input 
          type="text"
          className="form__input form__input_type_place"
          placeholder="Название"
          value=""
          id="input-name"
          // minlength="2"
          // maxlength="30"
          required
          />
        <span className="form__input-error input-name-error"></span>
      </fieldset>

      <fieldset className="form__set">
        <input
          type="url"
          className="form__input form__input_type_link"
          placeholder="Ссылка на картинку"
          value=""
          id="input-link"
          required
          />
        <span className="form__input-error input-link-error"></span>
      </fieldset>
    </PopupWithForm>

    <PopupWithForm 
      name="avatar" 
      title="Обновить аватар" 
      titleBtn="Сохранить" 
      isOpen={isEditAvatarPopupOpen}
      onClose={() => setIsEditAvatarPopupOpen(false)}
    >
      <fieldset className="form__set">
        <input
          type="url"
          className="form__input form__input_type_link"
          placeholder="Ссылка на картинку"
          value=""
          id="input-avatar"
          required
          />
        <span className="form__input-error input-avatar-error"></span>
      </fieldset>
    </PopupWithForm>

    <PopupWithForm 
      name="delete" 
      title="Вы уверены?" 
      titleBtn="Да"
    >
    </PopupWithForm>
    <ImagePopup />
    </div>
  );
}

export default App;
