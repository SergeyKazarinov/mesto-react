import React, {useState, useEffect, useContext} from "react";
import Card from "./Card";
import { CurrentUserContext } from "./CurrentUserContext";
import api from "./utils/Api";


function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);


  useEffect(() => {
    api.getInitialCards()
    .then((res) => {
      setCards(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if(isLiked) {
      api.deleteLike(card)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      api.setLike(card)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card)
      .then(() => {
        setCards((cards) => {
          return cards.filter(item => item !== card);
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
            <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
          </div>
          <div className="profile__info">
            <div className="profile__flex-name">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button 
                onClick={onEditProfile}
                className="button button_type_edit"
                type="button"
                aria-label="Редактировать имя и информацию"
                name="edit-button">
              </button>
            </div>
              <span className="profile__job">{currentUser.about}</span>
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
            onCardClick = {onCardClick}
            onCardLike = {handleCardLike}
            onCardDelete = {handleCardDelete}
            />
          })}
      </ul>
    </section>
  </main>
  );
}
export default Main;