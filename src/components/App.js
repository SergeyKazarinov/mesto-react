import React, {useState, useEffect} from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import api from "./Api";
import {CurrentUserContext} from '../context/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectCard] = useState({isOpen: false, card: {}});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
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

  function handleEscClose(e) {
    e.key === "Escape" && closeAllPopups();
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    window.addEventListener('keydown', handleEscClose);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
    window.addEventListener('keydown', handleEscClose);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
    window.addEventListener('keydown', handleEscClose);
  }

  function handleCardClick(card) {
    setSelectCard({isOpen: true, card: card});
    window.addEventListener('keydown', handleEscClose);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectCard({isOpen: false, card: {}});
    window.removeEventListener('keydown', handleEscClose);
  }

  function handleUpdateUser(userData) {
    api.patchUserInfo(userData)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleUpdateAvatar(avatarLink) {
    api.patchAvatarInfo(avatarLink)
    .then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      closeAllPopups();
    });
  }

  function handleAddPlaceSubmit(newCard) {
    api.addNewCard(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

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
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        /> 

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <AddPlacePopup 
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <PopupWithForm 
          name="delete" 
          title="Вы уверены?" 
          titleBtn="Да"
        >
        </PopupWithForm>
        <ImagePopup 
          card = {selectedCard}
          onClose = {() => setSelectCard({isOpen: false, card: {}})}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;