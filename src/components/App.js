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
      <template id="cards">
        <li className="card">
          <button className="button button_type_card" type="button" name="card-image">
          <img className="card__image" src="./images/Image1.jpg" alt="" /></button>
          <button className="button button_type_remove" type="button" aria-label="Удалить картинку" name="remove-image"></button>
          <div className="card__item">
            <h2 className="card__text"></h2>
            <div className="card__like">
              <button className="button button_type_like" type="button" aria-label="Поставить лайк" name="like"></button>
              <span className="card__like-item"></span>
            </div>
          </div>
        </li>
      </template>
      
    </div>
  );
}

export default App;
