import React, {useState, useEffect, useContext} from "react";
import Card from "./Card";
import { CurrentUserContext } from "./CurrentUserContext";
import { CurrentCardsContext } from "./CurrentCardsContext";
import api from "./utils/Api";


function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const user = useContext(CurrentUserContext);
  const cards = useContext(CurrentCardsContext);

  return (
    <main className="containt">
      <section className="profile">
        <div className="profile__space-between">
          <div className="profile__avatar-container">
            <button 
              onClick={onEditAvatar} 
              className="button button_type_avatar" 
              type="button" 
              aria-label="Изменить аватар" 
              name="avatar-button">
            </button>
            <img className="profile__avatar" src={user.avatar} alt="Аватар" />
          </div>
          <div className="profile__info">
            <div className="profile__flex-name">
              <h1 className="profile__name">{user.name}</h1>
              <button 
                onClick={onEditProfile}
                className="button button_type_edit"
                type="button"
                aria-label="Редактировать имя и информацию"
                name="edit-button">
              </button>
            </div>
              <span className="profile__job">{user.about}</span>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          className="button button_type_add"
          type="button"
          aria-label="Добавить изображение"
          name="add-button">
        </button>
      </section>
      <section className="elements">
        <ul className="elements__grid list">
          {cards.map((card) => {
            return <Card 
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            isOwn = {card.owner._id === user._id}
            isLiked = {card.likes.some(i => i._id === user._id)}
            />
          })}
      </ul>
    </section>
  </main>
  );
}
export default Main;