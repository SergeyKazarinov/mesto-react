import React from "react";

function PopupWithForm({name, title, titleBtn, isOpen, children, onClose, onSubmit}) {
  return(
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          type="button" 
          className="button button_type_close" 
          aria-label="Закрыть окно"
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className="form"
          name={name} /*"profile-edit"*/
          onSubmit={onSubmit}
          >
          {children}
          <button className="button button_type_save" value={titleBtn} id="button-save">{titleBtn}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;