import { renderCard } from "./cardList.js";
import initialCards from "./cards.js";
import { openImageModal } from "./modal.js";

// Функция создания карточки
const createCard = (cardData, handleDelete, handleLike) => {
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

// Вывод карточек на страницу
const initialCardList = () => {
  initialCards.forEach(cardData => {
    renderCard(cardData);
  });
}

export { initialCardList, createCard, handleDelete, handleLike };