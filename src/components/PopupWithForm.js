import React from "react";

function PopupWithForm({name, title, titleBtn, isOpen, children, onClose, onSubmit, isValid, card}) {
  function handleCLoseOverlayClick(e) {
    if(e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
      onMouseDown={handleCLoseOverlayClick}
    >
      <div className="popup__container">
        <button
          onClick={onClose}
          type="button"
          className="button button_type_close"
          aria-label="Закрыть окно"
        />
        <h2 className="popup__title">{title}</h2>
        <form className="form" name={name} onSubmit={onSubmit}>
          {children}
          <button
            className={`button button_type_save ${
              !isValid && "button_inactive"
            }`}
            value={titleBtn}
            id="button-save"
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