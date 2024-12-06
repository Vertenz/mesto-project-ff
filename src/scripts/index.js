import { addCardList } from './cardList.js';
import { openModal } from './modal.js';
import { handleEditFormSubmit, handleCardAdd, fillEditForm, editForm, cardForm } from './form.js';

// дом элементы
const profileEditButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_type_edit');
const profileAddButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');
const imageElement = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

// функции карточек
// Функция удаления карточки
const deleteCard = (cardElement) => { 
    cardElement.remove(); 
}; 
  
// Функция лайка карточки
const likeCard = (likeButton) => {
    likeButton.classList.toggle('card__like-button_is-active');
};

// Функция открытия модального окна с изображением
const handleImageClick = (image) => {
    imageElement.src = image.src;
    imageElement.alt = image.alt;
    popupCaption.textContent = image.alt;
    window.requestAnimationFrame(() => {
        openModal(imagePopup);
    });
}


// слушатели 
profileEditButton.addEventListener('click', () => {
    openModal(profilePopup);
    fillEditForm();
});
profileAddButton.addEventListener('click', () => {
    openModal(cardPopup);
});
editForm.addEventListener('submit', handleEditFormSubmit);
cardForm.addEventListener('submit', (event) => handleCardAdd(event, { deleteCard, likeCard, handleImageClick }));


// выводим карточки на страницу
addCardList({ deleteCard, likeCard, handleImageClick });