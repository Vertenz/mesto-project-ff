import { openModal } from "./modal.js";

const imagePopup = document.querySelector('.popup_type_image');
const imageElement = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

// Функция создания карточки
const createCard = (cardData) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement= cardTemplate.querySelector(".card").cloneNode(true);
  
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');
  
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  
  deleteButton.addEventListener('click', () => handleDelete(cardElement));
  likeButton.addEventListener('click', () => handleLike(likeButton));
  cardImage.addEventListener('click', () => openImageModal(cardImage));
  
  return cardElement;
}

// Функция удаления карточки
const handleDelete = (cardElement) => { 
  cardElement.remove(); 
}; 

// Функция лайка карточки
const handleLike = (likeButton) => {
  likeButton.classList.toggle('card__like-button_is-active');
};

// Функция открытия модального окна с изображением
const openImageModal = (image) => {
  imageElement.src = image.src;
  imageElement.alt = image.alt;
  popupCaption.textContent = image.alt;
  window.requestAnimationFrame(() => {
      openModal(imagePopup);
  });
}

export { createCard, handleDelete, handleLike };