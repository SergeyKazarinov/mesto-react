import React from "react";

function ImagePopup() {
  return(
    <div className="popup popup_type_image-zoom">
      <div className="popup__container-image">
        <button type="button" className="button button_type_close" aria-label="Закрыть окно"></button>
        <img className="popup__image" src="./images/Image1.jpg" alt="" />
        <h2 className="popup__text"></h2>
      </div>
    </div>
  );
}
export default ImagePopup;