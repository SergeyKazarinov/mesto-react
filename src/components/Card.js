import React from "react";

function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }
  
  return(
    <li className="card">
      <button 
      className="button button_type_card" 
      type="button" 
      name="card-image"
      onClick={handleClick}
      >
        <img className="card__image" src={card.link} alt="" />
      </button>
      <button className={`button button_type_remove ${(card.owner._id === "1f938e0ac95d82203f13dc8c") ? 'button_type_remove-active' : ''}`} type="button" aria-label="Удалить картинку" name="remove-image"></button>
      <div className="card__item">
        <h2 className="card__text">{card.name}</h2>
        <div className="card__like">
          <button className="button button_type_like" type="button" aria-label="Поставить лайк" name="like"></button>
          <span className="card__like-item">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
};

export default Card;