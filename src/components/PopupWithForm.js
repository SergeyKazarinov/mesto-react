import React from "react";

function PopupWithForm({name, title, titleBtn, isOpen, children, onClose, onSubmit, onClick, isValid}) {
  function handleCLoseOverlayClick(e) {
    if(e.target === e.currentTarget) {
      onClose();
    }
  }

  return(
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} onMouseDown={handleCLoseOverlayClick}>
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
          <button
            className={`button button_type_save ${!isValid && 'button_inactive'}`}
            value={titleBtn}
            id="button-save"
            onClick={onClick}
            disabled={!isValid ? true : false}
          >
          {titleBtn}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;