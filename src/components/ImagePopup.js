import React from "react";

function ImagePopup({card, onClose}) {
  return(
    <div className={`popup popup_type_image-zoom ${card.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container-image">
        <button 
          type="button"
          className="button button_type_close"
          aria-label="Закрыть окно"
          onClick={onClose}
        >
        </button>
        <img 
          className="popup__image"
          src={card.card.link}
          alt={card.card.name}
        />
        <h2 className="popup__text">{card.card.name}</h2>
      </div>
    </div>
  );
}
export default ImagePopup;