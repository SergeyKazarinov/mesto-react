import React from "react";

function handleEditAvatarClick() {
  const avatarPopup = document.querySelector('.popup_type_avatar');
  avatarPopup.classList.add('popup_opened');
}

function handleEditProfileClick() {
  const profilePopup = document.querySelector('.popup_type_edit-profile');
  profilePopup.classList.add('popup_opened');
}

function handleAddPlaceClick() {
  const newPlacePopup = document.querySelector('.popup_type_add-image');
  newPlacePopup.classList.add('popup_opened');
}

function Main() {
  return (
    <main className="containt">
      <section className="profile">
        <div className="profile__space-between">
          <div className="profile__avatar-container">
            <button 
              onClick={handleEditAvatarClick} 
              className="button button_type_avatar" 
              type="button" 
              aria-label="Изменить аватар" 
              name="avatar-button">
            </button>
            <img className="profile__avatar" src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" alt="Аватар" />
          </div>
          <div className="profile__info">
            <div className="profile__flex-name">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button 
                onClick={handleEditProfileClick}
                className="button button_type_edit"
                type="button"
                aria-label="Редактировать имя и информацию"
                name="edit-button">
              </button>
            </div>
              <span className="profile__job">Исследователь океана</span>
          </div>
        </div>
        <button
          onClick={handleAddPlaceClick}
          className="button button_type_add"
          type="button"
          aria-label="Добавить изображение"
          name="add-button">
        </button>
      </section>
      <section className="elements">
        <ul className="elements__grid list">
        
      </ul>
    </section>
  </main>
  );
}
export default Main;