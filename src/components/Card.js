import React, { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `button button_type_remove ${
    isOwn ? "button_type_remove-active" : ""
  }`;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `button button_type_like ${
    isLiked ? "button_type_like-active" : ""
  }`;

  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="card">
      <button
        className="button button_type_card"
        type="button"
        name="card-image"
        onClick={handleCardClick}
      >
        <img className="card__image" src={card.link} alt={card.name} />
      </button>
      <button
        className={cardDeleteButtonClassName}
        type="button"
        aria-label="Удалить картинку"
        name="remove-image"
        onClick={handleDeleteClick}
      />
      <div className="card__item">
        <h2 className="card__text">{card.name}</h2>
        <div className="card__like">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Поставить лайк"
            name="like"
            onClick={handleLikeClick}
          />
          <span className="card__like-item">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
