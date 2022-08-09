import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({isOpen, onClose, onSubmit, card}) {
  
  function handleClick(e) {
    e.preventDefault();
    onSubmit(card);
  }
  
  return(
    <PopupWithForm 
      name="delete" 
      title="Вы уверены?" 
      titleBtn="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleClick}
      isValid={true}
    >
    </PopupWithForm>
  )
}

export default DeleteCardPopup;