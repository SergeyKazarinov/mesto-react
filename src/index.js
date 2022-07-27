import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/ImagePopup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <div className="page">
    <Header />
    <Main />
    <Footer />
    <App />
    <PopupWithForm name="edit-profile" title="Редактировать профиль" />
    <PopupWithForm name="add-image" title="Новое место" />
    <PopupWithForm name="avatar" title="Обновить аватар" />
    <PopupWithForm name="delete" title="Вы уверены?" />
    <ImagePopup />
    </div>
  </React.StrictMode>
      
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
