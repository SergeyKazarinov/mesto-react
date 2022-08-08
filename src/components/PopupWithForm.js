import React from "react";

function PopupWithForm({name, title, titleBtn, isOpen, children, onClose, onSubmit, onClick}) {
  function handleCLoseOverlayClick(e) {
    if(e.target === e.currentTarget) {
      onClose();
    }
  }

  return(
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} onClick={handleCLoseOverlayClick}>
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
            className="button button_type_save"
            value={titleBtn}
            id="button-save"
            onClick={onClick}
          >
          {titleBtn}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;