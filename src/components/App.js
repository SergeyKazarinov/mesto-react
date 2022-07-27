

function App() {
  return (
    <div>
      <div className="popup popup_type_edit-profile">
          <div className="popup__container">
            <button type="button" className="button button_type_close" aria-label="Закрыть окно"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="form" name="profile-edit" novalidate>
              <fieldset className="form__set">
                <input
                  type="text"
                  className="form__input form__input_type_name"
                  placeholder="Ваше имя"
                  value=""
                  id="input-title"
                  minlength="2"
                  maxlength="40"
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
                  minlength="2"
                  maxlength="200"
                  required
                  />
                <span className="form__input-error input-job-error"></span>
              </fieldset>
              <button className="button button_type_save" value="Сохранить" id="button-save">Сохранить</button>
            </form>
          </div>
      </div>

      <div className="popup popup_type_add-image">
        <div className="popup__container">
          <button type="button" className="button button_type_close" aria-label="Закрыть окно"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="form" name="add-image" novalidate>
            <fieldset className="form__set">
              <input 
                type="text"
                className="form__input form__input_type_place"
                placeholder="Название"
                value=""
                id="input-name"
                minlength="2"
                maxlength="30"
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
                required />
              <span className="form__input-error input-link-error"></span>
            </fieldset>
            <button className="button button_type_save" value="Создать" id="button-add">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_image-zoom">
        <div className="popup__container-image">
          <button type="button" className="button button_type_close" aria-label="Закрыть окно"></button>
          <img className="popup__image" src="./images/Image1.jpg" alt="" />
          <h2 className="popup__text"></h2>
        </div>
      </div>


      <div className="popup popup_type_delete">
        <div className="popup__container">
          <button type="button" className="button button_type_close" aria-label="Закрыть окно"></button>
          <h2 className="popup__title popup__title_type_delete">Вы уверены?</h2>
          <button className="button button_type_save button_type_delete" type="button" value="Удалить" id="button-delete">Да</button>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button type="button" className="button button_type_close" aria-label="Закрыть окно"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="form" name="avatar" novalidate>
            <fieldset className="form__set">
              <input
                type="url"
                className="form__input form__input_type_link"
                placeholder="Ссылка на картинку"
                value=""
                id="input-avatar"
                required />
              <span className="form__input-error input-avatar-error"></span>
            </fieldset>
            <button className="button button_type_save" value="Сохранить" id="button-avatar">Сохранить</button>
          </form>
        </div>
      </div>

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
