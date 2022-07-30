import React, {useState, useEffect} from "react";
import Card from "./Card";
import api from "./utils/Api";


function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserAvatar(res.avatar);
        setUserDescription(res.about);
      })
      .catch((err) => {
        console.log(err);
      });

      api.getInitialCards()
        .then((res) => {
          setCards(res);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

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
            <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          </div>
          <div className="profile__info">
            <div className="profile__flex-name">
              <h1 className="profile__name">{userName}</h1>
              <button 
                onClick={onEditProfile}
                className="button button_type_edit"
                type="button"
                aria-label="Редактировать имя и информацию"
                name="edit-button">
              </button>
            </div>
              <span className="profile__job">{userDescription}</span>
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
            />
          })}
      </ul>
    </section>
  </main>
  );
}
export default Main;