/**кнопки
 * @const popupEditOpenBtn - кнопка открытия попапа редактирования профиля
 * @type {HTMLElement} 
 */
export const popupEditOpenBtn = document.querySelector ('.button_type_edit');

/**
 * @const popupAvatarOpenBtn - кнопка открытия попапа смены аватара
 * @type {HTMLElement}
 */
export const popupAvatarOpenBtn = document.querySelector('.button_type_avatar');

/**
 * @const popupAddImageOpenBtn - кнопка открытия попапа добавления картинки
 * @type {HTMLElement}
 */
export const popupAddImageOpenBtn = document.querySelector ('.button_type_add');

/**
 * @const cardSelector - контейнер карточки
 * @type {HTMLElement}
 */
export const cardSelector = document.getElementById('cards').content.querySelector('.card');

/**
 * @const validConfig                       - объект данных для валидации формы
 * @property {string} formSelector          - CSS-класс формы
 * @property {string} inputSelector         - CSS-класс инпута
 * @property {string} submitButtonSelector  - CSS-класс кнопки отправки формы
 * @property {string} inactiveButtonClass   - CSS-класс для деактивации кнопки
 * @property {string} inputErrorClass       - CSS-класс для добавления свойст невалидности инпута
 * @property {string} errorClass            - CSS-класс для вывода сообщения ошибки
 */
export const validConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_type_save',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

export const formValidators = {};

/**
 * @const formConfiguration             - объект данных формы
 * @property {string} inputSelector     - CSS-класс инпутов
 * @property {string} submitBtnSelector - CSS-класс кнопки отправки формы
 * @property {string} formSelector      - CSS-класс формы
 */
export const formConfiguration = {
  inputSelector: 'form__input',
  submitBtnSelector: 'button_type_save',
  formSelector: 'form',
}
/**
 * @const popupConfiguration             - объект данных для открытия и закрытия попапа
 * @property {string} activeModifier     - CSS-класс открытого попапа
 * @property {string} closeBtnSelector   - CSS-класс кнопки закрытия попапа (крестик)
 */
export const popupConfiguration = {
  activeModifier: 'popup_opened',
  closeBtnSelector: 'button_type_close',
}

/**
 * @const profileConfiguration          - объект данных для заполнения данных профиля
 * @property {string} titleSelector     - CSS-класс для отображения имения пользователя
 * @property {string} jobSelector       - CSS-класс для отображения информации о пользователе
 * @property {string} avatarSelector    - CSS-класс для отображения аватарки пользователя
 */
export const profileConfiguration = {
  titleSelector: 'profile__name', 
  jobSelector: 'profile__job',
  avatarSelector: 'profile__avatar',
}

/**
 * @const viewPopupConfiguration        - объект данных для попапа отображения карточки
 * @property {string} imageSelector     - CSS-класс для отображения картинки
 * @property {string} captionSelector    - CSS-класс для отображения информации картинки
 */
export const viewPopupConfiguration = {
  imageSelector: 'popup__image',
  captionSelector: 'popup__text',
}
/**
 * CSS-класс DOM-узла для вставки готовой карточки
 * @constanta
 * @type {string}
 */
export const cardsContainerSelector = 'elements__grid';

/**
 * CSS-класс попапа для добавления карточки
 * @constanta
 * @type {string}
 */
export const newPlacePopupSelector = 'popup_type_add-image';

/**
 * CSS-класс попапа для попапа редактирования профиля
 * @constanta
 * @type {string}
 */
export const profilePopupSelector = 'popup_type_edit-profile';

/**
 * CSS-класс попапа для попапа отображения карточки
 * @constanta
 * @type {string}
 */
export const imagePopupSelector = 'popup_type_image-zoom';

/**
 * CSS-класс формы добавления карточки
 * @constanta
 * @type {string}
 */
export const newPlaceFormName = 'add-image';

/**
 * CSS-класс формы редактирвоания профиля
 * @constanta
 * @type {string}
 */
export const profileFormName = 'profile-edit';

/**
 * CSS-класс попапа смены аватарки
 * @constanta
 * @type {string}
 */
export const avatarPopupSelector = 'popup_type_avatar';

/**
 * CSS-класс формы смены аватарки
 * @constanta
 * @type {string}
 */
export const avatarFormName = 'avatar';

/**
 * CSS-класс попапа подтверждения удаления картинки
 * @constanta
 * @type {string}
 */
export const deletePopupSelector = 'popup_type_delete';

/**
 * CSS-класс кнопки подстверждения удаления
 * @constanta
 * @type {string}
 */
export const confirmationButtonSelector = 'button_type_delete';