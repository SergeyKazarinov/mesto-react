import React from "react";

function PopupWithForm(props) {
  return(
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button type="button" className="button button_type_close" aria-label="Закрыть окно"></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="form" name={props.name} /*"profile-edit"*/ novalidate>
          
          <button className="button button_type_save" value="Сохранить" id="button-save">Сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;